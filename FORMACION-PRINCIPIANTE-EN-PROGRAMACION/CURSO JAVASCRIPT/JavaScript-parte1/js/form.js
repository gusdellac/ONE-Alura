var botonAdicionar = document.querySelector("#adicionar-paciente"); /*asociamos nuestro boton de html (boton adicionar) a JS utilizando el querySelector("id del objeto html")*/
botonAdicionar.addEventListener("click",function(event){ /*utilizamos el método para capturar eventos de JS .addEventListener() con nuestra var donde guardamos el objeto html (botonAdicioanr)
primer parámetro : evento click; segundo párametro: función anónima (estas funciones no llevan un nombre que las identifique y se ejecutan solo en bloque de código en donde se las declara)*/ 
    event.preventDefault();/*a nuestra función anónima le damos el parámetro event. Luego a este parámetro evento le aplicamos el método preventDefault() que se traduce como: 
    prevenir por defecto, es decir, restringe la configuración por defecto o padrón del compilador y así evitar que en este caso, al hacer click en el botón el explorador se vuelva a recargar
    y elimine los datos ingresados en el formulario*/ 
    
    //obtenemos valores desde html

    var form = document.querySelector("#form-adicionar"); /* guardamos todo nuestro objeto form en var form */
    var nombre = form.nombre.value; /*extraemos el valor ingresado en el input que aplica para nombre usando la propiedad .value(tercer lugar), 
    precedida por la var form (primer lugar)y el .nombre o id que referencia a la etiqueta input (segundo lugar)*/
    var peso = form.peso.value; //extraemos el valor del peso
    var altura = form.altura.value; //extraemos el valor de la altura
    var gordura = form.gordura.value; //extraemos el valor de la gordura

    console.log(nombre,"\n"+peso,"\n"+altura,"\n"+gordura); //exhibimos los valores capturados en consola  con saltos de linea


    var tabla = document.querySelector("#tabla-pacientes"); //guardamos el objeto tbody en var tabla llamando al id #tabla-pacientes

    //Creamos objetos de html en JS
    var pacienteTr = document.createElement("tr"); //creamos una etiqueta <tr>
    var nombreTd = document.createElement("td"); //creamos una etiqueta <td> hija del <tr>
    var alturaTd = document.createElement("td"); // <td>
    var pesoTd = document.createElement("td"); // <td>
    var gorduraTd = document.createElement("td"); //<td>
    var imcTd = document.createElement("td"); //<td>

    nombreTd.textContent = nombre; //le asignamos al contenido textual del objeto html el valor almacenado en la var nombre
    alturaTd.textContent = altura; 
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura); //llamamos a función calcularIMC(). Notar que esta función se encuentra en otro archivo (calcular-imc.js)

    //Le indicamos al objeto <tr> que adopte o incluya a la etiqueta <td>. Usamos el método .appendChild(nombre objeto creado)
    pacienteTr.appendChild(nombreTd); 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //Le indicamos al objeto <tbody> que incluya a la etiqueta <tr>. Obtendriamos como resultado la siguiente sucesión de etiquetas: <tbody> , <tr> , <td> x5 
    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);
});