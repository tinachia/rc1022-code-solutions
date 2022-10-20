/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('value of getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber++;
    currentNumber += 1;
  }
  return evenNumbers;
}

console.log('value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('value of repeatWord:', repeatWord('javascript', 30));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('value of logEachCharacter:', logEachCharacter('javascript'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('value of doubleAll:', doubleAll([5, 7, 7, 11]));

function getKeys(object) {
  var keys = [];
  for (const x in object) {
    console.log(x);
    keys.push(x);
  }
  return keys;
}
console.log('value of getKeys:', getKeys({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Exel Rauschmayer' }));

function getValues(object) {
  var values = [];
  for (const x in object) {
    console.log(object[x]);
    values.push(object[x]);
  }
  return values;
}
console.log('value of getValues:', getValues({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Exel Rauschmayer' }));
