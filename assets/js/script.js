
// timer function that starts at 60 and ends at 0
function countdownTimer() {
  
var timeleft = 60;
var timer = setInterval(function () {
  timeleft = timeleft - 1;
  document.getElementById("countdownTimer").textContent = timeleft;
  if (timeleft <= 0) {
    clearInterval(timer);
  }
}, 1000);  
};

function writeQuestions() {
  // display questions
  generateQuestions();
};

function generateQuestions() {
  //loop through questions until timer goes down to 0
  var arrQuestions = [
    {
      selectQuestion: "1.  Commonly used data types DO NOT include: ",
      choiceA: "a.  strings",
      choiceB: "b.  booleans",
      choiceC: "c.  alerts", 
      choiceD: "d.  numbers",
      rightChoice: "C"
    },
    {
      selectQuestion: "2.  A very useful tool during development and debugging for printing content to the debugger is: ",
      choiceA: "a.  JavaScript", 
      choiceB: "b.  terminal/bash",
      choiceC: "c.  for loops",
      choiceD: "d.  console.log", 
      rightChoice: "D"
    },
    {
      selectQuestion: "3.  String values must be enclosed within _____________ when being assigned to variables. ",
      choiceA: "a.  quotes",
      choiceB: "b.  curly brackets",
      choiceC: "c.  parentheses",
      choiceD: "d.  square brackets",
      rightChoice: "A"
    },
    {
      selectQuestion: "4.  Arrays in JavaScript can be used to store _____________ .",
      choiceA: "a.  numbers and strings",
      choiceB: "b.  other arrays",
      choiceC: "c.  booleans",
      choiceD: "d.  all of the above",
      rightChoice: "D"
    },
    {
      selectQuestion: "5.  The condition in an if/else statement is enclosed with __________ .", 
      choiceA: "a.  quotes", 
      choiceB: "b.  curly brackets", 
      choiceC: "c.  parentheses",
      choiceD: "d.  square brackets", 
      rightChoice: "C"
    }
  ];

  var right = 0;
//instead of for loop: the pop will take off an answer
  function displayQuestion() {
  var question = arrQuestions.pop();
  if (question) {
    var answer = confirm(question.selectQuestion);
    if (answer === question.selectAnswers) {
      // answer is right
      //print right at bottom of the screen
      right = right + 1;
    } else {
      // answer is wrong
      //print wrong at bottom of the screen

    }  
  }
}

  
};








// maybe needs to go after event listeners?
displayQuestion();
countdownTimer();

// event listeners

generateBtn.addEventlistener("click", writeQuestions);
// what you would use if in <body> you have <button id="btnNext">Next</button>
// this will display the next question
//document.getElementById("btnNext").addEventListener("click", displayQuestion);