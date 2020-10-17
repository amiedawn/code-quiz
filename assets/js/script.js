var start = document.querySelector("#startQuiz");
var frameTotal = document.querySelector("#frameTotal");
var showQuestion = document.querySelector("#showQuestion");
var showTimeGauge = document.querySelector("#showTimeGauge");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var showCounter = document.querySelector("#showCounter");
var progress = document.querySelector("#progress");
var showRightOrWrong = document.querySelector("#showRightOrWrong");
var highScores = document.querySelector(highScores);
var showStatus = document.querySelector(showStatus);

//debugger;
 // display questions
 var arrQuestions = [
  {
    showQuestion: "1.  Commonly used data types DO NOT include: ",
    choiceA: "a.  strings",
    choiceB: "b.  booleans",
    choiceC: "c.  alerts",
    choiceD: "d.  numbers",
    rightChoice: "C"
  },
  {
    showQuestion: "2.  A very useful tool during development and debugging for printing content to the debugger is: ",
    choiceA: "a.  JavaScript",
    choiceB: "b.  terminal/bash",
    choiceC: "c.  for loops",
    choiceD: "d.  console.log",
    rightChoice: "D"
  },
  {
    showQuestion: "3.  String values must be enclosed within _____________ when being assigned to variables. ",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: "A"
  },
  {
    showQuestion: "4.  Arrays in JavaScript can be used to store _____________ .",
    choiceA: "a.  numbers and strings",
    choiceB: "b.  other arrays",
    choiceC: "c.  booleans",
    choiceD: "d.  all of the above",
    rightChoice: "D"
  },
  {
    showQuestion: "5.  The condition in an if/else statement is enclosed with __________ .",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: "C"
  }
];

// global variables
var lastQuestionIndex = arrQuestions.length - 1;
var runningQuestionIndex = 0;
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
    document.getElementById("showTimer").innerHTML = timeleft;
    if (timeleft <= 0) {
      clearInterval(timer);
    }
  }, 1000);  
};


var generateBtn = document.querySelector("#writeQuestions");

//display question and choices to the screen
function writeQuestions() {
  console.log("runningQuestionIndex", runningQuestionIndex);
  console.log("lastQuestionIndex", lastQuestionIndex);
  var q = arrQuestions[runningQuestionIndex];

  showQuestion.innerHTML = "<p>" + q.showQuestion + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}  
//generateQuestions();  
//writeQuestions(); 

// function generateQuestions() {
// //loop through questions until timer goes down to 0
//   for(var i=0; i <= lastQuestionIndex; i++) {
//     progress.innerHTML = progress.innerHTML + "<div class='prog' id=" + i + "></div>";
//   }
// }


// function rightAnswer() {
//   document.getElementById("choice").style.backgroundColor = "green";
// }

// function wrongAnswer() {
//   document.getElementById("choice").style.backgroundColor = "red";
// }

// function showScores() {
//   // navigate to summary page and display score there
//   highScores.style.display = "block";
  
//*******figure this out */


// }

function checkAnswer(answer) {
  //if (arrQuestions[runningQuestionIndex].rightChoice === answer) {
  //  status = "Right!"
    //status.innerHTML = status.innerHTML + "<div class='prog' id=" + i + "></div>";
    //rightOrWrong = rightOrWrong + 1;
 // } else {
   // status = "Wrong!"
 // }
  console.log("runningQuestionIndex", runningQuestionIndex);
  console.log("lastQuestionIndex", lastQuestionIndex);
  if(runningQuestionIndex < lastQuestionIndex) {
   // count = 0; // maybe don't need this??
    writeQuestions();
    runningQuestionIndex = runningQuestionIndex + 1; //makes it go to the next question
  } else {
    showScores();
  }
};

// function RightOrWrong() {
//   if (status === "Right!")
    

// }



// event listeners
document.addEventListener("click", startQuiz);


writeQuestions();

countdownTimer();