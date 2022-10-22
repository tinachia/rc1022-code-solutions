/* exported toObject */
// define a function toObject to keyValuePairs//
function toObject(keyValuePair) {
  // declare a variable object to an empty object to be returned//
  var object = {};
  // access the paramenter's array to add in the new keys and value to the empty object//
  object[keyValuePair[0]] = keyValuePair[1];
  // return the object//
  return object;
}
