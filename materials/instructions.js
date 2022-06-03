/**
 * title: text for instructions in experiment 210510
 * author: fred zenker (https://www.fredzenker.com)
 */

// * global *

var en_continue_label = 'Continue';
var ko_continue_label = '계속';

var en_start_label = '<span style="font-size:145%;">Start the experiment</span>';
var ko_start_label = '<span style="font-size:145%;">실험 시작</span>';

var en_submit_label = 'Submit';
var ko_submit_label = '제출';

var en_progress = 'Completion Progress';
var ko_progress = '진행 상황';

// * preload media *

var media = [
    'img_cloze.jpg',
    'img_confirmation.jpg',
    'img_consent.jpg',
    'img_ctest.jpg',
    'img_lbq.jpg',
    'img_loading.jpg',
    'img_login.jpg',
    'img_overview.jpg',
    'img_success.jpg',
    'img_voice.jpg',
    'img_warning.png',
    'img_writing.jpg',
];

// * functions for counting words on writing task *

function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
                alphaNumericFound = true;
                return alphaNumericFound;
        }
    }
    return alphaNumericFound;
};

function countWord() {
    var words = document.getElementById("word").value;
    var split = words.split(' ');
    var count = 0;
    for (var i = 0; i < split.length; i++) {
        if (split[i] !== ' ' && isWord(split[i])) {
        count++;
        }
    }
    if (count < 100) {
        document.getElementById("word").setCustomValidity('Not enough words');
    } else if (count > 120) {
        document.getElementById("word").setCustomValidity('Too many words');
    } else {
        document.getElementById("word").setCustomValidity('');
    }
    document.getElementById("show").innerHTML = count;
};

// https://codesource.io/building-a-word-counter-in-javascript/
// https://www.geeksforgeeks.org/how-to-make-a-word-count-in-textarea-using-javascript/

// * login *

var login_header = 
    '<img src="img_login.jpg" height="150" title="image credit: vectorjuice / Freepik (www.freepik.com)"><br>'
;

var en_login_text = 
    '<span style="font-size:125%;"><b>Participant ID</b></span><p>Please enter the participant ID assigned to you by the researcher.</p><p><input name="pid" type="text" required></p>'
;

var ko_login_text = 
    '<span style="font-size:125%;"><b>참가ID</b></span><p>연구자에게 배정받은 참가ID를 입력하여 주십시오.</p><p><input name="pid" type="text" required></p>'
;

var en_login_html =
    login_header + en_login_text
;

var ko_login_html =
    login_header + ko_login_text
;

// * overview *

var overview_header =
    '<style>fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;} p {text-align:left;} ul {text-align:left}</style>'+ 
    '<img src="img_overview.jpg" height="150" title="image credit: pch.vector / Freepik (www.freepik.com)">'
;

var en_overview_text =
    '<h3 style="text-align:center">English Language Experiment (#210827)</h3>'+
    '<fieldset><legend><b>Overview</b></legend>'+
    '<p>Welcome! In this experiment, you will complete a language background survey and five short language tasks that involve speaking, writing, and filling in the blanks in passages. The entire experiment should take 30&ndash;45 minutes.</p>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>Eligibility Requirements</b></legend>'+
    '<ul>'+
    '<li>You are 18 years of age or older</li>'+
    '<li>You are a native speaker of Korean.</li>'+
    '<li>You learned English as a second or foreign language.</li>'+
    '</ul>'+
    '</ul>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>Equipment Needed</b></legend>'+
    '<p>The experiment must be completed on a laptop or desktop computer running the Chrome or Firefox browser. Do not attempt to do it on a smartphone or a tablet. Because one of the tasks involves recording short audio samples, you should make sure that your computer is capable of recording audio before starting the experiment. Most computers have built-in microphones that allow users to make audio recordings.</p>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>Eliminating Distractions</b></legend>'+
    '<p>This experiment collects valuable data for a dissertation research project. It is therefore important that you give the tasks your full attention and that you make sure you are in a quiet and distraction-free location before getting started. Please close all unrelated browser windows and refrain from using resources such as dictionaries and search engines while you are participating. If you need to, you can leave this page now and return later when you have found a suitable place to participate.</p>'+
    '</fieldset><br>'
;

var ko_overview_text = 
    '<h3 style="text-align:center; font-size:125%;">영어에 관한 언어 실험</h3>'+
    '<fieldset><legend><b>실험 설명</b></legend>'+
    '<p>안녕하세요! 본 실험에서는 언어 배경 관련 설문조사와 말하기, 쓰기, 빈칸 채우기와 같은 다섯 개의 짧은 영어 과제를 하실 것입니다. 실험 전체는 30&ndash;45분 정도 소요될 것이라 예상됩니다.</p>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>실험 참가 자격 요건</b></legend>'+
    '<ul>'+
    '<li>만 18세 이상</li>'+
    '<li>한국어 원어민</li>'+
    '<li>영어를 제2언어 또는 외국어로 배운 자</li>'+
    '</ul>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>필요 기기</b></legend>'+
    '<p>본 실험은 크롬이나 파이어폭스 브라우저로 노트북이나 컴퓨터로만 접속하실 수 있습니다 (스마트폰이나 태블릿 사용 불가). 한 과제는 짧은 녹음을 답변으로 제출해야 하기 때문에 실험 시작 전 컴퓨터로 녹음이 가능한 지 확인하여 주시기 바랍니다. 대부분의 컴퓨터는 마이크가 내장되어 있어 녹음이 가능할 것으로 예상됩니다.</p>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>방해 요소 제거</b></legend>'+
    '<p>본 실험은 논문 연구에 매우 중요한 자료를 수집하는 것을 목적으로 합니다. 그러므로 과제를 수행하실 때 최대한 집중하실 수 있도록 방해 요소가 없는 조용한 장소에서 참여하여 주시기 바랍니다. 실험 외의 다른 브라우저나 프로그램은 닫아 주시기 바랍니다. 더하여, 실험 중 검색이나 사전 등 다른 자료를 사용하는 것을 자제하여 주십시오. 필요하시다면, 실험을 할 수 있는 적합한 장소에서 다시 접속하여 주시기 바랍니다.</p>'+
    '</fieldset><br>'+
    '<fieldset><legend><b>실험 참가 사례금</b></legend>'+
    '<p>실험에 참가하시는 분들께 7,500원의 사례금을 드립니다. 사례금은 한국의 계좌로 이체될 예정이며, 실험 마지막 부분에 (1) 은행명, (2) 예금주 명, (3) 계좌번호를 작성하여 주시면 해당 계좌로 송금될 것입니다. 더하여 송금 관련하여 연구자가 연락을 드릴 수 있도록 이메일 주소도 남겨주시면 감사하겠습니다. 실험 참가비는 72시간 이내에 지급될 수 있도록 최선을 다하겠습니다. 사례금 관련하여 질문사항이 있으시면 저에게 이메일 fzenker@hawaii.edu로 연락주시기 바랍니다.</p></fieldset><br>'
;

var en_overview_stimulus =
    overview_header + en_overview_text
;
var ko_overview_stimulus =
    overview_header + ko_overview_text
;

// * consent form *

var consent_header =
    '<style>p {text-align:left;} .section {padding:.5em;} table {border-collapse:collapse; margin-left:auto; margin-right:auto;} .row {border:3px solid #c6c6c6;box-shadow:2px 2px 5px #999; padding:.5em;} td {text-align:left;} </style>'+
    '<img src="img_consent.jpg" height="125" title="image credit: pch.vector / Freepik (www.freepik.com)"><br>'
