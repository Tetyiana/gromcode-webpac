import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";
import { getTasksList } from "./tasksGateway.js";

// export const onDeleteTask = () => {
//   const taskTitleInputElem = document.querySelector(".task-input");

//   const text = taskTitleInputElem.value;

//   if (!text) {
//     return;
//   }
//   taskTitleInputElem.value = "";

//   const tasksList = getItem("tasksList") || [];
//   const taskToDelete = tasksList.find((task) => task.text === text);

//   if (!taskToDelete) {
//     console.error("Task not found");
//     return;
//   }

//   // Видалення задачі зі списку за індексом
//   const indexToDelete = tasksList.indexOf(taskToDelete);
//   tasksList.splice(indexToDelete, 1);

//   setItem("tasksList", tasksList);
//   renderTasks();
// };
export const onDeleteTask = (e) => {
  const deleteBatton = e.target.classList.contains("list__item-delete-btn");

  if (!deleteBatton) {
    return;
  }
  const tasksList = getItem("tasksList");
  const taskId = e.target.dataset.id;

  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });


};
