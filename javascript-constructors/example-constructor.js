function ExampleConstructor() {

}
console.log('value of the prototype property of the ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof the prototype property of the ExampleConstructor', typeof ExampleConstructor.prototype);

var aExampleConstructor = new ExampleConstructor();
console.log('value of aExampleConstructor', aExampleConstructor);

var result = aExampleConstructor instanceof ExampleConstructor;
console.log('value of result', result);
