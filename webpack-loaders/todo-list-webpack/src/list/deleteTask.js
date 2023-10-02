// import { renderTasks } from "./render.js";
// import { setItem } from "./storage.js";
// import { getTasksList, deleteTask } from "./tasksGateway.js";


// export const onDeleteTask = (e) => {
//   const deleteBatton = e.target.classList.contains("list__item-delete-btn");

//   if (!deleteBatton) {
//     return;
//   }
//   const tasksList = getItem("tasksList");
//   const taskId = e.target.dataset.id;

//   const { text, createDate } = tasksList.find((task) => task.id === taskId);

//   const done = e.target.checked;
//   const updatedTask = {
//     text,
//     createDate,
//     done,
//     finishDate: done ? new Date().toISOString() : null,
//   };

//   updateTask(taskId, updatedTask)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//       setItem("tasksList", newTasksList);
//       renderTasks();
//     });


// };
import { renderTasks } from "./render.js";
import { setItem, getItem } from "./storage.js";
import { getTasksList, deleteTask } from "./tasksGateway.js";

export const onDeleteTask = (e) => {
  const deleteButton = e.target.classList.contains("list__item-delete-btn");

  if (!deleteButton) {
    return;
  }

  const taskId = e.target.dataset.id;

  deleteTask(taskId) // Отправляем DELETE-запрос на сервер для удаления задачи
    .then(() => {
      // Если задача успешно удалена на сервере, обновляем локальное хранилище
      const tasksList = getItem("tasksList");
      const updatedTasksList = tasksList.filter((task) => task.id !== taskId);
      setItem("tasksList", updatedTasksList);

      // Перерисовываем задачи на странице
      renderTasks();
    })
    .catch((error) => {
      console.error("Error deleting task:", error);
    });
};


