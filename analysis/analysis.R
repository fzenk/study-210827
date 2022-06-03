#------------------------------------------------------------------------------------------#
#### script info ####
#------------------------------------------------------------------------------------------#

# title: analysis for study 210827
# contributors: fred zenker
# date: 2021-10-17

#------------------------------------------------------------------------------------------#
#### packages ####
#------------------------------------------------------------------------------------------#

# load packages
library(tidyverse) # for data processing
library(lmerTest) # for mixed-effects modeling
library(readxl) # for reading .xlsx files
library(fs) # for file management
library(base64enc) # for converting recordings from base64 to audio files
library(stringdist) # for calculating edit distance on c-test responses
library(hunspell) # for spellchecking of c-test responses

#------------------------------------------------------------------------------------------#
#### read in processed data ####
#------------------------------------------------------------------------------------------#

df <- read_csv('data/data.csv', col_types = cols(.default = 'c',
                                                                    run_id = 'n',
                                                                    participant = 'f'))


check <- df %>%
  group_by(participant, recorded_at) %>%
  summarise() %>%
  ungroup() %>%
  arrange(recorded_at) %>%
  filter(is.na(recorded_at) == FALSE)

#------------------------------------------------------------------------------------------#
#### exit survey ####
#------------------------------------------------------------------------------------------#

# inspect exit survey
check <- df %>%
  select(-audio_data) %>%
  filter(trial_name == 'exit_survey') %>%
  select(run_id, participant, response, recorded_at) %>%
  separate_rows(response, sep = '","') %>%
  separate(response, c("field", "value"), sep = ":") %>%
  filter(str_detect(field, "example", negate=T)) %>%
  mutate(field = str_remove_all(field, '\\"|\\{|\\}'),
         value = str_remove_all(value, '\\"|\\{|\\}')) %>%
  arrange(recorded_at)

#------------------------------------------------------------------------------------------#
#### language survey ####
#------------------------------------------------------------------------------------------#

# create dataframe for language survey responses
survey <- df %>%
  filter(trial_name == "language_survey") %>%
  select(run_id, participant, condition, response) %>%
  separate_rows(response, sep = '","') %>%
  separate(response, c("field", "value"), sep = ":") %>%
  filter(str_detect(field, "example", negate=T)) %>%
  mutate(field = str_remove_all(field, '\\"|\\{|\\}'),
         value = str_remove_all(value, '\\"|\\{|\\}'))

# age
check <- survey %>%
  filter(group == 'korean') %>%
  filter(field == 'age') %>%
  mutate(value = as.numeric(as.character(value)))
mean(check$value)
min(check$value)
max(check$value)

# aoa
check <- survey %>%
  filter(group == 'korean') %>%
  filter(field == 'english_aoa') %>%
  mutate(value = as.numeric(as.character(value)))
mean(check$value)
min(check$value)
max(check$value)

#------------------------------------------------------------------------------------------#
#### speaking task ####
#------------------------------------------------------------------------------------------#

# create data frame for elicited production data
pt <- df %>%
  filter(trial_name == "speaking") %>%
  select(run_id, participant, audio_data)

# define function to write audio data to sound files
convert <- function(x) { 
  binary <- base64decode(x["audio_data"]) 
  myfile <- file(paste0("audio/ko210827_", x["participant"],".wav"),"wb")
  writeBin(binary, myfile)
  close(myfile)
}

# use apply() to iterate the "convert" function over all the rows in the dataframe
apply(X = pt, FUN = convert, MARGIN = 1)

#------------------------------------------------------------------------------------------#
#### writing task ####
#------------------------------------------------------------------------------------------#

wr <- df %>% 
  filter(trial_name == 'writing') %>%
  select(participant, response, rt, recorded_at)

#------------------------------------------------------------------------------------------#
#### c-test ####
#------------------------------------------------------------------------------------------#

# filter to c-test
ct <- df %>% filter(trial_name %in% c('ctest1', 'ctest2', 'cloze'))

# drop unneeded columns
ct <- ct %>% select(trial_name, run_id, participant, response)

# separate form responses
ct <- ct %>% 
  separate_rows(response, sep = '","') %>%
  separate(response, c("field", "value"), sep = ":") %>%
  filter(str_detect(field, "example", negate=T)) %>%
  mutate(field = str_remove_all(field, "[^[:alnum:]]"),
         value = str_remove_all(value, "[^[:alnum:]]"))

# read in correct answers
answers <- read_csv("answers.csv") %>%
  mutate_all(as.character) %>%
  mutate(field = str_remove_all(field, "[^[:alnum:]]")) %>%
  select(task, field, word, onset, exact, acceptable)

# add correct answers to dataframe
ct <- ct %>% left_join(answers, by = "field")

