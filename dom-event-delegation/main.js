var $click = document.querySelector('.task-list');
$click.addEventListener('click', taskList);

function taskList(event) {
  console.log('event target', event.target);
  console.log('event target tagName', event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var $taskListItem = event.target.closest('.task-list-item');
  console.log('closest task list item ', $taskListItem);
  $taskListItem.remove();
}
