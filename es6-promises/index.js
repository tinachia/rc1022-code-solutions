const takeAChance = require('./take-a-chance');

const promise = takeAChance('Chivy Chia');

promise.then(msg => { console.log(msg); });
promise.catch(error => { console.log(error.message); });
