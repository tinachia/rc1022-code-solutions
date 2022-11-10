var $text = document.querySelector('.message');

function timeout() {
  $text.textContent = 'Hello There';
}

setTimeout(timeout, 2000);
