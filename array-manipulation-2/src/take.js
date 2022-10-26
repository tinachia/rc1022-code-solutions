/* exported take */
function take(array, count) {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(array[i]);
  }
  // } if array === [] {
  //   return [];
  // }
  return arr;
}
