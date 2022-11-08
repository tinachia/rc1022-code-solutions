/* exported difference */
function difference(first, second) {
  var final = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      final.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      final.push(second[j]);
    }
  }
  return final;
}
