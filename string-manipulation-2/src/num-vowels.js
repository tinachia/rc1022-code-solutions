/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = 'aeiou';
  var lowCase = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(lowCase[i])) {
      count++;
    }
  }
  return count;
}
