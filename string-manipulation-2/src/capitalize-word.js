/* exported capitalizeWord */
function capitalizeWord(word) {
  var firstLetter = word.charAt(0).toUpperCase();
  var finalWord = '';
  for (var i = 1; i < word.length; i++) {
    finalWord += word[i].toLowerCase();
  }
  return firstLetter + finalWord;
}
