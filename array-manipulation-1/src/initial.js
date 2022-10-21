/* exported initial */
// define a function intial to an array//
function initial(array) {
  // declare a new var name arr to an empty array//
  var arr = [];
  // create a for loop that go through the length of the array but not the last index//
  for (var i = 0; i < array.length - 1; i++) {
    // push index of i to new array//
    arr.push(array[i]);
  }
  // return arr//
  return arr;
}
// console.log to check//
