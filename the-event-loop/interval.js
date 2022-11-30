let count = 3;

function countdown() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(counter);
  }
  count--;
}

const counter = setInterval(countdown, 1000);

// setInterval(counting => {
//   count--;
//   const counter = setInterval(counting, 1000);
//   if (count <= 0) {
//     console.log('Blast off!');
//   }
//   clearInterval(counter);

// }, 1000);
