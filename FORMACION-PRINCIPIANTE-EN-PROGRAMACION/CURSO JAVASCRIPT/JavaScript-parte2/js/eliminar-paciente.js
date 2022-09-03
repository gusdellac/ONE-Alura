var tabla = document.querySelector("#tabla-pacientes"); //asignamos todo el objeto tabla de pacientes a var tabla


tabla.addEventListener("dblclick",function(event){ /* objeto(tabla).addEventListener(método) - asignamos un escuchador de eventos a nuestra var tabla
    en donde habiamos guardado el objeto de html. Utilizamos el método addEventListener(parámetro1,parámetro2) el primer parámetro es un string que indica
    el tipo de evento (nombre) a escuchar (click,dblclick,etc) y el segundo parámetro es una funcion anónima que se ejecuta al concretarse la acción indicada en el primer 
    parámetro.
    A la funcion anónima le pasamos un único parámetro que es event.El event o evento es un objeto del DOM con múltiples propiedades que nos permiten acceder a información
    del evento ejecutado, y con esta información poder realizar distintas acciones según lo que necesitemos hacer.*/
    event.target.parentNode.classList.add("fadeOut"); /*event.target(target es una propiedad que nos indica el objeto de html en donde se está realizando doble click -
        event.target.parentNode(parentNode es una propiedad que le indica al navegador que queremos seleccionar al padre o elemento de mayor jerarquía del que depende el elemento
        seleccionado. Es decir si seleccionamos la etiqueta td, le indicamos que queremos afectar a toda la etiqueta tr (etiqueta padre) -
        event.target.parentNode.classList.add("clase CSS") le estamos indicando que al objeto padre del objeto seleccionado le asignamos una clase de CSS que cambia el estilo 
        del objeto al ejecutarse el evento. */
    setTimeout(function(){ /*funcion de js que setea el tiempo en el que se ejecutará lo que indiquemos en los parámetros.
        setTimeout(parametro1,parametro2). El 1er parametro realiza la ejecucion de la funcion anónima y el 2do parametro (700 miliseg)
        indica el tiempo que demorará en ejecutar el primer parámetro*/
        event.target.parentNode.remove() //método .remove() eliminamos la etiqueta padre del objeto que seleccionamos (en este caso seleccionamos una etiqueta td y eliminamos la tr con todos los td)
    },700); 
});
