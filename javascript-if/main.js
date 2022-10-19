/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    var underFive = true;
  } else {
    underFive = false;
  }
  return underFive;
}

function isEven(number) {
  if (number % 2 === 0) {
    var evenNumber = true;
  } else {
    evenNumber = false;
  }
  return evenNumber;
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    var withJ = true;
  } else {
    withJ = false;
  }
  return withJ;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    var oldEnoughToDrink = true;
  } else {
    oldEnoughToDrink = false;
  }
  return oldEnoughToDrink;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    var oldEnoughToDrive = true;
  } else {
    oldEnoughToDrive = false;
  }
  return oldEnoughToDrive;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16) {
    var oldEnoughToDrinkAndDrive = false;
  } else {
    oldEnoughToDrinkAndDrive = false;
  }
  return oldEnoughToDrinkAndDrive;
}

function categorizeAcidity(pH) {
  if (pH >= 0 <= 7) {
    var typesofAcidity = 'acid';
  } else if (pH >= 7 <= 14) {
    typesofAcidity = 'base';
  } else {
    typesofAcidity = 'level';
  }
  return typesofAcidity;
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    var warnerBro = "We're the warner brothers!";
  } else if (name === 'dot') {
    warnerBro = "I'm cute~";
  } else {
    warnerBro = 'Goodnight everybody!';
  }
  return warnerBro;
}