;

var en_consent_text =
    '<span style="font-size:125%; font-weight:bold">Reading, Rating, and Recording Sentences in English</span>'+
    '<p>Welcome! In this experiment, you will complete a language background survey and four language tasks that involve reading, rating, and recording sentences in English. Your responses will provide important data for a dissertation research project.</p>'+
    '<p>Before we get started with the experiment, it is important that you know your rights as a participant. Click on the link below to open the consent form in a new tab on your browser.</p>'+
    '<a href="consent-form-english-v3.pdf" target="_blank" style="font-size:115%;" >Click here to read the consent form</a><br><br>'+
    '<table>'+
    '<tr class="row"><td style="background-color:#c6c6c6;"><input type="checkbox" name="agreement1" value="agree" required></td>'+
    '<td><div class="section">'+
    '<p>I have read and understood all the contents of the consent form, and I agree to participate in the experiment</p>'+
    '</div></td></tr>'+
    '<tr class="spacer" height="20"><td></td></tr>'+
    '<tr class="row"><td style="background-color:#c6c6c6;"><input type="checkbox" name="agreement2" value="agree" required></td>'+
    '<td><div class="section">'+
    '<p>I agree to read all the instructions carefully and to give each task my best effort</p>'+
    '</div></td></tr>'+
    '</table><br>'
;
var ko_consent_text =
    '<span style="font-size:125%; font-weight:bold">사전동의</span>'+
    '<p>실험에 참여하기 전 참가자로서의 권리를 알려드립니다. 아래의 링크를 클릭하시면 사전 동의서의 전문을 보실 수 있습니다.</p>'+
    '<a href="consent-form-korean-v3.pdf" target="_blank" style="font-size:110%; font-weight:bold">사전동의서</a><br><br>'+
    '<table>'+
    '<tr class="row"><td style="background-color:#c6c6c6;"><input type="checkbox" name="agreement1" value="agree" required></td>'+
    '<td><div class="section">'+
    '<p>실험 참가 동의서의 내용을 읽고 이해하였으며 실험에 참여하는 것에 동의합니다.</p>'+
    '</div></td></tr>'+
    '<tr class="spacer" height="20"><td></td></tr>'+
    '<tr class="row"><td style="background-color:#c6c6c6;"><input type="checkbox" name="agreement2" value="agree" required></td>'+
    '<td><div class="section">'+
    '<p>실험에 대한 설명을 모두 읽었으며 각 질문에 최선을 다해 답변할 것에 동의합니다.</p>'+
    '</div></td></tr>'+
    '</table><br>'
;

var en_consent_html =
    consent_header + en_consent_text
;
var ko_consent_html =
    consent_header + ko_consent_text
;

// * language survey *

var number_options =
    '<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option><option value="62">62</option><option value="63">63</option><option value="64">64</option><option value="65">65</option><option value="66">66</option><option value="67">67</option><option value="68">68</option><option value="69">69</option><option value="70">70</option><option value="71">71</option><option value="72">72</option><option value="73">73</option><option value="74">74</option><option value="75">75</option><option value="76">76</option><option value="77">77</option><option value="78">78</option><option value="79">79</option><option value="80">80</option><option value="81">81</option><option value="82">82</option><option value="83">83</option><option value="84">84</option><option value="85">85</option><option value="86">86</option><option value="87">87</option><option value="88">88</option><option value="89">89</option><option value="90">90</option><option value="91">91</option><option value="92">92</option><option value="93">93</option><option value="94">94</option><option value="95">95</option><option value="96">96</option><option value="97">97</option><option value="98">98</option><option value="99">99</option>'
;

var en_age_options =
    number_options
;
var ko_age_options =
    '<option value="1">만 1세</option><option value="2">만 2세</option><option value="3">만 3세</option><option value="4">만 4세</option><option value="5">만 5세</option><option value="6">만 6세</option><option value="7">만 7세</option><option value="8">만 8세</option><option value="9">만 9세</option><option value="10">만 10세</option><option value="11">만 11세</option><option value="12">만 12세</option><option value="13">만 13세</option><option value="14">만 14세</option><option value="15">만 15세</option><option value="16">만 16세</option><option value="17">만 17세</option><option value="18">만 18세</option><option value="19">만 19세</option><option value="20">만 20세</option><option value="21">만 21세</option><option value="22">만 22세</option><option value="23">만 23세</option><option value="24">만 24세</option><option value="25">만 25세</option><option value="26">만 26세</option><option value="27">만 27세</option><option value="28">만 28세</option><option value="29">만 29세</option><option value="30">만 30세</option><option value="31">만 31세</option><option value="32">만 32세</option><option value="33">만 33세</option><option value="34">만 34세</option><option value="35">만 35세</option><option value="36">만 36세</option><option value="37">만 37세</option><option value="38">만 38세</option><option value="39">만 39세</option><option value="40">만 40세</option><option value="41">만 41세</option><option value="42">만 42세</option><option value="43">만 43세</option><option value="44">만 44세</option><option value="45">만 45세</option><option value="46">만 46세</option><option value="47">만 47세</option><option value="48">만 48세</option><option value="49">만 49세</option><option value="50">만 50세</option><option value="51">만 51세</option><option value="52">만 52세</option><option value="53">만 53세</option><option value="54">만 54세</option><option value="55">만 55세</option><option value="56">만 56세</option><option value="57">만 57세</option><option value="58">만 58세</option><option value="59">만 59세</option><option value="60">만 60세</option><option value="61">만 61세</option><option value="62">만 62세</option><option value="63">만 63세</option><option value="64">만 64세</option><option value="65">만 65세</option><option value="66">만 66세</option><option value="67">만 67세</option><option value="68">만 68세</option><option value="69">만 69세</option><option value="70">만 70세</option><option value="71">만 71세</option><option value="72">만 72세</option><option value="73">만 73세</option><option value="74">만 74세</option><option value="75">만 75세</option><option value="76">만 76세</option><option value="77">만 77세</option><option value="78">만 78세</option><option value="79">만 79세</option><option value="80">만 80세</option><option value="81">만 81세</option><option value="82">만 82세</option><option value="83">만 83세</option><option value="84">만 84세</option><option value="85">만 85세</option><option value="86">만 86세</option><option value="87">만 87세</option><option value="88">만 88세</option><option value="89">만 89세</option><option value="90">만 90세</option><option value="91">만 91세</option><option value="92">만 92세</option><option value="93">만 93세</option><option value="94">만 94세</option><option value="95">만 95세</option><option value="96">만 96세</option><option value="97">만 97세</option><option value="98">만 98세</option><option value="99">만 99세</option>'
;

var language_survey_header =
    '<style>fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;} p {text-align:left;} h3 {text-align:left;font-size:110%;} li {margin-bottom:10px} ol {text-align:left}</style>'+
    '<img src="img_lbq.jpg" height="125" title="image credit: pch.vector / Freepik (www.freepik.com)"><br>'
;

