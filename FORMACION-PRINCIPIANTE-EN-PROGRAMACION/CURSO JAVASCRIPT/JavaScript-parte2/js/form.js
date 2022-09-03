var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click",function(event){ 
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    

    var errores = validarPaciente(paciente);

    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return; //el return funciona dentro de la función anónima similar al break dentro de un ciclo.
        //retorna un valor vacío por lo que no se ejecutará el código par adicionar el paciente a la tabla
    }
    adicionarPacienteEnLaTabla(paciente);
    form.reset(); //reseteamos el formulario para ingresar un nuevo paciente

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = ""; //cuando se corrige un dato erroneo los mensajes de error desaparecen
    
});

function adicionarPacienteEnLaTabla(paciente){ /*utilizamos una función para la creación de pacientes en la tabla de html para que pueda ser
    llamada desde otros archivos */
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes"); 
    tabla.appendChild(pacienteTr);
}

//Función para encapsular código reutilizable. Capturamos los datos del formulario.
function capturarDatosPaciente(form){
    
    //Clase paciente
    /*Sintaxis pora crear una clase - var "nombreClase" = {atributo1: valor,atributo2: valor,etc}. Cuando se utiliza la clase y le damos valores, estamos
    creando objetos derivados de esa clase*/
    var paciente = { 
        nombre : form.nombre.value,
        peso : form.peso.value, 
        altura : form.altura.value, 
        gordura : form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value) /*dentro de un atributo de la clase puede realizarse la llamada a una función*/ 
    }
    return paciente;
}

//Función para construir las etiquetas tr y td. Utilizamos una función también para encapsular código, que sea mas entendible y organizado, y que se pueda reutilizar.
function construirTr(paciente){
    
    var pacienteTr = document.createElement("tr"); 
    pacienteTr.classList.add("paciente");

    //Asignación al tr de los tds, y a la tabla el tr
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre")); 
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

//Función para construir los td. 
/*Debiamos agregar las clases que corresponden a cada td y que los objetos creados quedaran igual a los nativos, 
por lo que el código se iba a ampliar innecesariamente. Creamos una función para optimizar la creación de estos objetos*/
function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}
function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacío");
    }
    if(paciente.gordura.length == 0){
        errores.push("El porcentaje de gordura no puede estar vacío");
    }
    
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""; //ver al final información sobre la propiedad innerHTML

    //loop forEach. Por cada posición del array ejecutará la función anónima.
    //ver complemento de explicación forEach al final
    errores.forEach(function(error){ //el string guardado en cada posición del array se asignará a variable error
        var li = document.createElement("li");//creamos la etiqueta li
        li.textContent = error; //le asignamos al contenido de la etiqueta el string guardado en var error
        ul.appendChild(li); //le decimos a la etiqueta ul que adopte la li
        
    });
}

//codigo eliminado por utilizar la función 
/*
//Asignar los valores a la propiedad textContent
nombreTd.textContent = paciente.nombre; //Asignamos la clase paciente con el atributo que corresponde 
//al valor que queremos asignar. Ej: (clase)paciente.nombre(atributo)
alturaTd.textContent = paciente.altura; 
pesoTd.textContent = paciente.peso;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = paciente.imc;

var nombreTd = construirTd(paciente.nombre,"info-nombre");
var pesoTd = construirTd(paciente.peso,"info-peso"); 
var alturaTd = construirTd(paciente.altura,"info-altura");
var gorduraTd = construirTd(paciente.gordura,"info-gordura");
var imcTd = construirTd(paciente.imc,"info-imc");
*/

/*¡Correcto! En JavaScript todo array posee, la función forEach. 
Pasamos para ella una función anónima como parámetro, y en esa función hacemos lo que quisiéramos para cada ítem del array. 
El ítem del array es recibido por el parámetro en la función interna.*/ 

/*El innerHTML es una propiedad, no una función, por lo tanto, utilizamos un símbolo de igual = para atribuirle un nuevo contenido.
Cuando es utilizada para obtener el HTML interno de un elemento, su retorno es una string que representa todo el contenido HTML del propio elemento.
Con la propiedad innerHTML, podemos editar el contenido HTML (HTML interno) de un elemento. */  