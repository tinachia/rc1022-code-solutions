/* exported isPalindromic */
// define a function passing in string
function isPalindromic(string) {
// declare var to delete all spaces with replace method
  var updatedString = string.replace(' ', '');
  // declare a var and add updatedString into a new arr using split method
  var arr = updatedString.split('');
  // declare a var and to reverse the array using the reverse method
  var reverseArr = arr.reverse();
  // declare a var to join the revesrse into a string using the join method
  var reverseString = reverseArr.join('');
  // if the updatedString does not equal to the reverseString, return false. else, return true
  if (updatedString !== reverseString) {
    return false;
  } else {
    return true;
  }
}
