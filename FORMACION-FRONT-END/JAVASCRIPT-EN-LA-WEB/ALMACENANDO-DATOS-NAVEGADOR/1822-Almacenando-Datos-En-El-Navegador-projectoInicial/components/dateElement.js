// Código utilizando export dafault (exportar por defecto). Exportamos el objeto dateElement

export default (date) => {
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    return dateElement;
}


// Código asignando una función anónima a const dateElement
// export const dateElement = (date) => { //exportamos la función dateElement
//     const dateelement = document.createElement('li');
//     dateelement.classList.add('date');
//     dateelement.innerHTML = date;
//     return dateelement;
// }

//comentar multiples líneas : ctrl+k  +  ctrl+c