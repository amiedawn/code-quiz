var currentQIndex = 0;
var lastQIndex = 0;
var choice = "";
var timeLeft = 60;
var timer = 60;
var arrQuestions = "";
var score = 0;
var start = document.querySelector("#start");
var main = document.querySelector("#main");
var showQuestion = document.querySelector("#showQuestion");
var frameTotal = document.querySelector("#frameTotal");
var showTimer = document.querySelector("#showTimer");
var displayRW = document.querySelector("#displayRW");
var summaryScreen = document.querySelector("#summaryScreen");


// Questions and answers:
arrQuestions = [
  {
    showQuestion: "1.  Commonly used data types DO NOT include: ",
    choiceA: "a.  strings",
    choiceB: "b.  booleans",
    choiceC: "c.  alerts",
    choiceD: "d.  numbers",
    rightChoice: 'C',
  },
  {
    showQuestion: "2.  A very useful tool during development and debugging for printing content to the debugger is: ",
    choiceA: "a.  JavaScript",
    choiceB: "b.  terminal/bash",
    choiceC: "c.  for loops",
    choiceD: "d.  console.log",
    rightChoice: 'D',
  },
  {
    showQuestion: "3.  String values must be enclosed within _____________ when being assigned to variables. ",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: 'A',
  },
  {
    showQuestion: "4.  Arrays in JavaScript can be used to store _____________ .",
    choiceA: "a.  numbers and strings",
    choiceB: "b.  other arrays",
    choiceC: "c.  booleans",
    choiceD: "d.  all of the above",
    rightChoice: 'D',
  },
  {
    showQuestion: "5.  The condition in an if/else statement is enclosed with __________ .",
    choiceA: "a.  quotes",
    choiceB: "b.  curly brackets",
    choiceC: "c.  parentheses",
    choiceD: "d.  square brackets",
    rightChoice: 'C',
  }
];

var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

// show start screen and hide questions and summary
function showStartQuizScreen() {
  main.style.display = "block";
  showQuestion.style.display = "none";
  showChoices.style.display = "none";
  summaryScreen.style.display = "none";
};

// show questions screen and hide start and summary
function hideSummaryScreen() {
  main.style.display = "none";
  summaryScreen.style.display = "none";
  showQuestion.style.display = "block";
  showChoices.style.display = "block";
}

// show summary screen and hide questions and main
function showSummaryScreen() {
  summaryScreen.style.display = "block";
  showQuestion.style.display = "none";
  showChoices.style.display = "none";
  main.style.display = "none";
};

function hideStartAndQuestions() {
  showQuestion.style.display = "none";
  showChoices.style.display = "none";
  main.style.display = "none";
  summaryScreen.style.display = "block";
}

function startQuiz() {
  hideSummaryScreen();
  countdownTimer();
  writeQuestions();
  generateQuestions();
};

function countdownTimer() {
  showTimer = setInterval(function () {
    //print timer to screen
    document.getElementById("countdownTimer").innerHTML = timeLeft;
    timeLeft = timeLeft - 1;
    if (timeLeft <= 0) {
      clearInterval(showTimer);
      showScores();
    }
  }, 1000);
};

//display question and choices to the screen
function writeQuestions() {
  var q = arrQuestions[currentQIndex];

  showQuestion.innerHTML = "<p>" + q.showQuestion + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
};

function generateQuestions() {
  // increments to next question
  lastQIndex = arrQuestions.length - 1;
  for (var questionIndex = 0; questionIndex <= lastQIndex; questionIndex++) {
    displayRW.innerHTML = displayRW.innerHTML + "<div class='RW' id=" + questionIndex + "></div>";
  }
};

function answerRW(answer) {
  if (answer === arrQuestions[currentQIndex].rightChoice) {
    displayRW.innerHTML = "Right!";
    // score is time left plus number of questions right
    score = score + 1 + timeLeft;
    // decrease time by 10 seconds if an answer is wrong
  } else {
    displayRW.innerHTML = "Wrong!";
    timeLeft = timeLeft - 9;
  }

  if (currentQIndex < lastQIndex) {
    currentQIndex = currentQIndex + 1;
    writeQuestions();
  } else {
    clearInterval(showTimer);
    showScores();
  }
};

function showScores() {
  hideStartAndQuestions();
  displayRW.style.display = "none";
  // var container = document.createElement("div");
  // container.style.textAlign = "center";
  // document.body.appendChild(container);

  // var done = document.createElement("h1");
  // done.style.textAlign = "center";
  // done.textContent = "All done!";

  var finalScore = document.createElement("h2");
  finalScore.style.textAlign = "center";
  finalScore.textContent = "Your final score is: " + score;

  var initialsInput = document.querySelector("input[name='initials']").value;
};

var showSummary = function () {
  var output = initialsInput.textContent + " - " + score;
  output.style.textAlign = "center";
  output.setAttribute("style", "bordered;");
};


//*START*
showStartQuizScreen(); // show startQuiz screen

// event listeners:
document.querySelector("#startQuiz").onclick = startQuiz; //enables startQuiz button
submit - initials.addEventListener("click", showSummary); //submit initials and output with score to screen