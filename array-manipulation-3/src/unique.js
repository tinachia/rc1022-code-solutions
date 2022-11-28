/* exported unique */
function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (result.includes(array[i]) === false) {
      result.push(array[i]);
    }
  }
  return result;
}
