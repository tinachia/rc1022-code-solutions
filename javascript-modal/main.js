var clicks = 0;

var $modal = document.querySelector('.modal');
$modal.addEventListener('click', modalOn);

function modalOn() {
  clicks++;
  var modalTurnOn;
  if (clicks % 2 === 0) {
    modalTurnOn = 'on';
  } else {
    modalTurnOn = 'off';
    document.getElementByclass('.modal').style.display = 'none';
  }
  $modal.className = 'modal ' + modalTurnOn;
}

var $survey = document.querySelector('.survey');
$survey.addEventListener('click', surveyOn);

function surveyOn() {
  clicks++;
  var surveyTurnOn;
  if (clicks % 2 === 1) {
    surveyTurnOn = 'on';
  } else {
    surveyTurnOn = 'off';
  }

  $survey.className = 'survey ' + surveyTurnOn;
}