var en_language_survey_text =
    // header
    '<span style="text-align:center;font-weight:bold;font-size:125%;">Language Background Survey</span>'+
    '<p style="text-align:center;">This form asks for some important information about your language background</p>'+
    // basic information
    '<fieldset><legend><b>Basic Information</b></legend>'+
    '<ol>'+
    '<li>Age: <input type="number" name="age" min="1", max="100" required style="width: 6ch"></li>'+
    '<li>Gender: <input type="radio" name="gender" value="female" required>Female <input type="radio" name="gender" value="male">Male <input type="radio" name="gender" value="nonbinary">Nonbinary</li>'+
    '<li>Place where you grew up: <input name="state-where-you-grew-up" type="text" style="width: 15ch" placeholder="State/Province" required>, <input name="country-where-you-grew-up" type="text" style="width: 15ch" placeholder="Country" required></li>'+
    '<li>Place where you live now: <input name="state-where-you-live-now" type="text" style="width: 15ch" placeholder="State/Province" required>, <input name="country-where-you-live-now" type="text" style="width: 15ch" placeholder="Country" required></li>'+
    '<li>Highest level of education completed:<br><input type="radio" name="education" value="highschool" required>High School Diploma <input type="radio" name="education" value="undergrad">Undergraduate Degree <input type="radio" name="education" value="graduate">Graduate Degree <input type="radio" name="education" value="other">Other</li>'+
    '</ol>'+
    '</fieldset><br>'+
    // places you have lived
    '<fieldset><legend><b>Places Where You Have Lived</b></legend>'+
    '<p>Let us know about the countries you have lived in for a year or longer, including your home country</p>'+
    // country1
    '<h3>Country 1 (Required):</h3>'+
    '<ol>'+
    '<li>Name of country: <input name="country1_name" type="text" size="10"></li>'+
    '<li>Age when you moved to this country: <select name="country1_arrival" required><option value=""></option><option value="NA">Not Applicable</option><option value="0">Born in This Country</option>'+number_options+'</select></li>'+
    '<li>Total number of years spent living in this country: <select name="country1_duration" required><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '<li>Age when you moved away (if applicable): <select name="country1_departure" required><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '</ol>'+
    // country2
    '<h3>Country 2 (If Applicable):</h3>'+
    '<ol>'+
    '<li>Name of country: <input name="country2_name" type="text" size="10"></li>'+
    '<li>Age when you moved to this country: <select name="country2_arrival"><option value=""></option><option value="NA">Not Applicable</option><option value="0">Born in This Country</option>'+number_options+'</select></li>'+
    '<li>Total number of years spent living in this country: <select name="country2_duration"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '<li>Age when you moved away (if applicable): <select name="country2_departure"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '</ol>'+
    // country3
    '<h3>Country 3 (If Applicable):</h3>'+
    '<ol>'+
    '<li>Name of country: <input name="country3_name" type="text" size="10"></li>'+
    '<li>Age when you moved to this country: <select name="country3_arrival"><option value=""></option><option value="NA">Not Applicable</option><option value="0">Born in This Country</option>'+number_options+'</select></li>'+
    '<li>Total number of years spent living in this country: <select name="country3_duration"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '<li>Age when you moved away (if applicable): <select name="country3_departure"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '</ol>'+
    // other
    '<h3>If you have lived in any additional countries, tell us about them here:</h3>'+
    '<p style="text-align:left;"><textarea name="other_countries" rows="3" style="width:90%;"></textarea></p>'+
    '</fieldset><br>'+
    // languages you speak
    '<fieldset><legend><b>Languages You Speak</b></legend>'+
    '<p>Provide information about all the languages you speak, including your native language</p>'+
    // english
    '<h3>English (Required):</h3>'+
    '<ol>'+
    '<li>Proficiency level: <select name="english_proficiency" required><option value=""></option><option value="beginner">1 - Beginner</option><option value="lowintermediate">2 - Low Intermediate</option><option value="highintermediate">3 - High Intermediate</option><option value="advanced">4 - Advanced</option><option value="nearnative">5 - Near-Native</option><option value="native">6 - Native Speaker</option></select></li>'+
    '<li>Age when you started learning this language: <select name="english_aoa" required><option value=""></option><option value="0">From Birth</option>'+number_options+'</select></li>'+
    '<li>Did your primary caregivers speak this language to you when you were a child? <input type="radio" name="english_heritage" value="yes" required>Yes <input type="radio" name="english_heritage" value="no">No</li>'+
    '<li>Percentage of total weekly listening/speaking/reading/writing time spent using this language: <input type="number" min="0" max="100" name="english_percentage"  style="width: 6ch" required>%</li>'+
    '<li>Number of years spent studying this language as a second or foreign language (if applicable): <select name="english_duration" required><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '<li>Have you taken any advanced courses on English syntax (600-level or above?) <input type="radio" name="english_syntax" value="yes" required>Yes <input type="radio" name="english_syntax" value="no">No</li>'+
    '</ol>'+
    // language2
    '<h3>Language 2 (If Applicable):</h3>'+
    '<ol>'+
    '<li>Name of language: <input name="language2_name" type="text" size="10"></li>'+
    '<li>Proficiency level: <select name="language2_proficiency"><option value=""></option><option value="beginner">1 - Beginner</option><option value="lowintermediate">2 - Low Intermediate</option><option value="highintermediate">3 - High Intermediate</option><option value="advanced">4 - Advanced</option><option value="nearnative">5 - Near-Native</option><option value="native">6 - Native Speaker</option></select></li>'+
    '<li>Age when you started learning this language: <select name="language2_aoa"><option value=""></option><option value="0">From Birth</option>'+number_options+'</select></li>'+
    '<li>Did your primary caregivers speak this language to you when you were a child? <input type="radio" name="language2_heritage" value="yes" >Yes <input type="radio" name="language2_heritage" value="no" >No</li>'+
    '<li>Percentage of total weekly listening/speaking/reading/writing time spent using this language: <input type="number" min="0" max="100" name="language2_percentage"  style="width: 6ch">%</li>'+
    '<li>Number of years spent studying this language as a second or foreign language (if applicable): <select name="language2_duration"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '</ol>'+
    // language3
    '<h3>Language 3 (If Applicable):</h3>'+
    '<ol>'+
    '<li>Name of language: <input name="language3_name" type="text" size="10"></li>'+
    '<li>Proficiency level: <select name="language3_proficiency"><option value=""></option><option value="beginner">1 - Beginner</option><option value="lowintermediate">2 - Low Intermediate</option><option value="highintermediate">3 - High Intermediate</option><option value="advanced">4 - Advanced</option><option value="nearnative">5 - Near-Native</option><option value="native">6 - Native Speaker</option></select></li>'+
    '<li>Age when you started learning this language: <select name="language3_aoa"><option value=""></option><option value="0">From Birth</option>'+number_options+'</select></li>'+
    '<li>Did your primary caregivers speak this language to you when you were a child? <input type="radio" name="language3_heritage" value="yes" >Yes <input type="radio" name="language3_heritage" value="no" >No</li>'+
    '<li>Percentage of total weekly listening/speaking/reading/writing time spent using this language: <input type="number" min="0" max="100" name="language3_percentage"  style="width: 6ch">%</li>'+
    '<li>Number of years spent studying this language as a second or foreign language (if applicable): <select name="language3_duration"><option value=""></option><option value="NA">Not Applicable</option>'+number_options+'</select></li>'+
    '</ol>'+
    // other
    '<h3>If you speak any additional languages, tell us about them here:</h3>'+
    '<p style="text-align:left;"><textarea name="other_languages" rows="3" style="width:90%;"></textarea></p>'+
    '</fieldset><br>'
