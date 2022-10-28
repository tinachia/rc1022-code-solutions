/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  var lowString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      newString += lowString[i].toUpperCase();
    } else {
      newString += lowString[i];
    }
  }
  return newString;
}
