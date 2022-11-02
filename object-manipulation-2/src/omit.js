/* exported omit */
function omit(source, keys) {
  var object = {};
  for (const i in source) {
    if (!keys.includes(i)) {
      object[i] = source[i];
    }
  }
  return object;
}
