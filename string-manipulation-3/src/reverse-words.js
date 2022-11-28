/* exported reverseWords */

// define a funnction reverseWords passing in one arg string
function reverseWords(string) {
  // declare a var of an array that split the strings w.o spaces and store that new array
  var arr = string.split(' ');
  var newArr = [];
  // loop through the array of each word
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    // declare a var reverseWord that stores an empty string
    var reverseWord = '';
    // loop through each word, but start at the end and go back
    for (var j = word.length - 1; j >= 0; j--) {
      // concatenante that to reverseWord
      reverseWord += word[j];
    }
    // push the new string into the newArr
    newArr.push(reverseWord);
  }
  // join the array into the string of a var final
  var final = newArr.join(' ');
  return final;
}

