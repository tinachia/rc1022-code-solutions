/* exported capitalizeWords */
function capitalizeWords(string) {
  var sepWords = string.split(' ');
  var firstLetter = string.charAt(0).toUpperCase(sepWords);
  var capWords = firstLetter;
  return capWords;
}
