//<script type="module" src="./script.js"></script> código html para poder utilizar módulos
//utilizamos este archivo como main
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";


const btn = document.querySelector("[data-form-btn]"); /*selector data attribute de button (data-form-btn). 
Guardamos el objeto en const btn */
    
const createTask = (e) => { /*sintaxis función anónima/ arrow functions:  '(parámetro)' + '=' + '>' + '{}' */
    e.preventDefault(); /*prevenimos el comportamiento por default del objeto evento para evitar que se recargue la página */
    const input = document.querySelector("[data-form-input]"); /*selector data attribute de input (data-form-input). */
    const value = input.value /*guardamos el valor de const input en const value */
    const list = document.querySelector("[data-list]"); /*selector data attribute de ul. Guardamos el objeto html en const
    list */
    const task = document.createElement("li"); /*selector de li. Guardamos el objeto html creado  en const
    task */
    task.classList.add('card'); /*agregamos una clase llamada 'card' al tag li creado */
    input.value = ''; /*reasignamos un valor a const input (string vacío) */
    
    const taskContent = document.createElement('div'); /*creamos una div dentro del li creado en task */
    taskContent.appendChild(checkComplete()); /*indicamos al objeto taskContent que adopte al objeto que se creará en la funcion
    checkComplete */
    const titleTask = document.createElement('span'); /*creamos una etiqueta span y la guardamos en const titleTask */
    titleTask.classList.add('task'); /*agregamos un clase al span */
    titleTask.innerText = value; /*al elemento span creado le asignamos el string que mostrará (value) obtenido
    del input*/
    taskContent.appendChild(titleTask); /*le indicamos a la div(taskContent) que adopte al span creado (titleTask) */
      
    /*template strings (`backticks`).
    Utilizando las comillas invertidas (``) podemos escribir un string con código html y dentro interpolar
    una variable de js*/
        
    //task.innerHTML = content; /*asignamos el string guardado en const content al objeto html de const task */

    task.appendChild(taskContent); /*aplicamos el método appendChild() al objeto html guardado en const list. Le indicamos que adopte
    al objeto html (li) creado y guardado en const task */
    task.appendChild(deleteIcon());
    list.appendChild(task); /*le indicamos al objeto ul guardado en const list que adopte al elemento creado en const task */
}
btn.addEventListener('click', createTask); /*asginamos un escuchador de evento al objeto btn */
    


//IIFE (immediately invoked function expression)
/*Función que se invoca inmediatamente luego de declararse.
En este caso la utilizamos para que se ejecute inmediatamente en el navegador y le impida al usuario
acceder a las funciones que utilizamos en el código, es decir, de esta manera otorgar mayor seguridad al código 

(() => {
})();

*/