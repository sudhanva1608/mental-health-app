const questions = [

"How often do you feel stressed during the day?",
"Do you feel overwhelmed by daily responsibilities?",
"How often do you feel mentally exhausted?",
"Do small problems frustrate you easily?",
"How often do you feel pressure to complete tasks?",
"Do you struggle to sleep at night?",
"Do you wake up feeling tired?",
"How often do you feel physically drained?",
"Do you find it difficult to relax?",
"How often do you experience tension headaches?",
"How often do you feel anxious about the future?",
"Do you feel nervous without a reason?",
"How often do you feel restless?",
"Do you struggle to control worrying thoughts?",
"How often do you feel emotionally overwhelmed?",
"Do you have difficulty concentrating?",
"How often are you distracted while studying?",
"Do you feel unmotivated to finish tasks?",
"How often do you procrastinate?",
"Do you feel mentally drained after simple tasks?",
"How often do you feel lonely?",
"Do you avoid social interactions due to stress?",
"How often do you feel misunderstood?",
"Do you feel comfortable sharing feelings?",
"How satisfied are you with your emotional wellbeing?"

]

let currentQuestion = 0
let score = 0

const questionText = document.getElementById("questionText")
const questionNumber = document.getElementById("questionNumber")
const progress = document.getElementById("progress")
const container = document.getElementById("questionContainer")

loadQuestion()

function loadQuestion(){

questionText.innerText = questions[currentQuestion]

questionNumber.innerText =
"Question " + (currentQuestion+1) + " / 25"

let percent = ((currentQuestion)/questions.length)*100

progress.style.width = percent + "%"

container.classList.remove("slide")
void container.offsetWidth
container.classList.add("slide")

}

function selectAnswer(value){

score += value

currentQuestion++

if(currentQuestion < questions.length){

loadQuestion()

}
else{

showResult()

}

}

function showResult(){

let result=""

if(score <= 15)
result="Excellent Mental Health"

else if(score <= 30)
result="Mild Stress"

else if(score <= 50)
result="Moderate Stress"

else
result="High Stress"

document.body.innerHTML=`

<div class="test-container">

<h1>Your Score: ${score}</h1>

<h2>${result}</h2>

<button onclick="location.reload()">Retake Test</button>

</div>

`

}