;
var ko_language_survey_text =
    // header
    '<span style="text-align:center;font-weight:bold;font-size:125%;">언어 배경 조사</span>'+
    '<p style="text-align:center;">실험 참여 자격을 확인하기 위해 아래의 설문조사에 답변하고 언어 배경에 대한 정보를 제공하여 주시기 바랍니다.</p>'+
    // basic information
    '<fieldset><legend><b>기본 정보</b></legend>'+
    '<ol>'+
    '<li>만 나이: <input type="number" name="age" min="1", max="100" required style="width: 6ch"></li>'+
    '<li>성별: <input type="radio" name="gender" value="female" required>여성 <input type="radio" name="gender" value="male">남성 <input type="radio" name="gender" value="nonbinary">기타</li>'+
    '<li>자란 곳: <input name="state-where-you-grew-up" type="text" style="width: 15ch" placeholder="주/도" required>, <input name="country-where-you-grew-up" type="text" style="width: 15ch" placeholder="나라" required></li>'+
    '<li>사는 곳: <input name="state-where-you-live-now" type="text" style="width: 15ch" placeholder="주/도" required>, <input name="country-where-you-live-now" type="text" style="width: 15ch" placeholder="나라" required></li>'+
    '<li>최종 학력: <input type="radio" name="education" value="highschool" required>고등학교 <input type="radio" name="education" value="undergrad">대학교 <input type="radio" name="education" value="graduate">대학원 <input type="radio" name="education" value="other">기타</li>'+
    '</ol>'+
    '</fieldset><br>'+
    // places you have lived
    '<fieldset><legend><b>거주 국가</b></legend>'+
    '<p>1년 이상 거주했던 국가를 알려주십시오.</p>'+
    // korea
    '<h3>한국 (필수):</h3>'+
    '<ol>'+
    '<li>이 국가에 처음 거주하기 시작한 나이(만): <select name="korea_arrival" required><option value=""></option><option value="NA">해당 사항 없음</option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>이 국가에서 거주한 연수: <select name="korea_duration" required><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '<li>이 국가를 떠난 나이(만): <select name="korea_departure" required><option value=""></option><option value="NA">해당 사항 없음</option>'+ko_age_options+'</select></li>'+
    '</ol>'+
    // country2
    '<h3>제2국 (해당 사항이 있는 경우):</h3>'+
    '<ol>'+
    '<li>국가 명: <input name="country2_name" type="text" size="10"></li>'+
    '<li>이 국가에 처음 거주하기 시작한 나이(만): <select name="country2_arrival"><option value=""></option><option value="NA">해당 사항 없음</option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>이 국가에서 거주한 연수: <select name="country2_duration"><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '<li>이 국가를 떠난 나이(만): <select name="country2_departure"><option value=""></option><option value="NA">해당 사항 없음</option>'+ko_age_options+'</select></li>'+
    '</ol>'+
    // country3
    '<h3>제3국 (해당 사항이 있는 경우):</h3>'+
    '<ol>'+
    '<li>국가 명: <input name="country3_name" type="text" size="10"></li>'+
    '<li>이 국가에 처음 거주하기 시작한 나이(만): <select name="country3_arrival"><option value=""></option><option value="NA">해당 사항 없음</option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>이 국가에서 거주한 연수: <select name="country3_duration"><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '<li>이 국가를 떠난 나이(만): <select name="country3_departure"><option value=""></option><option value="NA">해당 사항 없음</option>'+ko_age_options+'</select></li>'+
    '</ol>'+
    // other
    '<h3>그 외 다른 국가에서 거주한 경험이 있다면 알려주십시오:</h3>'+
    '<p style="text-align:left;"><textarea name="other_countries" rows="3" style="width:90%;"></textarea></p>'+
    '</fieldset><br>'+
    // languages you speak
    '<fieldset><legend><b>사용하는 언어</b></legend>'+
    '<p>사용하는 모든 언어에 관하여 정보를 제공하여 주시기 바랍니다.</p>'+
    // korean
    '<h3>한국어 (필수):</h3>'+
    '<ol>'+
    '<li>능력 수준: <select name="korean_proficiency" required><option value=""></option><option value="beginner">1 - 초보</option><option value="lowintermediate">2 - 중하</option><option value="highintermediate">3 - 중상</option><option value="advanced">4 - 고급</option><option value="nearnative">5 - 모국어 수준에 근접</option><option value="native">6 - 원어민</option></select></li>'+
    '<li>이 언어를 처음 배우기 시작한 나이 (만): <select name="korean_aoa" required><option value=""></option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>어렸을 때 주양육자(부모님, 친척 등)가 귀하에게 이 언어를 사용하였습니까? <input type="radio" name="korean_heritage" value="yes" required>네 <input type="radio" name="korean_heritage" value="no">아니오</li>'+
    '<li>한 주간 이 언어를 듣기/말하기/읽기/쓰기에 사용하는 시간의 비율: <input type="number" min="0" max="100" name="korean_percentage" style="width: 6ch" required>%</li>'+
    '<li>이 언어를 제2언어 또는 외국어로 공부한 경우, 해당 년수를 작성하여 주십시오: <select name="korean_duration" required><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '</ol>'+
    // english
    '<h3>영어 (필수):</h3>'+
    '<ol>'+
    '<li>능력 수준: <select name="english_proficiency" required><option value=""></option><option value="beginner">1 - 초보</option><option value="lowintermediate">2 - 중하</option><option value="highintermediate">3 - 중상</option><option value="advanced">4 - 고급</option><option value="nearnative">5 - 모국어 수준에 근접</option><option value="native">6 - 원어민</option></select></li>'+
    '<li>이 언어를 처음 배우기 시작한 나이 (만): <select name="english_aoa" required><option value=""></option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>어렸을 때 주양육자(부모님, 친척 등)가 귀하에게 이 언어를 사용하였습니까? <input type="radio" name="english_heritage" value="yes" required>네 <input type="radio" name="english_heritage" value="no">아니오</li>'+
    '<li>한 주간 이 언어를 듣기/말하기/읽기/쓰기에 사용하는 시간의 비율: <input type="number" min="0" max="100" name="english_percentage"  style="width: 6ch" required>%</li>'+
    '<li>이 언어를 제2언어 또는 외국어로 공부한 경우, 해당 년수를 작성하여 주십시오: <select name="english_duration" required><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '<li>12개월 이내의 공인 영어시험 점수가 있다면 시험의 이름과 점수를 알려주십시오.<br><input type="text" name="english_test" style="width: 90%"></li>'+
    '</ol>'+
    // language3
    '<h3>제3언어 (해당 사항이 있는 경우):</h3>'+
    '<ol>'+
    '<li>언어 명: <input name="language3_name" type="text" size="10"></li>'+
    '<li>능력 수준: <select name="language3_proficiency"><option value=""></option><option value="beginner">1 - 초보</option><option value="lowintermediate">2 - 중하</option><option value="highintermediate">3 - 중상</option><option value="advanced">4 - 고급</option><option value="nearnative">5 - 모국어 수준에 근접</option><option value="native">6 - 원어민</option></select></li>'+
    '<li>이 언어를 처음 배우기 시작한 나이 (만): <select name="language3_aoa"><option value=""></option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>어렸을 때 주양육자(부모님, 친척 등)가 귀하에게 이 언어를 사용하였습니까? <input type="radio" name="language3_heritage" value="yes" >네 <input type="radio" name="language3_heritage" value="no" >아니오</li>'+
    '<li>한 주간 이 언어를 듣기/말하기/읽기/쓰기에 사용하는 시간의 비율: <input type="number" min="0" max="100" name="language3_percentage"  style="width: 6ch">%</li>'+
    '<li>이 언어를 제2언어 또는 외국어로 공부한 경우, 해당 년수를 작성하여 주십시오: <select name="language3_duration"><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '</ol>'+
    // language4
    '<h3>제4언어 (해당 사항이 있는 경우):</h3>'+
    '<ol>'+
    '<li>언어 명: <input name="language4_name" type="text" size="10"></li>'+
    '<li>능력 수준: <select name="language4_proficiency"><option value=""></option><option value="beginner">1 - 초보</option><option value="lowintermediate">2 - 중하</option><option value="highintermediate">3 - 중상</option><option value="advanced">4 - 고급</option><option value="nearnative">5 - 모국어 수준에 근접</option><option value="native">6 - 원어민</option></select></li>'+
    '<li>이 언어를 처음 배우기 시작한 나이 (만): <select name="language4_aoa"><option value=""></option><option value="0">태어날 때부터</option>'+ko_age_options+'</select></li>'+
    '<li>어렸을 때 주양육자(부모님, 친척 등)가 귀하에게 이 언어를 사용하였습니까? <input type="radio" name="language4_heritage" value="yes" >네 <input type="radio" name="language4_heritage" value="no" >아니오</li>'+
    '<li>한 주간 이 언어를 듣기/말하기/읽기/쓰기에 사용하는 시간의 비율: <input type="number" min="0" max="100" name="language4_percentage"  style="width: 6ch">%</li>'+
    '<li>이 언어를 제2언어 또는 외국어로 공부한 경우, 해당 년수를 작성하여 주십시오: <select name="language4_duration"><option value=""></option><option value="NA">해당 사항 없음</option>'+number_options+'</select></li>'+
    '</ol>'+
    // other
    '<h3>추가로 다른 언어를 사용하는 경우 알려주십시오:</h3>'+
    '<p style="text-align:left;"><textarea name="other_languages" rows="3" style="width:90%;"></textarea></p>'+
    '</fieldset><br>'
