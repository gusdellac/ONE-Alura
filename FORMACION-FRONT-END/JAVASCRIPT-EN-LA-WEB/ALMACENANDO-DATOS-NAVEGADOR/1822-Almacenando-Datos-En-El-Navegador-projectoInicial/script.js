import { addTask } from "./components/addTask.js"; /*importamos función addTask()*/
import { displayTasks } from "./components/readTasks.js"; /*importamos función readTasks()*/
const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask); /*al usuario clickear en el boton se ejecutara la función addTask() */

displayTasks(); //llamamos a ejecución a función displayTasks();
