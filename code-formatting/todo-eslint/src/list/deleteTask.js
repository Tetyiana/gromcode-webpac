import { renderTasks } from './render';
import { setItem, getItem } from './storage';
import { deleteTask } from './tasksGateway';

export const onDeleteTask = (e) => {
  const deleteButton = e.target.classList.contains('list__item-delete-btn');

  if (!deleteButton) {
    return;
  }

  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => {
      const tasksList = getItem('tasksList');
      const updatedTasksList = tasksList.filter((task) => task.id !== taskId);
      setItem('tasksList', updatedTasksList);

      renderTasks();
    });
};