;

var en_language_survey_html =
    language_survey_header+en_language_survey_text
;
var ko_language_survey_html =
    language_survey_header+ko_language_survey_text
;

var language_survey_feedback_stimulus =
    '<style>p {text-align:left;} li {margin-bottom:10px} ul {text-align:left}</style>'+
    '<img src="img_warning.png" height="150" title="image credit: Flaticon / Freepik (www.freepik.com)"><br>'+
    '<h3 style="text-align:center">실험 조건 부적합 안내</h3>'+
    '<p>작성하여 주신 답변에 따르면 본 실험에 참가할 수 없습니다. 실험은 아래의 조건에 부합하는 사람만을 대상으로 하고 있습니다:</p>'+
    '<ul>'+
    '<li>만 18세 이상</li>'+
    '<li>한국어 원어민</li>'+
    '<li>영어를 제2언어 또는 외국어로 배운 자</li>'+
    '</ul>'+
    '<p>만약 위의 조건에 부합한다고 생각되신다면 연구자에게 fzenker@hawaii.edu로 메일을 보내주시기 바랍니다.</p>'
;

// speaking task

var en_retry = 'Retry';
var ko_retry = '다시 녹음';

var en_accept = 'Accept Recording';
var ko_accept = '녹음 저장';

// * c-test header and instructions *

var ctest_header =
    '<style>p {text-align:left; spellcheck=false;} input[type="text"] {width:11ch;} fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;}</style>'+
    '<img src="img_ctest.jpg" height="150" title="image credit: pch.vector / Freepik (www.freepik.com)"><br>'
;

var en_ctest_instructions =
    '<span style="font-size:125%; font-weight:bold;">Task <span id="num"></span>: Word Completion Task</span>'+
    '<p><b>Instructions:</b> In the following passages, parts of some words have been deleted. Your job is to complete the words by filling in the missing letters. In cases where more than one answer is possible, choose the one that fits best in the context. If you do not know the right answer, then type in your best guess.</p>'+
    '<p><b>Example:</b> The world is full of flowers. They <nobr>co<input type="text" name="example1" value="me" readonly="readonly"></nobr> in <nobr>diff<input type="text" name="example2" value="erent" readonly="readonly"></nobr> shapes <nobr>a<input type="text" name="example3" value="nd" readonly="readonly"></nobr> colors.</p>'
;
var ko_ctest_instructions =
    '<span style="font-size:125%; font-weight:bold;">Task <span id="num"></span>: Word Completion Task</span>'+
    '<p><b>방법:</b> 아래 문단의 몇몇 단어들은 부분적으로 빈칸이 남겨져있습니다. 누락된 글자들을 채워 단어를 완성하는 과제입니다. 만약 답을 모르는 경우, 가장 근접한 단어로 추측하여 주십시오.</p>'+
    '<p><b>예시:</b> The world is full of flowers. They <nobr>co<input type="text" name="example1" value="me" readonly="readonly"></nobr> in <nobr>diff<input type="text" name="example2" value="erent" readonly="readonly"></nobr> shapes <nobr>a<input type="text" name="example3" value="nd" readonly="readonly"></nobr> colors.</p>'
;

// * c-test 1 *

