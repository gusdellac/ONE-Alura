const checkComplete = () => { /*función que creará una etiqueta i */
    const i = document.createElement('i'); /*creamos una etiqueta i y la guardamos en const i */
    i.classList.add('far','fa-check-square','icon'); /*agregamos clases a la etiqueta creada */
    i.addEventListener('click',completeTask);
    return i; /*retornamos el elemento */
}
    
/*función que cambiará el style del check al presionarlo */
const completeTask = (e) => { /*pasamos el evento como parámetro */
    const element = e.target; /*guardamos el elemento que nos devuelve la propiedad target del evento al presionarlo en const element */
    element.classList.toggle('fas'); /*reemplazamos los métodos .add() y .remove() por .toggle() 
    .toggle() nos permite agregar una clase si esta no existe en el elemento y si la clase ya existe la quita. Es decir,
    aplica add y remove dinámicamente*/
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

export default checkComplete; //exportamos el archivo para que pueda ser importado por el main