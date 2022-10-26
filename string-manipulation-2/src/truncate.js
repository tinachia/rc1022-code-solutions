/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string[i];
  }
  return newString;
}
