/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return null;
  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
}
