const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const createNewElem = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');
const listElem = document.querySelector('.list');

createNewElem.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText === '') {
    return;
  }

  const newTask = { text: taskText, done: false };
  tasks.push(newTask);
  renderTasks(tasks);
  taskInput.value = '';
});

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  tasksList
    .sort((a, b) => a.done - b.done)
    .forEach(({ text, done }) => {

      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);
      checkbox.addEventListener('click', () => {
        listItemElem.classList.toggle('list__item_done');
      });
      listElem.append(listItemElem);
    });
};

renderTasks(tasks);


// put your code here


