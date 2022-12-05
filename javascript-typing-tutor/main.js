var $span = document.querySelectorAll('span');
var $html = document.querySelector('html');
var i = 0;

$html.addEventListener('keydown', handleKey);

function handleKey(event) {
  if ($span[i].textContent === event.key) {
    $span[i].className = 'green';
    i++;
    $span[i].className = 'current';
  } else {
    $span[i].className = 'red current';
  }
}
