// query select all classes
var $pokemonImages = document.querySelectorAll('.pokemon');
var $circle = document.querySelectorAll('.circles');
var $regularCircle = document.querySelector('.fa-circle');
var $arrows = document.querySelector('.arrows');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
// // declare a var counter with value of 0
var counter = 0;
var id = null;
// // declare and var id with value of null

// define a function for carousel
// update classList method to add 'hidden' to images@counter
// update className to update to an open circle@counter
// increment counter by 1

// if the counter reach the length of the images, restart counter at 0

// update classList method to remove 'hidden' to images@counter
// update className to update to a solid circle@counter
function carousel() {
  $pokemonImages[counter].classList.add('hidden');
  $regularCircle[counter].className = 'fa-regular fa-circle';
  counter++;
  if (counter === $pokemonImages.length) {
    counter = 0;
  }
  $pokemonImages[counter].classList.remove('hidden');
  $regularCircle[counter].className = 'fa-solid fa-circle';
}
// setInterval of carousel to 3 secs

id = setInterval(carousel, 3000);

// addEventListener to listen for click on circle
$circle.addEventListener('click', handleCircle);

// define function to handle click
// use a for loop to loop through the open circle
// if the event.target is the same as the index of open circle
// then update classList method to remove 'hidden' to images@i
// update className to update to a solid circle@i
// reassign counter to i

// or else update classList method to add 'hidden' to images@i
// update className to update to a remove circle@i

// call reset

function handleCircle(event) {
  for (var i = 0; i < $regularCircle.length; i++) {
    if (event.target === $regularCircle[i]) {
      $pokemonImages[i].classList.remove('hidden');
      $regularCircle[i].className = 'fa-solid fa-circle';
      counter = i;
    } else {
      $pokemonImages[i].classList.add('hidden');
      $regularCircle[i].className = 'fa-regular fa-circle';
    }
  }
  reset();
}

// add event listener for click on the arrows
$arrows.addEventListener('click', handleArrows);

// define a function to handle arrows
// if the event target is the same as $right
// then update classList method to add 'hidden' to images@counter
// update className to update to a regular circle@counter
// increment counter
// if counter is the same as the $image.length
// set counter at 0
// then update classList method to remove 'hidden' to images@counter
// update className to update to a solid circle@counter
// and call reset
function handleArrows(event) {
  if (event.target === $rightArrow) {
    $pokemonImages[counter].classList.add('hidden');
    $regularCircle[counter].className = 'fa-regular fa-circle';
    counter++;
    if (counter === $pokemonImages.length) {
      counter = 0;
      $pokemonImages[counter].classList.remove('hidden');
      $regularCircle[counter].className = 'fa-solid fa-circle';
    }
    $pokemonImages[counter].classList.remove('hidden');
    $regularCircle[counter].className = 'fa-solid fa-circle';
    reset();
    // else if the event target is the same as $left
    // if counter is also equal to 0
    // then update classList method to add 'hidden' to images@counter
    // update className to update to a regular circle@counter
    // set counter at 4
    // then update classList method to remove 'hidden' to images@counter
    // update className to update to a solid circle@counter
    // else update classList method to add 'hidden' to images@counter
    // update className to update to a regular circle@counter
    // decrement counter
    // then update classList method to remove 'hidden' to images@counter
    // update className to update to a solid circle@counter
    // and call reset
  } else if (event.target === $leftArrow) {
    if (counter === 0) {
      $pokemonImages[counter].classList.add('hidden');
      $regularCircle[counter].className = 'fa-regular fa-circle';
      counter = 4;
      $pokemonImages[counter].classList.remove('hidden');
      $regularCircle[counter].className = 'fa-solid fa-circle';
    } else {
      $pokemonImages[counter].classList.add('hidden');
      $regularCircle[counter].className = 'fa-regular fa-circle';
      counter--;
      $pokemonImages[counter].classList.remove('hidden');
      $regularCircle[counter].className = 'fa-solid fa-circle';
    }
    reset();
  }
}

function reset() {
  clearInterval(id);
  id = setInterval(carousel, 3000);
}
