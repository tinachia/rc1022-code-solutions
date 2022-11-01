/* exported invert */
function invert(source) {
  var retobj = {};
  for (var key in source) {
    retobj[source[key]] = key;
  }
  return retobj;
}
