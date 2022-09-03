/*Document es un objeto DOM (Document Object Model), que es la representación de nuestra página 
HTML para el navegador, que es utilizada por JavaScript para manipular la página.*/
/*Con document seleccionamos todo el código html.
Utilizamos el método o función .querySelector() para traer un objeto desde html a js, sobre el cual
podremos extraer sus datos y también modificarlos*/ 

var titulo = document.querySelector(".titulo");//este objeto lo asignamos a la variable titulo. Es una buena practica utilizar el querySelector() con clases y no
//con las etiquetas
console.log(titulo); //imprimimos variable título (nos imprimira por consola todo el objeto <h1></h1>)
console.log(titulo.textContent); //titulo.textContent, esta propiedad nos permite extraer solo el contenido textual del objeto
titulo.textContent = "Buena Vida Nutrición"; //utilizando la variable con la propiedad textContent podemos reasignarle un dato, en este caso un string. Aplicará
//solo al contenido del objeto (<h1>"contenido"</h1>)