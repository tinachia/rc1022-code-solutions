/* exported getValues */
// define a function getValues to object//
function getValues(object) {
  // declare a var values to an empty array//
  var values = [];
  // use for in loop to access the keys' value within the object//
  for (const x in object) {
    // push the values using bracket notation to the empty array//
    values.push(object[x]);
  }
  return values;
}
