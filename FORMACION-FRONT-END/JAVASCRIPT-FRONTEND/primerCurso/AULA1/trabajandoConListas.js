//Listas o arrays
const Bogota = "Bogotá";
const Lima = "Lima";
const Santiago = "Santiago";
const BuenosAires = "Buenos Aires";

//Declaración de un array 
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Buenos Aires");
console.log(typeof(ciudadesDisponibles));
console.log(ciudadesDisponibles);

//Inferencia de array
const ciudadesDisponibles2 = ["Bogotá","Lima","Santiago","Buenos Aires"];
console.log(ciudadesDisponibles2);

//Agregando elementos a un array
//const ciudadesDisponibles3 = [];
const ciudadesDisponibles3 = new Array();
ciudadesDisponibles3.push("Bogotá");
ciudadesDisponibles3.push("Lima");
ciudadesDisponibles3.push("Caracas");
ciudadesDisponibles3.push("Montevideo");
console.log(ciudadesDisponibles3);

//Funciones aplicables a arrays

//Acceder a elementos del array
console.log(ciudadesDisponibles3[3]);

//Longitud del array - método length
const cantidadDeCiudades = ciudadesDisponibles3.length;
console.log(`Tenemos ${cantidadDeCiudades} ciudades disponibles`);

//Eliminar elementos - método splice
ciudadesDisponibles3.splice(2,1); /*primer parámetro:indice del elemento
segundo parámtero: cantidad de elementos a eliminar. Si no se indica un número de elementos en el segundo parámetro
se eliminara todos los elementos desde a partir del índice seleccionado*/
console.log(ciudadesDisponibles3);

 