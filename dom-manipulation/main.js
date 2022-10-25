var $hotButton = document.querySelector('.hot-button.cold');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', amounOfClicks);
var clicks = 0;

function amounOfClicks() {
  $clickCount.textContent = clicks++;
  if (clicks < 4) {
    $hotButton.textContent = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.textContent = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.textContent = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.textContent = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.textContent = 'hot-button hot';
  } else if (clicks >= 10) {
    $hotButton.textContent = 'hot-button nuclear';
  }
}
