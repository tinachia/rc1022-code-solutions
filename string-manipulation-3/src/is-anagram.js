/* exported isAnagram */
// define a function isAnagram passing two arg
function isAnagram(firstString, secondString) {
  // declare a function to replace all spaces in string using replace method for both args
  var stringOne = firstString.replaceAll(' ', '');
  var stringTwo = secondString.replaceAll(' ', '');
  // declare a var to split strings into arrays using split method, and sort the arrays using sort method. and then join the arrays into strings using the join mehtod
  var newStringOne = stringOne.split('').sort().join();
  var newStringTwo = stringTwo.split('').sort().join();
  // if the new strings are equal, return true, else return false
  if (newStringOne === newStringTwo) {
    return true;
  } else {
    return false;
  }
}
