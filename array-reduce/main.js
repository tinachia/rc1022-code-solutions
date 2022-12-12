const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log('value of sum', sum);

const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
console.log('value of product', product);

let totalAmount = 0;
const balance = account.reduce((previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    totalAmount += currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    totalAmount -= currentValue.amount;
  }
  return totalAmount;
}, totalAmount);

console.log('value of balance', balance);

const objectResult = {};
const composite = traits.reduce((previousValue, currentValue) => {
  const result = Object.assign(objectResult, currentValue);
  return result;
}, objectResult);
console.log('value of composite', composite);
