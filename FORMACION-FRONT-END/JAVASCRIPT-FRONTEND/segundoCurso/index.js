/*Importación de clases */
import { Cliente } from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';


/*Composición de clases (relacionamos clases)*/
const cliente = new Cliente("Leonardo","13804050","123224"); /*Instanciamos un objeto derivado de la clase Cliente asignandolo
a la const cliente.
Al momento de instanciar el la clase Cliente pasamos como parámetros los valores que  tendrán los atributos.
Podemos realizar esto porque tenemos definido el constructor con sus parámetros en la clase */

const cliente2 = new Cliente("María","16979808","8989"); /*Instanciamos un objeto de la clase Cliente asignandolo
a la const cliente */

//cliente2.nombreCliente = "María"; //atributo
//cliente2.dniCliente = "16979808"; //atributo
//cliente2.rutCliente = "8989";

const cuentaDeLeonardo = new CuentaCorriente(cliente,"1","001");
//cuentaDeLeonardo.numero = "1";
//cuentaDeLeonardo.agencia = "001";
/*cuentaDeLeonardo.cliente = cliente; /*asignamos al atributo .cliente el objeto instanciado de la clase
Cliente(). Este atributo por ser privado y recibido por referencia será gestionado por un set y un get. Notar
que el .cliente hace referencia la nombre del set y del get*/
console.log(cuentaDeLeonardo.cliente);
//cuentaDeLeonardo.saldo = 20;
let saldoLeonardo = cuentaDeLeonardo.verSaldo();

saldoLeonardo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El Saldo actual (CuentaLeonardo) es: ${saldoLeonardo}`);



const cuentaDeMaria = new CuentaCorriente(cliente2,"2","002");
//cuentaDeMaria.numero = "2";
//cuentaDeMaria.agencia = "002";
//cuentaDeMaria.cliente = cliente2;
console.log(cuentaDeMaria.cliente);

/*Ejemplo para corroborar utilidad del instanceof */
cuentaDeMaria.cliente = 0; /*intentamos reasignarle un valor al cliente, lo cual no es permitido */
console.log(cuentaDeMaria.cliente);

//Transferencia 


cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria); /*.transferirParaCuenta (párametro por valor, parámetro por referencia) */

let saldoMaría = cuentaDeMaria.verSaldo();
console.log(`El Saldo actual (CuentaMaria) es: ${saldoMaría}`);

saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log(`El Saldo actual (CuentaLeonardo) es: ${saldoLeonardo}`);






/* ***
this nos permite referenciar al objeto desde el cúal estamos llamando
al método.Es decir, en este caso la propiedad saldo va a incrementarse de acuerdo al parámetro valor solo
para la cuenta corriente desde la cuál se instanció la clase. Si no usaramos la palabra reserva this
deberíamos realizar algo como lo siguiente: cuentaCorriente1.saldo = cuentaCorriente1.saldo + 1000. Vemos como deberiamos
indicar el objeto desde el cúal se está llamando al método.*/

/*
const cliente1 = new Cliente(); //instanciación de la clase (objeto derivado de la clase)
cliente1.nombreCliente = "Gustavo De Llac"; //asignamos un valor para cada propiedad de la clase
cliente1.dniCliente = "38208173";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "1234";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia = "Atom Travels";
console.log(cliente1,cuentaCorriente1);
cuentaCorriente1.depositoEnCuenta(1000);
console.log(cliente1,cuentaCorriente1);
*/


/*
//Ejemplo del artículo
class Animal {
    constructor(especie, tamano, habitat) {
        this.especie = especie;
        this.tamano = tamano;
        this.habitat = habitat;
    }
    alimentacion(alimentacion) {
        
        console.log(`Este animal come ${alimentacion}.`);
    }
    movimiento(movimiento) {
        
        console.log(`Este animal ${movimiento}.`);
    }
}

const perro = new Animal();
perro.especie = "mamífero";
perro.tamano = "mediano";
perro.habitat = "terrestre";
console.log(perro);
var alimentacionDelAnimal = "carne";
var movimientoDelAnimal = "camina";
perro.alimentacion(alimentacionDelAnimal);
perro.movimiento(movimientoDelAnimal);

const tiburon = new Animal();
tiburon.especie = "pez";
tiburon.tamano = "grande";
tiburon.habitat = "acuático";
console.log(tiburon);
var alimentacionDelAnimal = "carne";
var movimientoDelAnimal = "nada";
tiburon.alimentacion(alimentacionDelAnimal);
tiburon.movimiento(movimientoDelAnimal);
*/






