/* exported getWords */
// definte a function getWords to string//
function getWords(string) {
  // use string.split method to split up the setence in the string at every space//
  var arr = string.split(' ');
  // create an empty array to return an empty array//
  var emptyArr = [];
  // use if statement to push return empty array if string on contains only a space//
  if (string === '') {
    return emptyArr;
  }
  return arr;
}
