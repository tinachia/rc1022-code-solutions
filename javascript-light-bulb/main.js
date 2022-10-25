var clicks = 0;

var $button = document.querySelector('.button');
var $background = document.querySelector('.background');

$button.addEventListener('click', turnOff);

function turnOff() {
  clicks++;
  var buttonOff;
  var backgroundOff;
  if (clicks % 2 === 0) {
    buttonOff = 'off';
    backgroundOff = 'off';
  } else {
    buttonOff = 'on';
    backgroundOff = 'on';
  }
  $button.className = 'button ' + buttonOff;
  $background.className = 'background ' + backgroundOff;
}
