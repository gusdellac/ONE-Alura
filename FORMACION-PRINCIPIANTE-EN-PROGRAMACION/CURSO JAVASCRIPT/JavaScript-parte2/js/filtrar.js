var campoFiltro = document.querySelector("#filtrar-tabla"); /*traemos a js nuestro objeto input , referenciadolo a traves de su ID.
Guardamos el objeto en var campoFiltro*/

campoFiltro.addEventListener("input",function(){ //Asignamos un escuchador de eventos .addEventListener(tipo input, función anónima).
    console.log(this.value); //podemos ver por consola cada caracter ingresado en el input
    
    var pacientes = document.querySelectorAll(".paciente"); //traemos a js los objetos tr referenciados con la clase paciente y lo guardamos en var pacientes

    if(this.value.length > 0){ //este condicional indica si se ingreso algun caracter en el campo de texto
        for(var i = 0; i < pacientes.length; i++){ //iteramos cada objeto tr 
            var paciente = pacientes[i]; //por cada iteración iremos guardando los objetos tr en var paciente
            var tdNombre = paciente.querySelector(".info-nombre");//hacemos un querySelector() para extraer de var paciente un dato que necesitamos de cada tr
            //es decir , que extraemos un td específico que referenciamos con la clase .info-nombre
            var nombre = tdNombre.textContent; //extraemos el contenido textual de este td y lo guardamos en var nombre
            console.log(nombre); //se exhibe en consola cada nombre guardado en la variable nombre por cada iteración

            /*Asignamos a var expresion un nuevo objeto de Regular Expresions-Regex (objeto de js que nos permite filtrar expresiones similares independientemente
            de la diferencia de caracteres, por ej una letra igual pero escrita en mayúscula o minúscula. Leer más sobre este objeto*/
            var expresion = new RegExp(this.value,"i"); /*sintaxis para crear el objeto: new RegExp(parametro1:el valor que queremos comparar,
            parametro2:propiedad del objeto que realiza una determinada acción según lo que se indique en este parámetro)*/

            if(!expresion.test(nombre)){ //si la expresión ingresada coincide con la almacenada en var nombre se niega y no ingresa al if, por lo tanto pasa al else.
                paciente.classList.add("invisible"); //si no coincide ingresa al if y adiciona al paciente a la clase que lo hace invisible
            }else{
                paciente.classList.remove("invisible"); //si coincide ingresa al else y remueve al paciente de la clase y lo hace visible.
            }
        }
    }else{ //si no hay ningun caracter en el campo de texto se hacen visibles todos los pacientes

        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }    
    }

    
});

//control + h se abre recuadro para buscar expresiones regulares

/*En el último vídeo de este capítulo, vimos cómo crear una regex, 
utilizando new RegExp(..). ¿Cuáles son los parámetros que podemos pasar para el constructor?

El primer parámetro es el padrón (el texto de la expresión regular, el que debe ser buscado), 
y el segundo parámetro son una o más flags (representando la forma como queremos que la expresión regular haga su búsqueda).


Correcto. El primer parámetro es el padrón y el segundo una o más flags, por ejemplo, podemos pasar 
la flag "i" para definir que no haya distinción entre minúsculas y mayúsculas.*/

/*Otra forma de realizar la comparación de caracteres. Forma tradicional

En este capítulo, representado por el fragmento de código de abajo, aprendimos cómo filtrar, 
comparando letra por letra, utilizando expresiones regulares:

var expresion = new RegExp(this.value,"i");
if(!expresion.test(nombre)){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} COPIA EL CÓDIGO
Sin embargo, existe también un modo de realizar esa comparación sin la necesidad de expresiones regulares. 
Podemos utilizar la función substring, que recibe dos parámetros, haciendo que devuelva para la string, con el tamaño definido en los parámetros. 
El primer parámetro es el inicio, comenzando de 0 (que representa el primer carácter). El segundo parámetro define el fin (exclusivo, 
mostramos entonces hasta el penúltimo carácter). Por ejemplo:

var string = "Alura";
var resultado = string.substring(1,4);COPIA EL CÓDIGO
Extrajimos una string que comienza en el segundo carácter (número 1) y termina en el cuarto carácter (número 3, índice anterior al número 4). El valor de la variable resultado sería:

lurCOPIA EL CÓDIGO
Conociendo esa función, piensa en un modo de comparar el valor digitado con parte del nombre de los pacientes, sin utilizar expresiones regulares. Después, compara tu respuesta con la del instructor.

VER OPINIÓN DEL INSTRUCTOR
Opinión del instructor

Como el primer parámetro es el inicio, y queremos comparar desde el inicio de la string nombre, vamos a utilizar como inicio el valor 0, o sea, siempre a partir del primer carácter. ¿Pero cuál sería el fin? El fin es justamente el tamaño del valor digitado:

nombre.substring(0, this.value.length);COPIA EL CÓDIGO
Podemos guardar esa string en una variable y compararla con lo que está siendo digitado. En caso de ser falso, adicionamos la clase invisible, caso contrario, la removemos.

var comparar = nombre.substring(0, this.value.length);
if(!(this.value == comparar)){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} COPIA EL CÓDIGO
¿Pero qué pasa con la distinción en letras minúsculas y mayúsculas? En este caso, va a haber diferenciación entre minúsculas y mayúsculas. Para resolver eso, antes de realizar la comparación, podemos colocar las dos strings en minúsculas usando toLowerCase(), para recién efectuar la comparación.

var comparar = nombre.substring(0, this.value.length);
var compararMinuscula = comparar.toLowerCase();
var valorDigitadoMinuscula = this.value.toLowerCase();
if(!(valorDigitadoMinuscula  == compararMinuscula )){
paciente.classList.add("invisible");
} else {
paciente.classList.remove("invisible");
} COPIA EL CÓDIGO
Esta es una alternativa de implementar la misma funcionalidad sin expresión regular, sin embargo, requiere de más código y preocuparnos por otros detalles. Pero es otra opción para añadir en nuestros conocimientos de JavaScript. */