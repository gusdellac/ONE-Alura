export const uniqueDates = (tasks) => { //función uniqueDates recibe como parámetro tasks
    const unique = [] //inicializamos unique como un array vacío
    tasks.forEach((task) => { //iteramos el objeto tasks con forEach
        
        if(!unique.includes(task.dateFormat)){ //condicional para determinar si la fecha no está incluida en el objeto. Método includes()
            unique.push(task.dateFormat); //si se cumple el condicional ingresamos el dato dentro del array unique
        }
    });

    return unique; //retornamos el array
    
};

export const orderDates = (dates) => { //exportamos la función orderDates(). Recibe como parámetro dates
    return dates.sort((a,b) => { //retornamos dates aplicando el método sort() para ordenar el array
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate; // retornamos las fechas en orden ascendente
    });
};