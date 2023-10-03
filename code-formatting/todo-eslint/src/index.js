import { initTogoListHandlers } from './list/todoList';
import { renderTasks } from './list/render';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((tasksList) => {
      setItem('tasksList', tasksList);
      renderTasks();
    });

  initTogoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
