/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    let biggest = stack.peek();
    while (stack.peek() !== undefined) {
      if (stack.peek() > biggest) {
        biggest = stack.peek();
      }
      stack.pop();
    }
    return biggest;
  }
}
