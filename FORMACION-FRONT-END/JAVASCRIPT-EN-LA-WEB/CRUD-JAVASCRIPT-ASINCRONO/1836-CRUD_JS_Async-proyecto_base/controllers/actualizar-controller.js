import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

//async/await // (***b)
const obtenerInformacion = async () => { //indicamos que la función será asíncrona utilizando async
    const url = new URL(window.location); //instanciamos la clase URL en un nuevo objeto. Indicamos la localización de la url actual con window.location
    //console.log(url);
    const id = url.searchParams.get("id"); /*extraemos el id de la url en la que nos localizamos anteriormente,
    para esto utilizamos el método get("id") que pertenece al atributo searchParams de url. (url.searchParams.get())
    */

    if (id === null){ //si el id extraído no existe, es decir es null redireccionamos a la página de error.html
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    /*try / catch sólo puede utilizarse dentro de una función async.
    utilizamos try para indicar que sí la llamada al servidor fué resuelta (resolve) ejecute el código
    dentro de las llaves de try {}. En el caso de que la petición al servidor sea rechazada (reject) ejecutaremos
    el catch(){}
    */

    try {
        const perfil = await clientServices.detalleCliente(id); /*Utilizamos await en donde esperamos la respuesta que nos devolverá
        la otra función asíncrona detalleCLiente(). Con esto reemplazamos la sintaxis del .then().catch()*/
        if (perfil.nombre && perfil.email) { /*validamos si los atributos nombre y email existen. En el caso de que el
        id recibido sea incorrecto estos atributos no existirán*/
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else { //si no se cumple lo anterior generaremos un error para que pueda ser catcheado
            throw new Error(); //sintaxis para crear un error
        }
    } catch(error){ //catcheamos el error
        console.log("ERROR: ", error);
        window.location.href = "/screens/error.html"; //redireccionamos a la página que informa del error
    }

    
    /* 
    Con la sintaxis anterior reemplazamos esto:
    clientServices.detalleCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    }).catch(err => console.log(err));   
    */
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location); // (***a)
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.actualizarCliente(nombre, email, id).then(()=> {
        window.location.href = "/screens/edicion_concluida.html";
    });
});


/* (***a)
Creamos un nuevo objeto URL que será capaz de decirnos cuál dirección de la página estamos. 
Por medio de la propiedad searchParams podemos acceder al método get y seleccionar el id que vemos en la url.

(***b)
Utilizando async/await tenemos una función asíncrona que podemos leer de forma estructural, 
lo que nos trae beneficios de mantenimiento y legibilidad para nuestro código. Y el uso de 
try/catch nos ayuda a lidiar con los errores.

*/