var ctest1_passages =
    '<fieldset><legend style="text-align:left;"><b>Passage 1</b></legend>'+
    '<p spellcheck="false">Algae are organisms, or living things, that are found all over the world. Algae are <nobr>ve<input name="algae_01" type="text" required></nobr> important <nobr>bec<input name="algae_02" type="text" required></nobr> they <nobr>ma<input name="algae_03" type="text" required></nobr> oxygen, <nobr>wh<input name="algae_04" type="text" required></nobr> humans and other animals <nobr>ne<input name="algae_05" type="text" required></nobr> to <nobr>bre<input name="algae_06" type="text" required>.</nobr> Some algae, such as <nobr>sea<input name="algae_07" type="text" required>,</nobr> look <nobr>li<input name="algae_08" type="text" required></nobr> plants. <nobr>How<input name="algae_09" type="text" required>,</nobr> algae are <nobr>actu<input name="algae_10" type="text" required></nobr> neither plants <nobr>n<input name="algae_11" type="text" required></nobr> animals. <nobr>Ins<input name="algae_12" type="text" required>,</nobr> they <nobr>bel<input name="algae_13" type="text" required></nobr> to a <nobr>gr<input name="algae_14" type="text" required></nobr> of living things <nobr>cal<input name="algae_15" type="text" required></nobr> protists. <nobr>Th<input name="algae_16" type="text" required></nobr> are <nobr>ma<input name="algae_17" type="text" required></nobr> different <nobr>spe<input name="algae_18" type="text" required>,</nobr> or <nobr>ty<input name="algae_19" type="text" required>,</nobr> of algae. They are <nobr>mo<input name="algae_20" type="text" required></nobr> commonly found in <nobr>bod<input name="algae_21" type="text" required></nobr> of <nobr>wa<input name="algae_22" type="text" required>,</nobr> such as <nobr>oce<input name="algae_23" type="text" required>,</nobr> rivers, <nobr>la<input name="algae_24" type="text" required>,</nobr> streams, <nobr>po<input name="algae_25" type="text" required>,</nobr> and marshes.</p></fieldset><br>'+
    '<fieldset><legend style="text-align:left;"><b>Passage 2</b></legend>'+
    '<p spellcheck="false">Noise pollution is unwanted or excessive sound that can be harmful to human health and environmental quality. Noise pollution is commonly <nobr>gene<input name="noise_26" type="text" required></nobr> inside <nobr>indus<input name="noise_27" type="text" required></nobr> facilities and other <nobr>workp<input name="noise_28" type="text" required>,</nobr> but it also <nobr>co<input name="noise_29" type="text" required></nobr> from <nobr>hig<input name="noise_30" type="text" required>,</nobr> railway, and <nobr>airp<input name="noise_31" type="text" required></nobr> traffic and from outdoor <nobr>constr<input name="noise_32" type="text" required></nobr> activities. Noise is <nobr>mo<input name="noise_33" type="text" required></nobr> than a <nobr>me<input name="noise_34" type="text" required></nobr> nuisance. At <nobr>cer<input name="noise_35" type="text" required></nobr> levels and <nobr>dura<input name="noise_36" type="text" required></nobr> of exposure, it can cause <nobr>phys<input name="noise_37" type="text" required></nobr> damage to the <nobr>ear<input name="noise_38" type="text" required></nobr> and the <nobr>sens<input name="noise_39" type="text" required></nobr> hairs of the <nobr>in<input name="noise_40" type="text" required></nobr> ear and <nobr>res<input name="noise_41" type="text" required></nobr> in <nobr>temp<input name="noise_42" type="text" required></nobr> or <nobr>perm<input name="noise_43" type="text" required></nobr> hearing loss. In <nobr>addi<input name="noise_44" type="text" required></nobr> to causing hearing loss, excessive noise exposure can also <nobr>ra<input name="noise_45" type="text" required></nobr> blood <nobr>pres<input name="noise_46" type="text" required>,</nobr> cause irritability, <nobr>anx<input name="noise_47" type="text" required>,</nobr> and <nobr>men<input name="noise_48" type="text" required></nobr> fatigue, and <nobr>inte<input name="noise_49" type="text" required></nobr> with <nobr>sl<input name="noise_50" type="text" required>,</nobr> recreation, and personal communication.</p></fieldset><br>'
;

var en_ctest1_html =
    ctest_header + en_ctest_instructions + ctest1_passages
;
var ko_ctest1_html =
    ctest_header + ko_ctest_instructions + ctest1_passages
;

// * c-test 2 *

var ctest2_passages = 
    '<fieldset><legend style="text-align:left;"><b>Passage 1</b></legend>'+
    '<p spellcheck="false" style="font-family:\'Source Code Pro\', monospace;">Steven loved almost everything about his grandma. There was only one thing he hated. She always knitted sweaters for <nobr>h<input name="steven01" type="text" required></nobr>. Steven understood that she did it to be <nobr>n<input name="steven02" type="text" required></nobr>. However, all the sweaters were very ugly. Steven <nobr>v<input name="steven03" type="text" required></nobr> her once a week. She had a new <nobr>s<input name="steven04" type="text" required></nobr> for him each time. Steven lived in a <nobr>s<input name="steven05" type="text" required></nobr> apartment. There was no room for him to <nobr>k<input name="steven06" type="text" required></nobr> all the sweaters. He had to give all of them <nobr>a<input name="steven07" type="text" required></nobr>. \"Grandma will never find out,\" he thought. One <nobr>d<input name="steven08" type="text" required></nobr>, Steven\'s grandma visited him by surprise. She asked to <nobr>s<input name="steven09" type="text" required></nobr> his sweaters. \"Someone stole all of them!\" he <nobr>s<input name="steven10" type="text" required></nobr>. \"They were too nice.\" She <nobr>m<input name="steven11" type="text" required></nobr> him ten more by the next month.</p></fieldset><br>'+
    '<fieldset><legend style="text-align:left;"><b>Passage 2</b></legend>'+
    '<p spellcheck="false" style="font-family:\'Source Code Pro\', monospace;">Depression is a serious but treatable disorder that affects millions of people, from young to old and from rich to poor. It gets in the way of everyday <nobr>l<input name="depression12" type="text" required></nobr>, causing tremendous pain, hurting not just those suffering <nobr>f<input name="depression13" type="text" required></nobr> it, but also impacting everyone around them. If <nobr>s<input name="depression14" type="text" required></nobr> you love is depressed, you may be <nobr>e<input name="depression15" type="text" required></nobr> any number of difficult emotions, including helplessness, frustration, <nobr>a<input name="depression16" type="text" required></nobr>, fear, guilt, and sadness. These feelings are all <nobr>n<input name="depression17" type="text" required></nobr>. It\'s not easy dealing with a friend or <nobr>f<input name="depression18" type="text" required></nobr> member\'s depression. And if you don\'t take care of <nobr>y<input name="depression19" type="text" required></nobr>, it can become overwhelming. That said, there are <nobr>s<input name="depression20" type="text" required></nobr> you can take to help your loved one. Start by learning about depression and how to talk <nobr>a<input name="depression21" type="text" required></nobr> it with your friend or family member. But as you reach out, don\'t forget to <nobr>l<input name="depression22" type="text" required></nobr> after your own emotional <nobr>h<input name="depression23" type="text" required></nobr>. Thinking about your own needs is not an <nobr>a<input name="depression24" type="text" required></nobr> of selfishness&ndash;&ndash;it\'s a necessity. Your emotional strength will <nobr>a<input name="depression25" type="text" required></nobr> you to provide the ongoing support your depressed friend or family member needs.</p></fieldset><br>'+
    '<fieldset><legend style="text-align:left;"><b>Passage 3</b></legend>'+
    '<p spellcheck="false" style="font-family:\'Source Code Pro\', monospace;">Nonverbal communication includes facial expressions, gestures, the distance between speakers, eye contact, voice intonations, touch, and many other minor details which can provide speakers with valuable information about each other. For example, the amount of <nobr>s<input name="communication26" type="text" required></nobr> between people can say a lot about the level of intimacy between them: usually, the <nobr>s<input name="communication27" type="text" required></nobr> the distance between speakers, the more friendly or <nobr>i<input name="communication28" type="text" required></nobr> they are, and vice versa. Or if a person <nobr>a<input name="communication29" type="text" required></nobr> eye contact, it might mean that he or she is hiding something, feels <nobr>u<input name="communication30" type="text" required></nobr> around you, and so on. Body <nobr>l<input name="communication31" type="text" required></nobr> has several important functions. For instance, a person\'s <nobr>g<input name="communication32" type="text" required></nobr> can repeat the message he or she is <nobr>m<input name="communication33" type="text" required></nobr> orally; a little child explaining how birds <nobr>f<input name="communication34" type="text" required></nobr> and waving his or her arms like <nobr>w<input name="communication35" type="text" required></nobr> is a decent example of this function. Another function, substitution, occurs when <nobr>v<input name="communication36" type="text" required></nobr> messages can be expressed by nonverbal means (like shrugging). <nobr>I<input name="communication37" type="text" required></nobr> addition, gestures can be used for accenting, like when <nobr>r<input name="communication38" type="text" required></nobr> one\'s index finger when speaking about <nobr>s<input name="communication39" type="text" required></nobr> important. At the same time, it is important to remember that sometimes body language may <nobr>d<input name="communication40" type="text" required></nobr> depending on culture. For example, in some countries, <nobr>l<input name="communication41" type="text" required></nobr> straight in the eyes of a conversationalist is considered <nobr>r<input name="communication42" type="text" required></nobr>. Men in some parts of the world may walk around the street <nobr>h<input name="communication43" type="text" required></nobr> hands, or may kiss each other on the <nobr>c<input name="communication44" type="text" required></nobr> when greeting, but this is an <nobr>i<input name="communication45" type="text" required></nobr> of friendship, not romance or intimacy.</p></fieldset><br>'
