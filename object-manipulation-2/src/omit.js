/* exported omit */
function omit(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      delete source[keys[i]];
      object = source;
    } else if (source[keys[i]] === undefined) {
      object = source;
    }
  }
  return object;
}
