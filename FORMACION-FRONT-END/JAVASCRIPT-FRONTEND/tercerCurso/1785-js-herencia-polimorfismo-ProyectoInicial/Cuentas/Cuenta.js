/*Clase abstracta (clase base) */

export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia,saldo){
        if (this.constructor == Cuenta){ /*Si la instancia de la clase hace uso del constructor de la clase Cuenta
            devuelve true y se ejecuta la palabra reservada throw */
            throw new Error('No se debe instanciar objetos de la clase Cuenta');
            /*Sintaxis para generar un error en en la ejecución y detener el programa. En consola
            se mostrará el string indicado entre los paréntesis */
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){ /*Método abstracto */
        /*no puede ser utilizado el método directamente desde esta clase. Debe sobreescribirse en cada clase
        que haga uso de este método. Sirve como esqueleto de los métodos que deben utilizar las clases hijas */
        throw new Error('Debe implementar el método retiraDeCuenta en su clase');
    }
    
    _retirarDeCuenta(valor, comision) { //método privado (ver)
        valor = valor * (1+comision/100);//indica el valor a retirar más el % de comisión de acuerdo al tipo de cuenta
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

    prueba2(){
        console.log('Método padre');
    }
}

/*Clase abstracta es una clase que no debe ser instanciada */