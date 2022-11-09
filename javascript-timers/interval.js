// querry select text to change
var $h1 = document.querySelector('.countdown-display');

// declare var count to start countdown,begin at 4
var count = 4;

// define function countdown
// decrement count
// if statement, when count hit 0, update textContent
function countDown() {
  count--;
  $h1.textContent = count;
  if (count <= 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }

}
// setInterval passing in callback function and set it for every second
// clear the count with clearInterval
setInterval(countDown, 1000);
clearInterval(countDown);
