/* exported compact */
// define a function compact passing in an array//
function compact(array) {
// declare a var arr to an empty array//
  var arr = [];
  // create a for loop to go through the length of the array//
  for (var i = 0; i < array.length; i++) {
    // check to see if the values of the array are truthy//
    if (array[i]) {
      // push truthy array into arr//
      arr.push(array[i]);
    }
  }
  // return new arr//
  return arr;
}
// console.log to check//
