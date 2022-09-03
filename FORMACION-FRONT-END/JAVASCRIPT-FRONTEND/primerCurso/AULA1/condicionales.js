const ciudadesDisponibles = new Array();
ciudadesDisponibles.push("Bogotá");
ciudadesDisponibles.push("Caracas");
ciudadesDisponibles.push("Lima");
console.log(ciudadesDisponibles);

const edadComprador = 25;

if (edadComprador >= 18) {
    console.log("El comprador es mayor de edad");
    console.log("Ciudades disponibles para viaje:");
    console.log(ciudadesDisponibles);
}else{
    console.log("El comprador no es mayor de edad");
    console.log("No es posible ofrecer viajes");
}

//operadores de comparación

console.log(edadComprador >= 18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador < 18);
console.log(edadComprador == 18);
console.log(edadComprador != 18);

/*operadores lógicos
|| (or)     && (and)    !(not)*/
