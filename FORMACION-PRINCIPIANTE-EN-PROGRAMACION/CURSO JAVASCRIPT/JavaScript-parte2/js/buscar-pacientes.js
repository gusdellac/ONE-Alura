var botonBuscar = document.querySelector("#buscar-paciente"); // traemos el objeto button a js asignandolo a var botonBuscar

botonBuscar.addEventListener("click",function(){ //asignamos a var botonBuscar un escuchador de eventos para el evento click
    
    var xhr = new XMLHttpRequest; //instanciamos el objeto de AJAX - XMLHttpRequest ***
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json"); /*.open() método para comenzar a realizar una petición.
    .open(parámetro1 : "GET" para obtener datos, parámetro2 : url de donde se obtienen los datos)*/
    xhr.addEventListener("load",function(){ /*Escuchador de eventos para el objeto xhr.
    parámetro1 : evento "load", parámetro2: función anónima */

        var errorAjax = document.querySelector("#error-ajax"); //guardamos el objeto span en var errorAjax

        if(xhr.status == 200){ /* mediante la propiedad .status podemos saber el estado de la conexión. Si es igual
        a 200 la conexión es exitosa */
            errorAjax.classList.add("invisible"); //si no existe error de conexión no mostramos la etiqueta span
            var respuesta = xhr.responseText; //propiedad .responseText nos trae los datos de la petición. Guardamos en var respuesta
        
            //console.log(typeof respuesta); //imprimimos en consola el tipo de dato de var respuesta (type string)

            var pacientes = JSON.parse(respuesta); /*convertimos el tipo de dato de var respuesta a formato JSON
            nos devuelve pacientes en un formate de array*/

            //console.log(typeof pacientes); //imprimimos el tipo de dato (type JSON : object) 

            pacientes.forEach(function(paciente){ //iteramos con forEach los datos guardados en var pacientes
                adicionarPacienteEnLaTabla(paciente); /*cada paciente obtenido de pacientes lo pasamos como parámetro de la función adicionarPacienteEnLaTabla()
                para que sea agregado a nuestra tabla del html. Esta función fué creado en el archivo form.js*/
                console.log(paciente);
            });
        }else{ /*Si la conexión es diferente a 200 hay un error y no se pueden obtener los datos */
            errorAjax.classList.remove("invisible"); //si hay error de conexión mostramos la etiqueta span
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    });
    xhr.send(); //luego de abrir .open() debemos enviarlo .send()
}); 

/*
Diferencia entre objeto y clase:
Instanciar objetos es el proceso de generar un ejemplar de una clase, es decir, 
la clase es como una declaración de una forma y el objeto es un caso o elemento concreto que responde a esa forma. 
*/

/*
*** 
El objeto XMLHttpRequest es el responsable por realizar las requisiciones HTTP 
asíncronas con JavaScript. Para instanciar el objeto necesitamos usar la palabra new.
*/