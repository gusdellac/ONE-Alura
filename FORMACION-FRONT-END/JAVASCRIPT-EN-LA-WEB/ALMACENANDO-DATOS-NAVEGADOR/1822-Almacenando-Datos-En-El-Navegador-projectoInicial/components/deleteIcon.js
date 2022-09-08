import { displayTasks } from "./readTasks.js";
const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id)); /*al click del usuario se ejecuta la llamada a la función 
  deleteTask() parámetro id*/
  return i;
};

const deleteTask = (id) => {
  const list = document.querySelector("[data-list]"); /*referenciamos todo el objeto ul de nuestro html */
  const tasks = JSON.parse(localStorage.getItem("tasks")); /*traemos los datos almacenados en localStorage */
  const index = tasks.findIndex((item)=> item.id === id); /*utilizamos el método findIndex() para localizar el índice del
  array en el que se encuentra el id recibido como paráemtro. Parámetro item. Este parámetro nos permite poder referenciar
  a la propiedad id almacenada en esta posición. Realizamos la comparación de igualdad (===) entre el id del item y el id
  recibido. Si el elemento es encontrado este método retorna el índice en el que se encuentra el elemento dentro del array.
  Este valor se almacena el la const index*/
  tasks.splice(index,1); /*eliminamos del array tasks el elemento que nos determina la const index utilizando el método
  splice() el primer parámetro hace referencia al indice y el segundo a cuantos elementos se borraran a partir del índice
  determinado */
  list.innerHTML = ''; /*limpiamos todo el objeto ul de nuestro html. Quedará vacío. Luego se actualizará con toda la información
  al realizar la llamada a displayTasks() */
  localStorage.setItem("tasks", JSON.stringify(tasks)); /*enviamos el array tasks actualizado para ser almacenado en localStorage */
  displayTasks(); /*llamamos a función displayTasks() que realiza el ordenamiento de las fechas para que nos actualice la pantalla */
};

export default deleteIcon;

// const deleteTask = () => {
//   const parent = event.target.parentElement;
//   parent.remove();
// };