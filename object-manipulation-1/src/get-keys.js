/* exported getKeys */
// define a function get keys to object//
function getKeys(object) {
  // declare a var keys to an empty array//
  var keys = [];
  // use a for in loop to access keys in the object//
  for (const x in object) {
    // push those keys into the empty arrays//
    keys.push(x);
  }
  return keys;
}
