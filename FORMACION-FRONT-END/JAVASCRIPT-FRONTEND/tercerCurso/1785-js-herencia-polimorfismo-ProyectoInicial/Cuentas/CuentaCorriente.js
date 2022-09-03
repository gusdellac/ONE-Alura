import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta /*la clase CuentaCorriente al utilizar la palabra reservada extends + Cuenta,
se hace extensible a la clase Cuenta, es decir que por herencia recibirá todas las propiedades
y métodos de la clase padre Cuenta.*/
{
    static cantidadCuentas = 0;
    
    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0); /*Utilizamos la palabra reservada super para enviar los parámetros recibidos
        al constructor de la clase padre que es Cuenta */
        CuentaCorriente.cantidadCuentas++;
    }


    /*Método de la clase CuentaCorriente que sobreescribe en parte al método de retirarDeCuenta() de la clase
    padre Cuenta. */
    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5); //se realiza la llamada al método retirarDeCuenta de la clase padre para terminar con el proceso de retirarDeCuenta()
    }

    /*Sobreescibir clases significa que podemos crear métodos específicos para una clase hija que no necesariamente 
    pertenezcan a la clase padre. También que podemos combinar métodos de la clase hija con métodos de la clase padre
    haciendo uso de la palabra reservada super dentro del método de la clase hija */
    /*prueba1(){
        super.prueba2();
        console.log("Método hijo");
    }*/
}