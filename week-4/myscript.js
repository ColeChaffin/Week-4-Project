var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var greetingInput = document.querySelector("#greetingInput");
var quiz = document.querySelector("#quiz");
var qn1Button = document.querySelector("#q1Button");
var qn2Button = document.querySelector("#q2Button");
var qn3Button = document.querySelector("#q3Button");
var qn4Button = document.querySelector("#q4Button");
var hsBtn = document.querySelector("#hsBtn")
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var iterationNumber = 0;

var qChoice = "";
var score = 0;
var questionList = [
    "What command creates a document?",
    "which answer creates a style sheet?",
    "which element creates a script.js?",
    "what is the purpose of JavaScript?"
]

quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
qn4Button.style.display = "none";
hsBtn.applystyle.display = "none";

function greeting(){
    headerText.innerHTML = "";
    headerText.innerHTML = "Hello " + userName.value;
    greetingInput.style.display = "none";
    quiz.style.display = "block";
    qn1Button.style.display = "block";
    question.innerHTML = questionList[iterationNumber]
}

function aFun(){
answerA.style.color = "red";
answerB.style.color = "Black";
answerC.style.color = "Black";
answerD.style.color = "Black";
qChoice = "A"
}

function bFun(){
    answerA.style.color = "Black";
    answerB.style.color = "red";
    answerC.style.color = "Black";
    answerD.style.color = "Black";
    qChoice = "B"
}

function cFun(){
    answerA.style.color = "Black";
    answerB.style.color = "Black";
    answerC.style.color = "red";
    answerD.style.color = "Black";
    qChoice = "C"
}

function dFun(){
    answerA.style.color = "Black";
    answerB.style.color = "Black";
    answerC.style.color = "Black";
    answerD.style.color = "red";
    qChoice = "D";
}

function submitQ1(){
    if (qChoice == "A"){
        score += 1;
    }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber]
    qn1Button.style.display = "none";
    qn2Button.style.display = "block";
    answerA.style.color = "Black";
    answerB.style.color = "Black";
    answerC.style.color = "Black";
    answerD.style.color = "Black";
    }
    function submitQ2(){
        if (qChoice == "B"){
            score += 1;
        }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber]
    qn2Button.style.display = "none";
    qn3Button.style.display = "block";
    answerA.style.color = "Black";
    answerB.style.color = "Black";
    answerC.style.color = "Black";
    answerD.style.color = "Black";
    }
    function submitQ3(){
        if (qChoice == "C"){
            score += 1;
        }
    iterationNumber += 1;
    question.innerHTML = questionList[iterationNumber]
    qn3Button.style.display = "none";
    qn4Button.style.display = "block";
    answerA.style.color = "Black";
    answerB.style.color = "Black";
    answerC.style.color = "Black";
    answerD.style.color = "Black";
    }
    function submitQ4(){
        if (qChoice == "D"){
            score += 1;
        }
    iterationNumber += 1;
    headerText.innerHTML = "Your score is " + score;
    quiz.style.display = "none";
    
    console.log(score)
   }    
  
   var userName = document.querySelector('#username')
   var saveScoreBtn = document.querySelector('#saveScoreBtn')
   var finalScore = document.querySelector('#finalScore')
   var mostRecentScore = document.querySelector('#mostRecentScore')

   var highcsores = JSON.parse(localStorage.getItem('highScores')) || []

   var MAX_HIGH_SCORES = 5

   finalScore.innerText = mostRecentScore

   userName.addEventListener('keyup',() => {
    saveScoreBtn.disabled = !userName.value
   })

   saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: mostRecentScore,
        name: userName.value
    }

    highcsores.push(score)

    highcsores.sort((a,b) => {
        return b.scroe - a.score
    })

    highcsores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highcsores))
    window.location.assign('/')
   }