;

var en_ctest2_html =
    ctest_header + en_ctest_instructions + ctest2_passages
;
var ko_ctest2_html =
    ctest_header + ko_ctest_instructions + ctest2_passages
;

// * cloze test *

var cloze_header =
    '<style>p {text-align:left; spellcheck=false;} input[type="text"] {width:12ch;} fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;}</style>'+
    '<img src="img_cloze.jpg" height="150" title="image credit: pch.vector / Freepik (www.freepik.com)"><br>'
;

var en_cloze_instructions =
    '<span style="font-size:125%; font-weight:bold;">Task <span id="num"></span>: Gap-Filling Task</span><br>'+
    '<p><b>Instructions:</b><ol style="text-align:left;"><li>Read over the passage quickly to get the general meaning.</li><li>Write <u>only one word</u> in each blank. Contractions (e.g. <u>don\'t</u>) and possessives (e.g. <u>John\'s</u> bicycle) are one word.</li><li>Check your answers. Spelling will not count against you as long as the scorer can read the word.</li></ol></p>'+
    '<p><b>Example:</b> The boy walked up the street. He stepped <input type="text" name="example1" value="on" readonly="readonly"> a piece of ice. He fell <input type="text" name="example2" value="down" readonly="readonly"> but he didn\'t hurt himself.</p>'
;
var ko_cloze_instructions =
    '<span style="font-size:125%; font-weight:bold;">Task <span id="num"></span>: Gap-Filling Task</span><br>'+
    '<p><b>방법:</b><ol style="text-align:left;"><li>문단 전체를 속독하여 전체적인 내용을 파악하십시오.</li><li>각 빈 칸 하나에 <u>한 단어씩만</u> 적어주십시오. 단어의 축약형(예: <u>don\'t</u>)이나 소유격(예: <u>John\'s</u> bicycle)은 한 단어입니다.</li><li>답안을 검토하여 주십시오. 어떤 단어인지 유추가 가능하다면 실수로 스펠링이 틀려도 점수가 인정됩니다.</li></ol></p>'+
    '<p><b>예시:</b> The boy walked up the street. He stepped <input type="text" name="example1" value="on" readonly="readonly"> a piece of ice. He fell <input type="text" name="example2" value="down" readonly="readonly"> but he didn\'t hurt himself.</p>'
;

var cloze_passage =
    '<fieldset><legend style="text-align:center;"><b>Man and His Progress</b></legend>'+
    '<p style="line-height:25px">Man is the only living creature that can make and use tools. He is the most teachable of living beings, earning the name Homo sapiens. <input type="text" name="brown_01" required> ever restless brain has used the <input type="text" name="brown_02" required> and wisdom of his ancestors <input type="text" name="brown_03" required> improve his way of life. Since <input type="text" name="brown_04" required> is able to walk and run <input type="text" name="brown_05" required> his feet, his hands have always <input type="text" name="brown_06" required> free to carry and to use <input type="text" name="brown_07" required>. Man\'s hands have served him well <input type="text" name="brown_08" required> his life on earth. His development, <input type="text" name="brown_09" required> can be divided into three major <input type="text" name="brown_10" required>, is marked by several different ways <input type="text" name="brown_11" required> life.</p>'+
    '<p style="line-height:25px">Up to 10,000 years ago, <input type="text" name="brown_12" required> human beings lived by hunting and <input type="text" name="brown_13" required>. They also picked berries and fruits, <input type="text" name="brown_14" required> dug for various edible roots. Most <input type="text" name="brown_15" required>, the men were the hunters, and <input type="text" name="brown_16" required> women acted as food gatherers. Since <input type="text" name="brown_17" required> women were busy with the children, <input type="text" name="brown_18" required> men handled the tools. In a <input type="text" name="brown_19" required> hand, a dead branch became a <input type="text" name="brown_20" required> to knock down fruit or to <input type="text" name="brown_21" required> for tasty roots. Sometimes, an animal <input type="text" name="brown_22" required> served as a club, and a <input type="text" name="brown_23" required> piece of stone, fitting comfortably into <input type="text" name="brown_24" required> hand, could be used to break <input type="text" name="brown_25" required> or to throw at an animal. <input type="text" name="brown_26" required> stone was chipped against another until <input type="text" name="brown_27" required> had a sharp edge. The primitive <input type="text" name="brown_28" required> who first thought of putting a <input type="text" name="brown_29" required> stone at the end of a <input type="text" name="brown_30" required> made a brilliant discovery: he <input type="text" name="brown_31" required> joined two things to make a <input type="text" name="brown_32" required> useful tool, the spear. Flint, found <input type="text" name="brown_33" required> many rocks, became a common cutting <input type="text" name="brown_34" required> in the Paleolithic period of man\'s <input type="text" name="brown_35" required>. Since no wood or bone tools <input type="text" name="brown_36" required> survived, we know of this man <input type="text" name="brown_37" required> his stone implements, with which he <input type="text" name="brown_38" required> kill animals, cut up the meat, <input type="text" name="brown_39" required> scrape the skins, as well as <input type="text" name="brown_40" required> pictures on the walls of the <input type="text" name="brown_41" required> where he lived during the winter.</p>'+
    '<p style="line-height:25px"><input type="text" name="brown_42" required> the warmer seasons, man wandered on <input type="text" name="brown_43" required> steppes of Europe without a fixed <input type="text" name="brown_44" required>, always foraging for food. Perhaps the <input type="text" name="brown_45" required> carried nuts and berries in shells <input type="text" name="brown_46" required> skins or even in light, woven <input type="text" name="brown_47" required>. Wherever they camped, the primitive people <input type="text" name="brown_48" required> fires by striking flint for sparks <input type="text" name="brown_49" required> using dried seeds, moss, and rotten <input type="text" name="brown_50" required> for tinder. With fires that he kindled himself, man could keep wild animals away and could cook those that he killed, as well as provide warmth and light for himself.</p></fieldset><br>'
;

var en_cloze_html =
    cloze_header + en_cloze_instructions + cloze_passage
;
var ko_cloze_html =
    cloze_header + ko_cloze_instructions + cloze_passage
;

// * speaking task *

var en_record_label = 'Start Recording';
var ko_record_label = '녹음 시작';

var en_recording_light =
    '<span id="jspsych-html-audio-response-light"> '+
    '<span style="border: 2px solid darkorange; background-color: darkorange; width: .5em; height: .5em; border-radius: .5em; margin: 0px auto; display:inline-block;"></span>'+
    '<span style="color: darkorange; font-weight:bold;"> RECORDING...</span>'+
    '</span>'
;
var ko_recording_light =
    '<span id="jspsych-html-audio-response-light"> '+
    '<span style="border: 2px solid darkorange; background-color: darkorange; width: .5em; height: .5em; border-radius: .5em; margin: 0px auto; display:inline-block;"></span>'+
    '<span style="color: darkorange; font-weight:bold;"> 녹음 중...</span>'+
    '</span>'
