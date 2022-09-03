import { Cliente } from "./Cliente.js"; //importamos la clase Cliente

export class CuentaCorriente
{
    #cliente;
    numero;
    agencia;
    static cantidadCuentas = 0; /*Atributo estático. Este atributo es común para todas las instancias de esta clase. */
    #saldo; /*Utilizamos el # para indicar que el atributo es privado.
    Este solo puede ser modificado y accedido desde dentro de la clase. */
    
    /* (***a) */
    set cliente(valor){ /*set (asignar /atribuir). Se utiliza esta palabra
        reservada para poder asignar un valor a un atributo privado */
        if (valor instanceof Cliente){ /*Condicional que nos proteje la clase ante valores
        no deseados. Palabra reservada instanceof (istancia de). Significa si el valor a asignar
        es una instancia de determinada "clase" se asigna el valor de lo contrario no. */
            this.#cliente = valor;
        } //asignamos el valor recibido al atributo privado #cliente
    }

    get cliente() { /*get (obtener).Se utiliza esta palabra
    reservada para poder obtener el valor de un atributo privado y asi poder utilizarlo
    fuera de la clase */
        return this.#cliente; //retornamos el valor del atributo privado #cliente
    }
    
    constructor(cliente,numero,agencia) { /*Es la función que se ejecuta al instanciar un objeto de una determinada clase. 
    Esta funcion nos permite definir valores por defecto para los atributos*/
        this.cliente = cliente;
        /*this.#cliente = null; /*el tipo de dato va a ser un objeto , pero no obtenemos este objeto
        hasta que sea instanciado y asignado a la propiedad cliente del objeto cuenta corriente (***b) */
        this.numero = numero; 
        this.agencia = agencia;
        this.#saldo = 0; 
        CuentaCorriente.cantidadCuentas++; /*Cada vez que instanciemos una clase se incrementará el valor
        del atributo cantidadCuentas en 1. Notar que fue inicializado en 0 al momento de crear la clase. */
        
    }
    depositoEnCuenta(valor){ //método de la clase 
        if (valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo){
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo; /*retornamos el valor del saldo para que pueda ser accedido
        desde fuera de la clase*/
    }

    transferirParaCuenta(valor,cuentaDestino){ /*recibe un parámetro por valor (valor) y
        un parámetro por referencia (cuentaDestino). El parámetro por referencia recibe un objeto.
        Se pueden agregar o quitar atributos de este objeto pero no es recomendado o debe realizarse
        con cuidado*/
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}


/* 
(***a) Cuando se recibe un parámetro por referencia, como en el caso de estructuras de datos como arrays(listas) o objetos, para poder gestionar
los atributos privados debemos utilizar las palabras reservadas set y get. Esto no ocurre con los parámetros por valor, como lo son los datos primitivos.
Estos pueden gestionarse con métodos o funciones tal como se muestra en el código.

(***b) Cuando definimos un atributo de una clase que no tenemos el valor es mejor inicializarlo
con el tipo de dato null para que podamos tratarlo con este dato y no con el tipo de dato
undefined */