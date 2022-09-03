import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (e) => {
    e.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]'); /*usamos el data atributte para traer el objeto input de type="datetime-local" a js */
    
    const value = input.value;
    const date = calendar.value; /*extraemos el value del objeto guardado en const calendar y lo asignamos a const date */
    const dateFormat = moment(date).format('DD/MM/YYYY'); /*utilizamos los métodos que nos da la librería importada
    moment().format() para formatear la fecha */
    
    input.value = '';
    calendar.value = '';

    const taskObj = { /*Creamos un objeto que contiene llave y valor, 
    y que servirá para almacenar una serie de datos en el LocalStorage. */
      value, //value = value;
      dateFormat //dateFormat = dateFormat;
    };
    
    const taskList = JSON.parse(localStorage.getItem('tasks')) || []; /* usamos el método getItem() de localStorage
    para traer la información que se haya guardado en el navegador. Pasamos como parámetro la clave 'tasks'. Analizamos
    estos datos como formato JSON usando el método JSON.parse() y los transformamos a un objeto javascript para que podamos trabajar con ellos. Si los datos que estamos tratando de obtener de la llave
    'tasks' nos devuelve un dato null se asignará el dato que sigue después del operador or (||) que es un 
    array vacío  (***) */
    taskList.push(taskObj); /*Agregamos el objeto taskObj al array asignado a const taskList con método push() */

    /*sessionStorage.setItem("tasks",JSON.stringify(taskObj)); /*sessionStorage (la información se almacena en el navegador durante la sesión del usuario,
    es decir que al cerrar la pestaña esta información se pierde) */

    localStorage.setItem('tasks', JSON.stringify(taskList)); /*LocalStorage solamente acepta guardar informaciones 
    en el formato de strings, por tal motivo usamos el objeto JSON con el método stringify(). Como parámetro
    pasamos el array taskList. Para lograr este almacenamiento de datos en el navegador utilizamos el método setItem(clave, valor) */
    const task = createTask(taskObj); /*asignamos en const task el objeto que retorne la función createTask(). Pasamos
    como parámetro el objeto almacenado en const taskObj */
    list.appendChild(task); /*le indicamos al objeto html almacenado en const list que adopte al objeto almacenado en const task */
}
  
export const createTask = ({value,dateFormat}) => { /*la función createTask recibe como parámetros las propiedades value y dateFormat del objeto taskObj */
    const data = new Date();
    const task = document.createElement('li');
    task.classList.add('card');
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};

/* (***)
Durante el curso utilizamos pipe || para crear una nueva evaluación de cortocircuito( short circuit evaluation).

const tasks = JSON.parse(localStorage.getItem('tasks')) || [ ]
Con eso, le decimos a la aplicación que en caso de que localStorage este 
con datos se comporte de una manera, si en caso contrario estuviera vacío, 
la constante tasks empezaría como un arreglo vacío. Las expresiones lógicas son evaluadas de izquierda a derecha, 
luego, si la primera declaración sea verdadera se ejecuta normalmente y la segunda declaración no es aplicada, y 
si el primer es evaluado como falso, ejecutamos el segundo caso.

true || false // true
false || true // true

*/