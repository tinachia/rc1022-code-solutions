/* exported reverseWord */
// define a function reverseWord to word//
function reverseWord(word) {
  // create an empty string to store new value//
  var reverse = '';
  // use a for loop to loop through the string in reverse//
  for (var i = word.length - 1; i >= 0; i--) {
    // add to new string//
    reverse += word[i];
  }
  // return result//
  return reverse;
}
