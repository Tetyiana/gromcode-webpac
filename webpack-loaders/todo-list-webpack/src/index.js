import { initTogoListHandlers } from "./list/todoList.js";
import { renderTasks } from "./list/render.js";
import { getTasksList } from "./list/tasksGateway.js";
import { setItem } from "./list/storage.js";
import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
  getTasksList()
    .then(tasksList => {
      setItem('tasksList', tasksList)
      renderTasks();
    })


  initTogoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);
