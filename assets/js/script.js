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
var showRightOrWrong = document.querySelector("#showRightOrWrong");
var highScores = document.querySelector(highScores);

//debugger;
// display questions
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

choiceA.onclick = answerRW;
choiceB.onclick = answerRW;
choiceC.onclick = answerRW;
choiceD.onclick = answerRW;
// global variables
var lastQIndex = arrQuestions.length - 1;
var currentQIndex = 0;
//var timer; // possibly take away var timer in function countdownTimer()
var rightOrWrong = 0;
var choice = "";
var status = "";

function startQuiz() {

  //var timer = 0;
  writeQuestions();

  // generateQuestions();

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


var generateBtn = document.querySelector("#writeQuestions");

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
//generateQuestions();  
//writeQuestions(); 

var answerChosen = document.querySelector(".choice")

function answerRW(answer) {
  console.log(this.innerText.trim())
  console.log(arrQuestions[currentQIndex].rightChoice.trim())
  //loop through questions and print right or wrong based on answer chosen

  //for(var i=0; i <= lastQIndex; i++) {
  if (arrQuestions[currentQIndex].rightChoice.trim() === this.innerText.trim()) {
    displayRW.innerHTML = "Right!";
  } else {
    displayRW.innerHTML = "Wrong!";
  }
  //status.innerHTML = status.innerHTML + "<div class='RW' id=" + i + "></div>";
  //rightOrWrong = rightOrWrong + 1;
  // } else {
  // status = "Wrong!"
  // }

  // }
}


// function rightAnswer() {
//   document.getElementById("displayRW").innerHTML = 
//   document.getElementById("countdownTimer").innerHTML = timeleft;
// }

// function wrongAnswer() {
//   document.getElementById("currentQIndex")
// }

// function showScores() {
//   // navigate to summary page and display score there
//   highScores.style.display = "block";

//*******figure this out */


// }

function checkAnswer(answer) {
  //if (arrQuestions[currentQIndex].rightChoice === answer) {
  //  status = "Right!"
  //status.innerHTML = status.innerHTML + "<div class='RW' id=" + i + "></div>";
  //rightOrWrong = rightOrWrong + 1;
  // } else {
  // status = "Wrong!"
  // }
  console.log("currentQIndex", currentQIndex);
  console.log("lastQIndex", lastQIndex);
  if (currentQIndex < lastQIndex) {
    // count = 0; // maybe don't need this??
    writeQuestions();
    currentQIndex = currentQIndex + 1; //makes it go to the next question
  } else {
    showScores();
  }
};

// function RightOrWrong() {
//   if (status === "Right!")


// }



// event listeners
document.addEventListener("click", startQuiz);
//document.addEventListener("click", )

writeQuestions();
countdownTimer();