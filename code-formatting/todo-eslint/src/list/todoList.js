import { onCreateTask } from './createTasks';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

// export const initTogoListHandlers = () => {
//   const createBtnElem = document.querySelector(".create-task-btn");
//   createBtnElem.addEventListener("click", onCreateTask);

//   const todoListElem = document.querySelector(".list");
//   todoListElem.addEventListener("click", onToggleTask);

//   const deleteListElem = document.querySelector(".list__item-delete-btn");
//   deleteListElem.addEventListener("click", onDeleteTask);
// };
export const initTogoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);

  // Найти все кнопки удаления
  const deleteButtons = document.querySelectorAll('.list__item-delete-btn');

  // Назначить обработчик на каждую кнопку удаления
  deleteButtons.forEach((button) => {
    button.addEventListener('click', onDeleteTask);
  });
};
