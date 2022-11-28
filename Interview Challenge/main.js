function getRangeReport(start, end) {
  var array = [];
  var object = {};
  for (var i = start; i <= end; i++) {
    array.push(i);
  }
  for (var j = 0; j < array.length; j++) {
    object.total += array[j];
  }

  // if (start % 2 === 1) {
  //   object.odds.push(start);
  // }
  // if (end % 2 === 1) {
  //   object.odds.push(end);
  // }
  // if (start % 2 === 0) {
  //   object.evens.push(start);
  // }
  // if (end % 2 === 0) {
  //   object.evens.push(end);
  // }
  // object.range = [start, end];
  // object.average = (start + end) / 2;
  return object;
}
