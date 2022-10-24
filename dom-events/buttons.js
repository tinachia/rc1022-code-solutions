function handleClick(event) {
  console.log('button cllicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $click = document.querySelector('.click-button');

$click.addEventListenser('click', handleClick);

function handleMouseOver(event) {
  console.log('button-hover');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListenser('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button-double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListenser('dblclick', handleDoubleClick);
