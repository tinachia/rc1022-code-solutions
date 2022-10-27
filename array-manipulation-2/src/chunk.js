/* exported chunk */
function chunk(array, size) {
  var arr1 = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i += size) {
    var arr2 = [];
    for (var j = 0; j < size; j++) {
      if (j + i < array.length) {
        arr2.push(array[i + j]);
      }
    }
    arr1.push(arr2);
  }
  return arr1;
}
