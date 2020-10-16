var timerEl = document.getElementById('countdown');



//timer that starts at 60 seconds
function countdown() {
  var timeLeft = 60;
  console.log(timeLeft);
  // use setInterval() method to call a function every time we want the timer
  var timeInterval = setInterval(function() {
    if (timeLeft >= 1) {
      parseInt(timerEl.textContent) = timeLeft;
      timeLeft= timeLeft - 1;
    } else if (timeLeft === 0) {
        parseInt(timerEl.textContent) = '';
        clearInterval(timeInterval);
        // invokeSummaryPage(); call the function here that will take you to Summary Page
      }
  }, 3000);
}  

//function invokeSummaryPage() { // <== this function takes you to summary and displays your final score



//}

countdown();