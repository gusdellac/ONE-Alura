const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) => completeTask(event, id)); /*al realizar click se ejecutará la arrow function 
  que utilizará el parámetro event y llamará a ejecución a función completeTask() pasando los parámetros event y id */
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  console.log('check id', id);
  const tasks = JSON.parse(localStorage.getItem("tasks")); //obtenemos los datos almacenados en el localStorage
  
  const index = tasks.findIndex((item) => item.id === id );/* método findIndex() retorna la posición 
  en la que se encuentra un elemento dentro del array*/
  tasks[index]["complete"] = !tasks[index]["complete"]; /*Accedemos al array tasks en la posición indicada por
  [index]. Accedemos a la propiedad complete del objeto almacenado en ésta posición.
  Modificamos el valor de la propiedad accedida y lo negamos utilizando la negación sobre la misma sintaxis anterior.
  Como resultado la propiedad complete modificará su valor lógico de false a true ó de true a false */
  localStorage.setItem("tasks", JSON.stringify(tasks)); //almacenamos los nuevos valores en el localStorage
};

export default checkComplete;
