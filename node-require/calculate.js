const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = Number(process.argv[2]);
const b = Number(process.argv[4]);
const operation = process.argv[3];

if (operation === 'plus') {
  console.log('result:', add(a, b));
} else if (operation === 'minus') {
  console.log('result:', subtract(a, b));
} else if (operation === 'times') {
  console.log('result:', multiply(a, b));
} else if (operation === 'over') {
  console.log('result:', divide(a, b));
} else {
  console.log('invalid operation');
}
