var $inputName = document.getElementById('user-name');
var $inputEmail = document.getElementById('user-email');
var $inputMessage = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target', event.target.name);
  console.log('event.value', event.target.value);
}

function handleBlur(event) {
  console.log('focus event fired');
  console.log('event.target', event.target.name);
}

function handleInput(event) {
  console.log('event.target', event.target.value);
  console.log('event.target', event.target.name);
  console.log('value of', event.target.name + ':', event.target.value);
}

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleFocus);
$inputName.addEventListener('input', handleFocus);
$inputEmail.addEventListener('focus', handleBlur);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleBlur);
$inputMessage.addEventListener('focus', handleInput);
$inputMessage.addEventListener('blur', handleInput);
$inputMessage.addEventListener('input', handleInput);
