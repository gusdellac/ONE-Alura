import { createTask } from "./addTask.js"; /*Importamos función createTask() */
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement  from "./dateElement.js"; /*Importamos el objeto html dateElement */

export const displayTasks = () => { /*exportamos la función readTasks para que sea utilizada por otro módulo */
    const list = document.querySelector('[data-list]'); /*traemos el objeto html identificado con el data attribute data-list 
    a javascript */
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || []; /*usamos el método getItem() de localStorage
    para traer la información que se haya guardado en el navegador. Pasamos como parámetro la clave 'tasks'. Analizamos
    estos datos como formato JSON usando el método JSON.parse() y los transformamos a un objeto javascript para que podamos
    trabajar con ellos. Si los datos que estamos tratando de obtener de la llave 'tasks' nos devuelve un dato 
    null se asignará el dato que sigue después del operador or (||) que es un array vacío */
    const dates = uniqueDates(tasksList); /*en const dates almacenamos el array que retorna la función uniqueDates() 
    pasando como parámetro taskList*/
    orderDates(dates); //llamamos la función orderDates() pasando como parámetro el array de fechas dates
    
    dates.forEach((date) => { //iteramos el objeto dates con forEach()
        const dateMoment = moment(date,'DD/MM/YYYY'); //almacenamos en const dateMoment la fecha formateada utilizando el método moment()
        list.appendChild(dateElement(date)); //le indicamos al objeto list que adopte al objeto dateElement.
        tasksList.forEach((task) => { /*iteramos con forEach los elementos del array asignado a const tasksList. Cada elemento del array
            se asignará a la variable pasada como parámetro de la función anónima (task).*/
            const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
            const diff = dateMoment.diff(taskDate);
            
            if(diff === 0){
                list.appendChild(createTask(task)); /*le indicamos al objeto html almacenado en const list que adopte al objeto
            que retornará la función createTask() la cuál recibe como parámetro la variable task */
            };
        });
    });  
}

