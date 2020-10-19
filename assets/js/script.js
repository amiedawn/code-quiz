var currentQIndex = 0;
var lastQIndex = 0;
var choice = "";
var timeLeft = 60;
var timer = 60; 
var arrQuestions = "";
var start = document.querySelector("#start");
console.log(start);
var main = document.querySelector("#main");
// var showQuestion = document.querySelector("#showQuestion");
var frameTotal = document.querySelector("#frameTotal");
var showTimer = document.querySelector("#showTimer");
var totalTimeTrack = document.querySelector("#totalTimeTrack");
var showTimeTrack = document.querySelector("#showTimeTrack");
var displayRW = document.querySelector("#displayRW");
var summaryBox = document.querySelector("#rightOrWrong"); // <= not sure sure on this

// var showCounter = document.querySelector("#showCounter");
// var displayRW = document.querySelector("#displayRW");
var highScores = document.querySelector(highScores);
var answerChosen = document.querySelector(".choice")
var score = 0;



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

// arrQuestions.choiceA.onclick = checkAnswer; **my try(wrong)
// arrQuestions.choiceB.onclick = checkAnswer;
// arrQuestions.choiceC.onclick = checkAnswer;
// arrQuestions.choiceD.onclick = checkAnswer;

//**need to keep this section so that it will ask all the questions, but if I add it, it has 4 boxes at start of project
//collect answers chosen by user click
// choiceA.onclick = checkAnswer;
// choiceB.onclick = checkAnswer;
// choiceC.onclick = checkAnswer;
// choiceD.onclick = checkAnswer;

function showStartQuizScreen() {
  // show start screen and hide questions
  main.style.display = "block";
  showQuestion.style.display = "none";
  showChoices.style.display = "none";
};

function startQuiz() {
 // debugger;
  // hide start screen and show questions
  main.style.display = "none";
  showQuestion.style.display = "block";
  showChoices.style.display = "block";
  
  writeQuestions();
  generateQuestions();
  countdownTimer();
  showTimer = setInterval(countdownTimer, 1000);
};

function countdownTimer() { //print timer to screen

//**** figure out how to store the score when the questions are answered before the timer runs out */
  
  if (timeLeft <= timer) {
    //counter.innerHTML = timer; this is given but doesn't work
    document.getElementById("countdownTimer").innerHTML = timeLeft;
    timeLeft = timeLeft - 1;
   //********add something to end the timer at 0 */
  } else {
    //end the quiz and show the score
    timeLeft = 0;
    console.log("currentQIndex", currentQIndex);
    console.log("lastQIndex", lastQIndex);
    if (currentQIndex < lastQIndex) {
      currentQIndex = currentQIndex + 1;
      writeQuestions();
    } else { 
      // end the quiz and show the score
      clearInterval(showTimer);
      //showScores(); <-- put this back in after showscores is written
    }  
  }
};

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
};

function generateQuestions() {
  // increments to next question
  lastQIndex = arrQuestions.length - 1;
  console.log("currentQIndex", currentQIndex);
  console.log("lastQIndex", lastQIndex);
  for (var questionIndex = 0; questionIndex <= lastQIndex; questionIndex++) {
    displayRW.innerHTML = displayRW.innerHTML + "<div class='RW' id=" + questionIndex + "></div>";
  }
};  
 
function answerRW(answer) { 
  console.log(answer)
  console.log(arrQuestions[currentQIndex].rightChoice)
   if( answer === arrQuestions[currentQIndex].rightChoice) {
     displayRW.innerHTML = "Right!";
     score = score + 1;
   } else {
      displayRW.innerHTML = "Wrong!";
   }
   console.log ("currentQIndex", currentQIndex);
   console.log ("lastQIndex", lastQIndex);
   if (currentQIndex <= lastQIndex) {
     currentQIndex = currentQIndex + 1;
     writeQuestions();
   } else {
     //end the quiz and show the score
      clearInterval(showTimer);
     // showScores(); <-- put in when I write showscores
   }  
};  

//function showScores() {
  //display the summaryBox 
  //determine and display score and other info on summary page
  //summaryBox.innerHTML = summaryBox.innerHTML + "<p>"+ timeLeft + "</p>";
  //have them enter their initials


  //window.location.href = "summary.html";

  /********figure this out */

//}


// event listeners:
// show startQuiz screen
showStartQuizScreen();
start.addEventListener("click", startQuiz); 