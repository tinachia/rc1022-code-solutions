var $hotButton = document.querySelector('.hot-button.cold');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', amounOfClicks);
var clicks = 0;

function amounOfClicks() {
  $clickCount.textContent = clicks++;
  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clicks >= 10) {
    $hotButton.className = 'hot-button nuclear';
  }
}
