/* exported equal */

function equal(first, second) {
  var result = true;
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        result = false;
      }
    }
  }
  return result;
}
