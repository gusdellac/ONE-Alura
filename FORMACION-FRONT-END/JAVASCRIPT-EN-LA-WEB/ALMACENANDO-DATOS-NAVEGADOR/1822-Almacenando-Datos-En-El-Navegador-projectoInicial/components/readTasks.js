import { createTask } from "./addTask.js"; /*Importamos función createTask() */

export const readTasks = () => { /*exportamos la función readTasks para que sea utilizada por otro módulo */
    const list = document.querySelector('[data-list]'); /*traemos el objeto html identificado con el data attribute data-list 
    a javascript */
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; /*usamos el método getItem() de localStorage
    para traer la información que se haya guardado en el navegador. Pasamos como parámetro la clave 'tasks'. Analizamos
    estos datos como formato JSON usando el método JSON.parse() y los transformamos a un objeto javascript para que podamos
    trabajar con ellos. Si los datos que estamos tratando de obtener de la llave 'tasks' nos devuelve un dato 
    null se asignará el dato que sigue después del operador or (||) que es un array vacío */
    
    tasksList.forEach((task) => { /*iteramos con forEach los elementos del array asignado a const tasksList. Cada elemento del array
    se asignará a la variable pasada como parámetro de la función anónima (task).*/
        list.appendChild(createTask(task)); /*le indicamos al objeto html almacenado en const list que adopte al objeto
        que retornará la función createTask() la cuál recibe como parámetro la variable task */
    });
    
}

