/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    let front = queue.dequeue();
    for (let i = 0; i < index; i++) {
      queue.enqueue(front);
      front = queue.dequeue();
    }
    return front;
  }
}