;

var en_recording_light_off =
    '<span id="jspsych-html-audio-response-light"> '+
    '<span style="color: darkgray; font-weight:bold;"> RECORDING COMPLETE</span>'+
    '</span>'
;
var ko_recording_light_off =
    '<span id="jspsych-html-audio-response-light"> '+
    '<span style="color: darkgray; font-weight:bold;"> 녹음 완료</span>'+
    '</span>'
;

var speaking_header =
    '<img src="img_voice.jpg" height="150" title="image credit: pchvector / Freepik (www.freepik.com)"><br>'
;
var en_speaking_text = 
    '<span style="font-size:125%;"><b>Task 1: Speaking Task</b></span>'+
    '<p>Respond to the statement below by speaking for 30 seconds in English. Simply repeating the prompt is not an acceptable response.</p>'+
    '<p style="border-style:ridge; width:65ch; margin:auto; padding:5px;">It is important for college students to have a part-time job</p><br>'
;
var ko_speaking_text = 
    '<span style="font-size:125%;"><b>Task 1: Speaking Task</b></span>'+
    '<p>아래의 문장에 대한 의견을 30초 동안 영어로 녹음하여 주십시오. 질문을 반복해서 읽는 답변은 인정되지 않습니다.</p>'+
    '<p style="border-style:ridge; width:65ch; margin:auto; padding:5px;">It is important for college students to have a part-time job</p><br>'
;
var en_speaking_html = speaking_header + en_speaking_text;
var ko_speaking_html = speaking_header + ko_speaking_text;

// * writing task *

var writing_header = 
    '<style>textarea {font-family:\'Source Code Pro\', monospace;} textarea:valid {background-color: lightgreen;}</style>'+
    '<img src="img_writing.jpg" height="150" title="image credit: vectorjuice / Freepik (www.freepik.com)"><br>'
;
var en_writing_text =
    '<span style="font-size:125%;"><b>Task 5: Writing Task</b></span>'+
    '<p>Respond to the statement below by writing 100&ndash;120 words in English.</p>'+
    '<p style="border-style:ridge; width:65ch; margin:auto; padding:5px;">Smoking should be completely banned at all the restaurants in the country</p>'+
    '<p><textarea name="word" id="word" oninput="countWord()" rows="8"  style="width:100ch; font-size:12pt; display:block;" required></textarea></p>'+
    '<p>Word Count: <span id="show">0</span></p>'
;
var ko_writing_text =
    '<span style="font-size:125%;"><b>Task 5: Writing Task</b></span>'+
    '<p>아래의 문장에 대한 의견을 영문 100&ndash;120단어로 작성하여 주십시오. </p>'+
    '<p style="border-style:ridge; width:65ch; margin:auto; padding:5px;">Smoking should be completely banned at all the restaurants in the country</p>'+
    '<p><textarea name="word" id="word" oninput="countWord()" rows="8"  style="width:100ch; font-size:12pt; display:block;" required></textarea></p>'+
    '<p>단어수: <span id="show">0</span></p>'
;
var en_writing_html = writing_header + en_writing_text;
var ko_writing_html = writing_header + ko_writing_text;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/minlength

// * exit survey *

var exit_header =
    '<style>p {spellcheck=false;} input[type="text"] {width:8ch; font-family:\'Source Code Pro\', monospace;} fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;}</style>'+
    '<img src="img_success.jpg" height="150" title="image credit: vectorjuice / Freepik (www.freepik.com)"><br>'
;
var en_exit_text =
    '<span style="font-size:125%; font-weight:bold;">Exit Survey</span>'+
    '<p>What do you think the researcher is trying to find out from this experiment?</p>'+
    '<p style="text-align:left;"><textarea name="exit_purpose" rows="3" style="width:90%;" required></textarea></p>'+
    '<p>If you experienced any difficulties while taking part in the experiment, please describe them here.</p>'+
    '<p style="text-align:left;"><textarea name="exit_difficulties" rows="3" style="width:90%;"></textarea></p>'
;
var ko_exit_text =
    '<span style="font-size:125%; font-weight:bold;">수고하셨습니다!</span>'+
    '<p>마지막 과제를 완료하였습니다. 아래에 제시된 질문에 답하여 주십시오.</p>'+
    '<fieldset><legend><b>실험 후 설문조사</b></legend>'+
    '<p style="text-align:left;">연구자가 본 실험을 통해 알아내고자 하는 것은 무엇이라고 생각하십니까?</p>'+
    '<p style="text-align:left;"><textarea name="exit_purpose" rows="3" style="width:90%;" required></textarea></p>'+
    '<p style="text-align:left;">만약 실험을 진행하면서 어려운 점이 있었다면 아래에 설명하여 주시면 감사하겠습니다.</p>'+
    '<p style="text-align:left;"><textarea name="exit_difficulties" rows="3" style="width:90%;"></textarea></p>'+
    '</fieldset>'+
    '<p>아래의 버튼을 클릭하여 답안을 제출하여 주십시오.</p>'+
    '<p>버튼을 누른 뒤에도 답안을 서버에 저장하는 데 시간이 걸릴 수 있으니 잠시만 기다려 주시면 감사하겠습니다.</p>'
;

var en_exit_html =
    exit_header + en_exit_text
;
var ko_exit_html =
    exit_header + ko_exit_text
;

// * loading message *

var loading_header = 
    '<img src="img_loading.jpg" height="150" title="image credit: tenor (tenor.com)"><br>'
;

var en_loading_text = '<p>Loading. Please wait.</p>';
var ko_loading_text = '<p>로딩중입니다. 잠시만 기다려 주십시오.</p>';
var zh_loading_text = '<p>LOADING. PLEASE WAIT.</p>';

var en_loading_message = loading_header + en_loading_text;
var ko_loading_message = loading_header + ko_loading_text;
var zh_loading_message = loading_header + zh_loading_text;

// * confirmation page *

var confirmation_header =
    '<style>p {text-align:center; spellcheck=false;} input[type="text"] {width:8ch;} fieldset {border:1px solid #999;box-shadow:2px 2px 5px #999;} legend {background:#fff;text-align:left;font-size:110%;}</style>'+
    '<img src="img_confirmation.jpg" height="200" title="image credit: stories / Freepik (www.freepik.com)"><br>'
;
var en_confirmation_text =
    '<span style="font-size:125%;">Thank you!</span>' +
    '<p>The researcher has been notified of your submission.</p>'
;
var ko_confirmation_text =
    '<span style="font-size:125%;">감사합니다!</span>' +
    '<p>연구자에게 제출 확인 안내가 발송 되었습니다.</p>'
;
var zh_confirmation_text =
    '<span style="font-size:125%;">謝謝！</span>' +
    '<p>研究人員已收到您提交的通知。</p>'
;
var en_confirmation =
    confirmation_header+en_confirmation_text
;
var ko_confirmation =
    confirmation_header+ko_confirmation_text
;
var zh_confirmation =
    confirmation_header+zh_confirmation_text
;

// * chopping block *

var en_finishearly = 
    'If you finish early, press the spacebar to continue.'
;
var ko_finishearly = 
    '녹음이 일찍 끝났을 경우 스페이스바를 누르시면 다음 단계로 진행됩니다.'
;