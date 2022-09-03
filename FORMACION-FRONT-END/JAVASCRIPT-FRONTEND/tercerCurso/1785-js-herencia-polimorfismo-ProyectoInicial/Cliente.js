export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){ /* polimorfismo(***) */
        return clave == this.#clave;//return true or false
        /*return true/false (podríamos decir que para esta clase Cliente la autenticación retorne siempre
        true o false)*/
    }
}

/*(***) El método autenticable(){} es aplicado en este código como polimorfismo.
Podemos utilizar este mismo método en diferentes clases que no tienen comunicación entre sí, y además
dicha implementación puede ejecutar acciones distintas */
