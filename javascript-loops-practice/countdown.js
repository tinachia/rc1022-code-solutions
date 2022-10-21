/* exported countdown */
function countdown(number) {
  var arr = [];
  for (var i = 0; i <= number; i++) {
    arr.unshift(i);
  }
  return arr;
}
