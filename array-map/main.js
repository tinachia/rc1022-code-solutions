const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(numbers => numbers * 2);
console.log('value of doubled', doubled);

const prices = numbers.map(numbers => `$${numbers.toFixed(2)}`);
console.log('value of prices', prices);

const upperCased = languages.map(languages => languages.toUpperCase());
console.log('value of upperCased', upperCased);

const firstLetters = languages.map(languages => languages[0]);
console.log('value of firstLetters', firstLetters);
