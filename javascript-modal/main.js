
var $modal = document.querySelector('.modal');
var $survey = document.querySelector('.survey');
var $modalOff = document.querySelector('.modal-off');

function modalOn() {
  var modalTurnOn;
  $modal.className = 'modal ' + modalTurnOn;
  $survey.className = 'survey';
}

$modal.addEventListener('click', modalOn);

function surveyOn() {
  $survey.className = 'survey ' + 'hidden';
}

$modalOff.addEventListener('click', surveyOn);
