function converMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log('value of seconds in minutes:', seconds);
}

converMinutesToSeconds(5);

function greet(name) {
  var sayHey = 'Hey, ' + name;
  console.log('value of greeting:', sayHey);
}

greet('Beavis');

function getArea(width, height) {
  var totalArea = width * height;
  console.log('value of totalArea:', totalArea);
}

getArea(17, 42);

function getFirstName(person) {
  var personFirstName = person.firstName;
  console.log('value of personFirstName:', personFirstName);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log('value of lastElement of the array:', lastElement);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
