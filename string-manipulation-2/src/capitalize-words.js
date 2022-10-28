/* exported capitalizeWords */

function capitalizeWords(string) {
  var lowCase = string.toLowerCase();
  var splitWords = lowCase.split(' ');
  var arr = [];

  for (var i = 0; i < splitWords.length; i++) {
    var firstLetter = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1).toLowerCase();
    arr.push(firstLetter);
  }
  var oneString = arr.join(' ');
  return oneString;

}
