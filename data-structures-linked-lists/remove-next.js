/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const third = list.next.next;
    list.next = third;
  }
}
