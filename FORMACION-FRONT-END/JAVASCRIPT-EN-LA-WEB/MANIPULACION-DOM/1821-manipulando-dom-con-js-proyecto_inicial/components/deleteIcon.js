const deleteIcon = () => { /*función para crear el icono de delete */
    const i = document.createElement('i'); //creamos etiqueta i
    i.classList.add('fas','fa-trash-alt','trashIcon','icon'); //agregamos las clases al i
    i.addEventListener('click',deleteTask); //escuchador de eventos
    return i; //retornamos el elemento
}

const deleteTask = (e) => {
    const parent = e.target.parentElement; //seleccionamos la etiqueta padre del elemento creado anteriormente
    parent.remove(); //removemos todo el elemento padre
}

export default deleteIcon; //exportamos el archivo para que pueda ser importado por el main