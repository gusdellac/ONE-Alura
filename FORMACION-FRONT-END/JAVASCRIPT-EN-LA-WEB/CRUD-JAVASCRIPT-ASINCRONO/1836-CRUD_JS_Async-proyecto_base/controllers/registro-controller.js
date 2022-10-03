import { clientServices } from "../service/client-service.js"; //importamos objeto clientServices para utilizar la función crearCliente()

const formulario = document.querySelector("[data-form]"); //seleccionamos el objeto html por su data attribute

formulario.addEventListener("submit",(event) => { 
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value; //extraemos el value del input del nombre referenciando el data attribute data-nombre
    const email = document.querySelector("[data-email]").value; //extraemos el value del input del nombre referenciando el data attribute data-email
    clientServices.crearCliente(nombre,email).then(respuesta => {// llamamos a función crearCliente() pasamos parámetros nombre y email
        //llamamos función then() en el caso de que la respuesta del servidor sea resolve,
        //luego ejecutamos dentro arrow function que redireccionará a archivo registro_completado.html
        window.location.href = "/screens/registro_completado.html";
    }).catch(err => console.log(err)); //si la respuesta del servidor es reject catcheamos el error y lo mostramos por consola
});
