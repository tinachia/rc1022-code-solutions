/* exported isUpperCased */
// define a dunctio isUpperCased to word//
function isUpperCased(word) {
  // use a for loop to loop through each character of string//
  for (var i = 0; i < word.length; i++) {
    // set the condition to be false if it does not match it's uppercase value//
    if (word[i] !== word[i].toUpperCase()) {
      // return false as soon as it does meet the condition//
      return false;
    }
  }
  // if it never met the condition of not equal to it's uppercase value, then return true//
  return true;
}
