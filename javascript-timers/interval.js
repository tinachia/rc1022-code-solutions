// querry select text to change
var $h1 = document.querySelector('.countdown-display');

// declare var count to start countdown,begin at 4
var count = 4;

// define function countdown
// decrement count
// if statement, when count hit 0, update textContent
// clear the count with clearInterval
function countDown() {
  count--;
  $h1.textContent = count;
  if (count <= 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counter);
  }

}
// setInterval passing in callback function and set it for every second

var counter = setInterval(countDown, 1000);
