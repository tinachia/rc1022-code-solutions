/* exported getWords */
function getWords(string) {
  var arr = string.split(' ');
  var emptyArr = [];
  if (string === '') {
    return emptyArr;
  }
  return arr;
}
