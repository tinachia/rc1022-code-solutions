var $hotButton = document.querySelector('.hot-button.cold');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', amounOfClicks);
var clicks = 0;

function amounOfClicks() {
  clicks++;
  var temperature;
  if (clicks < 4) {
    temperature = 'cold';
  } else if (clicks < 7) {
    temperature = 'cool';
  } else if (clicks < 10) {
    temperature = 'tepid';
  } else if (clicks < 13) {
    temperature = 'warm';
  } else if (clicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }

  $hotButton.className = 'hot-button' + temperature;
  $clickCount.textContent = 'clicks:' + clicks;

}
