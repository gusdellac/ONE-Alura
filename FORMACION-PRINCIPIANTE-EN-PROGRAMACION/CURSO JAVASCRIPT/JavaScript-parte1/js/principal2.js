var paciente = document.querySelector("#primer-paciente"); //seleccionamos el objeto utilizando el id y lo guardamos en variable paciente

var tdPeso = paciente.querySelector(".info-peso"); /*seleccionamos otro objeto dentro del objeto anterior, utilizando 
la varible paciente y el método (paciente.querySelector(clase que queremos extraer)). Lo guardamos en variable tdPeso*/

var peso = tdPeso.textContent; //extraemos solo el contenido textual del objeto utilizando la variable tdPeso.textContent (.propiedad)

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

pesoEsValido = true; //bandera peso
alturaEsValida = true; //bandera altura

//condicional peso
if((peso < 0) || (peso >1000)){ //operador OR
    console.log("Peso incorrecto");
    tdImc.textContent = "Peso incorrecto";
    pesoEsValido = false;
}

//condicional altura
if((altura < 0) || (altura > 3.00)){ //operador OR
    console.log("Altura incorrecta");
    tdImc.textContent = "Altura incorrecta";
    alturaEsValida = false;
}


if(pesoEsValido && alturaEsValida){ //operador AND
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}

/*
if((peso > 0 && peso < 1000) && (altura > 0 && altura < 3.00)){
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura); //calculo imc
    tdImc.textContent = imc; //actualizamos el contenido del objeto en la posición especificada utilizando la clase ".info-imc"
}else{
    alert("El peso ingresado es incorrecto");
}
*/

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);
console.log(imc);
 