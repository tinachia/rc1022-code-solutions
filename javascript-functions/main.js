function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var sayHey = 'Hey, ' + name;
  return sayHey;
}

var greetings = greet('Beavis');
console.log('value of greeting:', greetings);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;

}

var getAreaResults = getArea(17, 42);
console.log('value of getAreaResults:', getAreaResults);

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;

}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResults:', getLastElementResults);
