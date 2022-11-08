/* exported intersection */
function intersection(first, second) {
  var final = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      final.push(first[i]);
    }
  }
  return final;
}