# correct spelling and determine accuracy
ct2 <- ct %>%
  mutate(value = str_trim(tolower(value)),
         onset = str_trim(tolower(onset)),
         acceptable = str_trim(tolower(acceptable)),
         word = str_trim(tolower(word))) %>%
  mutate(response = case_when(str_detect(field, 'brown') ~ value,
                              TRUE ~ str_c(onset, value))) %>%
  mutate(response_regex = str_c('\\b', response, '\\b')) %>%
  mutate(match1 = str_detect(acceptable, response_regex)) %>%
  mutate(spelling = case_when(match1 == FALSE ~ as.character(hunspell_check(response)))) %>%
  mutate(suggestion = case_when(spelling == FALSE ~ as.character(hunspell_suggest(response)))) %>%
  mutate(suggestion_regex = str_replace_all(suggestion, c('c\\("' = '\\\\b', 
                                                     '", "' = '\\\\b|\\\\b',
                                                     '"\\)' = '\\\\b'))) %>%
  mutate(match2 = str_detect(acceptable, suggestion_regex)) %>%
  mutate(accuracy = case_when(match1 == TRUE ~ TRUE,
                              match2 == TRUE ~ TRUE,
                              TRUE ~ FALSE))

# check accuracy by participant
check <- ct2 %>%
  group_by(trial_name, participant) %>%
  summarise(accuracy = mean(accuracy, na.rm=T)) %>%
  ungroup() %>%
  arrange(participant)

# check incorrect responses
check <- ct2 %>%
  filter(accuracy == FALSE) %>%
  select(trial_name, participant, field, word, response, accuracy)

# summarise data for plotting 
plot <- ct2 %>%
  select(-value, -onset, -exact, -spelling, -suggestion, -match1, -match2) %>%
  group_by(trial_name, run_id, participant) %>%
  summarise(mean = mean(accuracy)) %>%
  ungroup()

# generate plot
ggplot(plot, aes(x=trial_name, y=mean, fill=trial_name, label=participant)) + 
  geom_hline(yintercept=.5) +
  geom_violin() +
  geom_boxplot(width = .1, fill='white') +
  geom_jitter(size=1.5, shape=1, alpha=.25, position = position_jitter(seed=2, width=.15)) +
  #geom_text(size = 2.5, col = "black", position = position_jitter(seed=2)) +
  theme_classic() +
  scale_x_discrete(name="task", 
                   limits = c('cloze', 'ctest1', 'ctest2')) +
  scale_y_continuous(name="accuracy rate", 
                     limits=c(0, 1.01)) +
  theme(text = element_text(size = 12), 
        plot.title = element_text(size = 12, hjust = .5), 
        legend.position = "hide")

# save plot
ggsave("plots/ctest.png", width=3.25, height=2.75, dpi=600)

# calculate percent accuracy based on levenshtein distance with acceptable scoring
lev <- ct2 %>%
  separate_rows(acceptable, sep = ' ') %>%
  mutate(length = case_when(trial_name == 'cloze' ~ str_length(acceptable),
                            TRUE ~ str_length(exact)),
         dist = case_when(trial_name == 'cloze' ~ stringdist(acceptable, value, method = 'lv'),
                          TRUE ~ stringdist(exact, value, method = 'lv'))) %>%
  mutate(diff = length - dist) %>%
  mutate(diff = case_when(diff < 0 ~ 0,
                          TRUE ~ diff)) %>%
  mutate(itm_score = diff / length) %>%
  group_by(participant, trial_name, field) %>%
  summarize(itm_score = max(itm_score)) %>%
  ungroup() #%>%
  #select(trial_name, participant, field, exact, acceptable, value, itm_score)
  
# calculate percent accuracy based on levenshtein distance with exact scoring
# lev <- ct2 %>%
#   mutate(length = str_length(exact),
#          dist = stringdist(exact, value, method='lv')) %>%
#   mutate(diff = length - dist) %>%
#   mutate(diff = case_when(diff < 0 ~ 0,
#                           TRUE ~ diff)) %>%
#   mutate(itm_score = diff / length) %>%
#   group_by(run_id, participant) %>%
#   mutate(ppt_score = mean(itm_score)) %>%
#   ungroup()

# check scores by participant
check <- lev %>%
  filter(trial_name == 'cloze') %>%
  group_by(participant) %>%
  summarise(mean = mean(itm_score, na.rm = T)) %>%
  ungroup()

# check distribution of scores
check <- lev %>%
  group_by(participant, trial_name) %>%
  summarise(ppt_score = mean(itm_score, na.rm = T)) %>%
  ungroup() %>%
  group_by(trial_name) %>%
  summarise(mean = mean(ppt_score),
            sd = sd(ppt_score),
            min = min(ppt_score),
            max = max(ppt_score))

# summarize by plotting based on levenstein distance accuracy scores
plot <- lev %>%
  group_by(trial_name, participant) %>%
  summarise(mean = mean(itm_score)) %>%
  ungroup()

