/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var i = array.length - count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
