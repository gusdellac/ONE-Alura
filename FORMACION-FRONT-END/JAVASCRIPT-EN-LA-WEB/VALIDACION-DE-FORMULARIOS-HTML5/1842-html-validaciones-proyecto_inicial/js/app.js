import { valida } from "./validaciones.js"; //importamos función valida()

const inputs = document.querySelectorAll("input"); //seleccionamos todos los elementos input de nuestro html y 
//los guardamos en const inputs

inputs.forEach( input => { /*iteramos objeto inputs con forEach().
utilizamos arrow function para la iteración, input recibe cada objeto de inputs
*/ 
    input.addEventListener("blur", (input) =>{ /*addEventListener() por cada input. 1er par: "blur" (el evento blur)
    es disparado cuando el elemento ha perdido su foco. Es decir, que el puntero del mouse se posiciona en otra parte.
    2do par : arrow function que recibe input     
    */  
        valida(input.target); /*llamada a función valida() , parámetro input.target. Al ejecutarse el evento, el navegador
        nos habilita a utilizar la propiedad target del evento, la cual hace referencia al objeto html en el cual se ejecuto 
        el evento. En este caso un input específico*/
        
    });
});