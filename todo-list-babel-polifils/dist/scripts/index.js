import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.array.sort.js";
var tasks = [{
  text: 'Buy milk',
  done: false
}, {
  text: 'Pick up Tom from airport',
  done: false
}, {
  text: 'Visit party',
  done: false
}, {
  text: 'Visit doctor',
  done: true
}, {
  text: 'Buy meat',
  done: true
}];
var createNewElem = document.querySelector('.create-task-btn');
var taskInput = document.querySelector('.task-input');
var listElem = document.querySelector('.list');
createNewElem.addEventListener('click', function () {
  var taskText = taskInput.value;
  if (taskText === '') {
    return;
  }
  var newTask = {
    text: taskText,
    done: false
  };
  tasks.push(newTask);
  renderTasks(tasks);
  taskInput.value = '';
});
var renderTasks = function renderTasks(tasksList) {
  listElem.innerHTML = '';
  tasksList.sort(function (a, b) {
    return a.done - b.done;
  }).forEach(function (_ref) {
    var text = _ref.text,
      done = _ref.done;
    var listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);
    checkbox.addEventListener('click', function () {
      listItemElem.classList.toggle('list__item_done');
    });
    listElem.append(listItemElem);
  });
};
renderTasks(tasks);

// put your code here