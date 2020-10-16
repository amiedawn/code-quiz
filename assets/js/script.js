var timerEl = document.getElementById('countdown');

//timer that starts at 60 seconds
function countdown() {
  var timeLeft = 60;
  // use setInterval() method to call a function every time we want the timer
  var timeInterval = setInterval(function() {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft;
      timeLeft= timeLeft - 1;
    } else if (timeLeft === 0) {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        // displayMessage(); call the function here that will take you to Summary Page
      }
  }, 3000);
}  