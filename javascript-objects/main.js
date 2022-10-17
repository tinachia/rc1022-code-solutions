var student = {
  firstName: 'Chivy',
  lastName: 'Chia',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOcupation = 'teacher';

console.log('value of livesinIrvine:', student.livesInIrvine);
console.log('value of previousOcupation:', student.previousOcupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Porsche',
  model: 'Macan GTS',
  year: '2023'
};

vehicle['color'] = 'chalk';
vehicle['isConvertible'] = false;

console.log('value of color:', vehicle['color']);
console.log('value of isConveritble:', vehicle['isConverticle']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Chai',
  type: 'sheepadoodle'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
