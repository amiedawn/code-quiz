var currentQIndex = 0;
var choice = "";
var timeLeft = 60;
var timer = 0; 
var arrQuestions = [];

debugger;

function startQuiz() {
  init();
  writeQuestions();
  showTimer = setInterval(countdownTimer, 1000);
}

function init() {
  var start = document.querySelector("#startQuiz");
  var frameTotal = document.querySelector("#frameTotal");
  var showQuestion = document.querySelector("#showQuestion");
  var showTimer = document.querySelector("#showTimer");
  var totalTimeTrack = document.querySelector("#totalTimeTrack");
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

  // Questions and answers:
 
  arrQuestions = [
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

}

function countdownTimer() { //print timer to screen
  if (timer <= timeLeft) {
    //counter.innerHTML = timer; this is given but doesn't work
    document.getElementById("countdownTimer").innerHTML = timer;
    timer = timer - 1;
  } else {
    timer = 0;
    //**store the score */
    checkAnswer();
  }
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
    timer = timer - 10;
    if (timer < 0) {
      timer.innerHTML = "Time is up!"
    }

    // timeLeft = timeLeft - 10; **these 4 lines if using timeLeft to display timer
    // if (timeLeft < 0) {
    //   //  timeLeft.innerHTML = "Time: 0 seconds remaining"; doesn't work
    //    }
    checkAnswer();
  }
}

function checkAnswer(answer) {
console.log("currentQIndex", currentQIndex);
console.log("lastQIndex", lastQIndex);
if (currentQIndex < lastQIndex) {
  writeQuestions();
  //checkAnswer();
  currentQIndex = currentQIndex + 1; //makes it go to the next question
  //displayRW.innerHTML = ""; //??
} else {
  clearInterval(showTimer);
  showScores();
}
};

function showScores() {
  // navigate to summary page and display score there
  window.location.href = "summary.html";

  /********figure this out */


}


// event listeners:
//debugger;
//document.addEventListener("click", startQuiz);// had before. lines up answer with question, but wont load first question
  //**above, timer shows up after you click but totally wacky
//start.addEventListener("click", startQuiz); //from video reference (same as next try)
//start.addEventListener("click", startQuiz);// won't load 1st question, if you click correct answer 1st, it says wrong and then starts with 1, but answers are misaligned
document.getElementById("startButton").addEventListener("click", startQuiz); //won't load 1st question, if you click correct answer 1st, it says wrong and then starts with 1, but answers are misaligned
//start.querySelector("startButton").onclick = startQuiz; //won't load 1st question, if you click correct answer 1st, it says wrong and then starts with 1, but answers are misaligned
//generateBtn.addEventListener("click", writeQuestions);// won't load 1st question, if you click correct answer 1st, it says wrong and then starts with 1, but answers are misaligned