# generate plot
ggplot(plot, aes(x=trial_name, y=mean, fill=trial_name, label=participant)) + 
  geom_hline(yintercept=.5) +
  geom_violin() +
  geom_boxplot(width = .1, fill='white') +
  geom_jitter(shape=1, width = .15, alpha = .25) +
  #geom_text(size = 2.5, col = "black", position = "jitter") +
  theme_classic() +
  scale_x_discrete(name="task", 
                   limits = c('cloze', 'ctest1', 'ctest2')) +
  scale_y_continuous(name="accuracy rate", 
                     limits=c(0, 1.01)) +
  theme(text = element_text(size = 12), 
        plot.title = element_text(size = 12, hjust = .5), 
        legend.position = "hide")

# save plot
ggsave("plots/levenstein.png", width=3.25, height=2.75, dpi=600)

#------------------------------------------------------------------------------------------#
#### dataframe for manual coding ####
#------------------------------------------------------------------------------------------#

# filter to c-test

ct <- df %>% filter(trial_name %in% c('ctest1', 'ctest2', 'cloze'))

# drop unneeded columns

ct <- ct %>% select(trial_name, run_id, participant, response)

# separate form responses

ct <- ct %>% 
  separate_rows(response, sep = '","') %>%
  separate(response, c("field", "value"), sep = ":") %>%
  filter(str_detect(field, "example", negate=T)) %>%
  mutate(field = str_remove_all(field, "[^[:alnum:]]"),
         value = str_remove_all(value, "[^[:alnum:]]"))

# read in correct answers

answers <- read_csv("answers.csv") %>%
  mutate_all(as.character) %>%
  mutate(field = str_remove_all(field, "[^[:alnum:]]")) %>%
  select(task, field, word, onset, exact, acceptable)

# add correct answers to dataframe

ct <- ct %>% left_join(answers, by = "field")

# make further alterations to dataframe
  
ct <- ct %>%
  mutate(value = str_trim(tolower(value)),
         onset = str_trim(tolower(onset)),
         acceptable = str_trim(tolower(acceptable))) %>%
  mutate(response = case_when(str_detect(field, 'brown') ~ value,
                              TRUE ~ str_c(onset, value))) %>%
  select(participant, task, field, exact = word, acceptable, response)

ct <- ct %>%
  mutate(response = str_c('_', response, '_')) %>%
  mutate(exact = str_c('_', exact, '_')) %>%
  mutate(acceptable = str_replace_all(acceptable, ' ', '_')) %>%
  mutate(acceptable = str_c('_', acceptable, '_'))

ct <- ct %>%
  mutate(accuracy = case_when(str_detect(exact, response) ~ 'true',
                              TRUE ~ NA_character_)) %>%
  mutate(accuracy = case_when(is.na(accuracy) == TRUE & str_detect(acceptable, response) ~ 'accept',
                              TRUE ~ accuracy)) %>%
  arrange(accuracy)

write_csv(ct, 'ct_coding_manual.csv')

check <- ct %>%
  filter(is.na(accuracy) == TRUE)

#------------------------------------------------------------------------------------------#
#### completion time ####
#------------------------------------------------------------------------------------------#

# filter to c-test
ct <- df %>% filter(trial_name %in% c('ctest1', 'ctest2', 'cloze'))

# prep for plotting
plot <- ct %>% select(trial_name, participant, rt) %>%
  mutate(rt = as.numeric(rt)) %>%
  mutate(rt = (rt/1000)/60)

# trim
plot <- plot %>%
  filter(rt <= 30)

# remove outliers
# plot <- plot %>%
#   group_by(trial_name) %>%
#   mutate(q1 = quantile(rt, .25),
#          q3 = quantile(rt, .75)) %>%
#   filter(rt >= q1-((q3-q1) * 1.5) & rt <= q3+((q3-q1) * 1.5)) %>%
#   ungroup()

# generate plot
ggplot(plot, aes(x=trial_name, y=rt, fill=trial_name, label=participant)) + 
  #geom_hline(yintercept=.5) +
  geom_violin() +
  geom_boxplot(width = .1, fill='white') +
  geom_jitter(size=1.5, shape=1, alpha=.25, position = position_jitter(seed=2, width=.15)) +
  #geom_text(size = 2.5, col = "black", position = position_jitter(seed=2)) +
  theme_classic() +
  #coord_cartesian(ylim = quantile(plot$rt, c(0, 1)))+
  scale_x_discrete(name="task", 
                   limits = c('cloze', 'ctest1', 'ctest2')) +
  scale_y_continuous(name="completion time (min)", 
                     limits=c(0, 30)) +
  theme(text = element_text(size = 12), 
        plot.title = element_text(size = 12, hjust = .5), 
        legend.position = "hide")

# save plot
ggsave("plots/rt.png", width=3.25, height=2.75, dpi=600)
