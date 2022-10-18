//$0.validity (para poder visualizar el objeto validity (ValidityState) con sus propiedades por consola)

//función para validar los input. La exportamos para que sea utilizada en módulo app.js
export function valida(input) { //recibe como parámetro el input.target enviado desde app.js
    const tipoDeInput = input.dataset.tipo; /* accedemos al data attribute del objeto input (data-tipo="")
    para seleccionarlo utilizamos dataset y para indicar que data attribute es utilizamos tipo. Lo asignamos
    a const tipoDeInput
    */

    //este validador lo usamos para las fechas de nacimiento
    if(validadores[tipoDeInput]){ //verificamos si el tipoDeInput se encuentra en objeto validadores. En este caso
        //verificamos si el tipo de input corresponde a nacimiento. Si es true ingresa al if
        validadores[tipoDeInput](input); /*Al ingresar, se llamará a ejecución a la arrow function que se encuentra
        dentro de la propiedad nacimiento del objeto validadores. Se envía como parámetro el objeto input */
    }

    //este validador lo utilizaremos para todos los input, incluido las fechas
    if(input.validity.valid){ /*utilizamos el objeto ValidityState. Lo referenciamos con validity, utilizamos la propiedad
    valid. Esto nos devolverá true si el input se encuentra con datos y false si esto no se cumple.
    Según lo que devuelve la propiedad de este objeto validity se ingresará al if 
    */
        input.parentElement.classList.remove("input-container--invalid"); /* removemos la clase del div que es padre del input,
        input-container--invalid */
        input.parentElement.querySelector(".input-message-error").innerHTML = ""; /*seleccionamos el objeto span con la clase .input-message-error
        y le asignamos un string vacío*/
    }else{
        input.parentElement.classList.add("input-container--invalid"); /* agregamos la clase del div que es padre del input,
        input-container--invalid */
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input); /*seleccionamos el objeto span con la clase .input-message-error
        y le asignamos el mensaje customizado que nos retorna la función mostrarMensajeDeError(), pasamos como parámetros 
        el tipoDeInput(nombre, email, password , nacimiento, etc)  y  el objeto input*/
    }
}

//objeto que contendrá los tipos de errores
/*estos tipos de errores corresponden al objeto ValidityState. Estas propiedades tendrán un valor de true o false
dependiendo de la propiedad type que se indique en un objeto input y de si los datos requeridos fueron ingresados al input
o no */
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];


//Objeto con mensajes de error
/*Este objeto tendrá dentro cada propiedad que hace referencia a los tipos (nombre, email, password, nacimiento, etc)
y dentro de cada tipo tendra otro objeto con los mensajes customizados que queremos exhibir*/
const mensajesDeError = {
    nombre : {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El email no es válido" 
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe  contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "El campo fecha de nacimiento no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad"
    },
    telefono: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 4 a 30 caracteres.",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 4 a 30 caracteres.",
    }

}

//objeto validadores
const validadores = {
    nacimiento : input => validarNacimiento(input), /*la propiedad nacimiento tiene como  valor una arrow function
    que se ejecutará y llamará a función validarNacimiento(). Se pasa como parámetro el objeto input
    */
}

// función para mostrar mensajes de error customizados
function mostrarMensajeDeError(tipoDeInput, input){ //recibe como parámetros el tipoDeInput, y el objeto input
    let mensaje = ""; //incializamos variable mensaje con un string vacío
    tipoDeErrores.forEach((error)=>{ //iteramos el objeto tipoDeErrores. Por cada error verificaremos si es valido
        if(input.validity[error]){ /*Si el objeto validity que se genera a través del objeto input contiene en el
        la propiedad que referenciamos nosotros dentro de nuestro objeto tipoDeErrores con el valor de true, se ingresará
        al if*/
            // console.log(tipoDeInput, error);
            // console.log(input.validity[error]);
            // console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error]; /*Asignaremos a variable mensaje el mensaje guardado en 
            objeto mensajesDeError, que corresponde al [tipoDeInput (nombre, email, password, nacimiento ,etc)]
            y al tipo de error [error (valueMissing ,typeMismatch, patternMismatch, customError )]*/
        }
    })
    return mensaje;
}

//función que valida las fechas de nacimiento ingresadas
function validarNacimiento(input){ //recibe como parámetro el objeto input
    const fechaUsuario = new Date(input.value); /*instanciamos un objeto de la clase Date() pasamos como parámetro
    el valor del objeto input recibido por la función input.value*/
    let mensaje = "";
    if (!mayorDeEdad(fechaUsuario)) { /*inggresa al if, se llama a ejecución a la función mayorDeEdad() se pasa como parámetro
    el objeto fechaUsuario. El return que se devuelva de esta llamada será true o false. Lo cual se negará !.
    Esto determina si se ingresa dentro del condicional*/
        mensaje = "Debes tener al menos 18 años de edad"; //message customized. Si ingresa al if se asigna el mensaje customizado a let mensaje
    }
    input.setCustomValidity(mensaje);  //seteamos el mensaje customizado (message customized) sobre input para que sea exibhido en html
}

//función para determinar si es mayor de edad
function mayorDeEdad(fecha){ //recibe como parámetro la fecha generada en la función validarNacimiento(). const fechaUsuario
    const fechaActual = new Date(); //instanciamos un objeto de la clase Date() Llamado fechaActual. Esto genera la fecha actual
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate()); /* instanciamos
    un nuevo objeto de la clase Date() llamado diferenciaFechas. Pasamos como parámetro la fecha recibida y modificamos el valor del año de esta fecha.
    Para esto utilizamos el método getUTCFullYear() y le sumamos + 18. getUTCMonth() y getUTCDate () es decir el mes y el día,
    no sufren modificaciones. Esta nueva fecha ya formateada se asignara a diferenciaFechas.
    */
    console.log(typeof diferenciaFechas);
    return diferenciaFechas <= fechaActual; /*retornamos el booleano obtenido de esta condición. Si la diferenciaFechas es menor o igual,
    a la fechaActual  significa que es mayor de edad y se retorna true, de lo contrario se retorna false*/
}
