import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{ /*la clase CuentaAhorro al utilizar la palabra reservada extends + Cuenta,
se hace extensible a la clase Cuenta, es decir que por herencia recibirá todas las propiedades
y métodos de la clase padre Cuenta.*/
    constructor(cliente, numero, agencia,saldo) {
        super(cliente,numero,agencia,saldo); /*Utilizamos la palabra reservada super para enviar los parámetros recibidos
        al constructor de la clase padre que es Cuenta */
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2);
    }
}