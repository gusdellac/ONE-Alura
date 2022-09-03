
/*
Asociación de eventos

var titulo = document.querySelector(".titulo"); // selección del objeto referenciado por la clase .titulo . Se guarda en var titulo

titulo.addEventListener("click",mostrarMensaje); // utilizamos el método .addEventListener(parámetros) con var titulo para que JS capture un evento determinado (sobre un objeto)
//por el primer parámetro dado, que en este caso es el click, y ejecute una acción, que en este caso está determinada por el segundo parámetro y es la llamada a una función.

function mostrarMensaje(){
    console.log("Usted hizo click en el título");
}

*/


var pacientes = document.querySelectorAll(".paciente"); 
/*
con querySelectorAll() capturamos todos los objetos que esten identificados con la misma clase. Cada uno
de los objetos se ubicarán en posiciones contiguas de memoria, es decir que la variable pacientes será un array o lista. Cada objeto ocupará una posición específica
dentro de este array.
*/

console.log(pacientes);



for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEsValido = true; 
    alturaEsValida = true; 

    if((peso < 0) || (peso >1000)){  /*Notar que el tipo dato de variable peso es string, JS convierte este string en int para poder realizar la comparación con el otro
        int (peso < 0) y así evitar el error que se generaría*/
        console.log("Peso incorrecto");
        tdImc.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto"); /*mediante la propiedad .classList más el método .add("clase") podemos adicionar este objeto a una clase determinada
        que esté siendo afectada en un archivo CSS*/

        //paciente.style.backgroundColor = "red"; De esta manera podemos modificar el style desde JS, pero no es lo recomendable ya que para los estilos utilizamos CSS.
    }

    
    if((altura < 0) || (altura > 3.00)){ 
        console.log("Altura incorrecta");
        tdImc.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");

        //paciente.style.backgroundColor = "red";
    }


    if(pesoEsValido && alturaEsValida){ 
        tdImc.textContent = calcularIMC(peso,altura); //Llamamos a funcion calcularImc()
    }

    
}

//Función para calculo de IMC. 
//Aplicando modularidad: Esta función pueden ser utilizada por otros archivos js como el form.js , solo invocando su nombre y dandole los parámetros.
function calcularIMC(peso,altura){
    var imc = peso / (altura*altura);
    return imc.toFixed(2); // .toFixed() método que nos permite indicarle a una variable cuantos decimales queremos que tenga 
    //Tambien podriamos haber usado Math.round(imc) para redondear los valores a un número entero
}



