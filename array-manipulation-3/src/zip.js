/* exported zip */
function zip(first, second) {
  var result = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    result.push(subArray);
  }
  return result;
}
