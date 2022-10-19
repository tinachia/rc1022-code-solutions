var numberOne = 4;
var numberTwo = 8;
var numberThree = 19;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('value of maximumValue:', maximumValue);

var hereos = ['Groot', 'Thor', 'Loki', 'Black Widow'];

var randomNumbers = Math.random();
console.log('value of randomNumbers:', randomNumbers);

randomNumbers = randomNumbers * hereos.length;

var randomIndex = Math.floor(randomNumbers);
console.log('value of randomIndex:', randomIndex);

var randomHereos = hereos[randomIndex];
console.log('value of randomHereos:', randomHereos);

var library = [
  {
    title: 'For One More Day',
    author: 'Mitch Albom'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin'
  },
  {
    title: 'Snow Falling on Cedards',
    author: 'David Guterson'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Chivy Chia';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
