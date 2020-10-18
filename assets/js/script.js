var start = document.querySelector("#startQuiz");
var frameTotal = document.querySelector("#frameTotal");
var showQuestion = document.querySelector("#showQuestion");
var showTimeTrack = document.querySelector("#showTimeTrack");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var showCounter = document.querySelector("#showCounter");
var displayRW = document.querySelector("#displayRW");
var highScores = document.querySelector(highScores);
var generateBtn = document.querySelector("#writeQuestions");
var answerChosen = document.querySelector(".choice")

var currentQIndex = 0;
var choice = "";
var timeLeft = 60;
var timerEl = "";

// Questions and answers:
var arrQuestions = [
  {
    showQuestion: "1.  Commonly used data types DO NOT include: ",
    choiceA: "a.  strings",
    choiceB: "b.  booleans",
    choiceC: "c.  alerts",
    choiceD: "d.  numbers",
    rightChoice: "c. alerts",
  },
  {
    showQuestion: "2.  A very useful tool during development and debugging for printing content to the debugger is: ",
    choiceA: "a.  JavaScript",
    choiceB: "b.  terminal/bash",
    choiceC: "c.  for loops",
    choiceD: "d.  console.log",
    rightChoice: "d. console.log",
  },
  {
    showQuestion: "3.  String values must be enclosed within _____________ when being assigned to variables. ",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: "a. quotes",
  },
  {
    showQuestion: "4.  Arrays in JavaScript can be used to store _____________ .",
    choiceA: "a.  numbers and strings",
    choiceB: "b.  other arrays",
    choiceC: "c.  booleans",
    choiceD: "d.  all of the above",
    rightChoice: "d. all of the above",
  },
  {
    showQuestion: "5.  The condition in an if/else statement is enclosed with __________ .",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: "c. parentheses",
  }
];

//collect answers chosen by user click
choiceA.onclick = answerRW;
choiceB.onclick = answerRW;
choiceC.onclick = answerRW;
choiceD.onclick = answerRW;

var lastQIndex = arrQuestions.length - 1;

function startQuiz() {
  writeQuestions();
  countdownTimer();
}

// timer function that starts at 60 and ends at 0
function countdownTimer() {
  var timeleft = 60;
  var timer = setInterval(function () {
    timeleft = timeleft - 1;
    document.getElementById("countdownTimer").innerHTML = timeleft;
    if (timeleft <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};

//document.getElementById("countdownTimer").innerHTML = timeLeft;
//debugger;

//display question and choices to the screen
function writeQuestions() {
  console.log("currentQIndex", currentQIndex);
  console.log("lastQIndex", lastQIndex);
  var q = arrQuestions[currentQIndex];
  
  showQuestion.innerHTML = "<p>" + q.showQuestion + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function answerRW(answer) {
  console.log(this.innerText.trim())
  console.log(arrQuestions[currentQIndex].rightChoice.trim())
  
  if (arrQuestions[currentQIndex].rightChoice.trim() === this.innerText.trim()) {
    displayRW.innerHTML = "Right!";
    checkAnswer();
    
  } else {
    displayRW.innerHTML = "Wrong!";
    timeLeft = timeLeft -10;
    if (timeLeft < 0) {
    //  timeLeft.innerHTML = "Time: 0 seconds remaining"; doesn't work
     
    }
    checkAnswer();
  }
}

//function checkAnswer(answer) {
  console.log("currentQIndex", currentQIndex);
  console.log("lastQIndex", lastQIndex);
  if (currentQIndex < lastQIndex) {
    writeQuestions();
    //checkAnswer();
    currentQIndex = currentQIndex + 1; //makes it go to the next question
    //displayRW.innerHTML = ""; //??
  } else {
    showScores();
  }


function showScores() {
  // navigate to summary page and display score there
  window.location.href = "summary.html";

/********figure this out */


}


// event listeners:
document.addEventListener("click", startQuiz);
//document.addEventListener("click", )

writeQuestions();
countdownTimer();