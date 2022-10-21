/* exported reverse */
// define a function reverse to an array//
function reverse(array) {
  // a new var arr to an empty array//
  var arr = [];
  // for loop to increment through the array//
  for (var i = 0; i < array.length; i++) {
    // use shift method to reverse the order of the array and push to new array/
    arr.unshift(array[i]);
  }
  // return arr//
  return arr;
}
// console.log to check//
