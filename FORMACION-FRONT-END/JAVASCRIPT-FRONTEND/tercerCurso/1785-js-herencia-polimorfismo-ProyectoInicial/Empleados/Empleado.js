export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave;
    constructor(nombre,dni,salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){ /* polimorfismo (***)*/
        return clave == this.#clave;//return true or false
    }

    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100
    }
}

/*(***) El método autenticable(){} es aplicado en este código como polimorfismo.
Podemos utilizar este mismo método en diferentes clases que no tienen comunicación entre sí, y además
dicha implementación puede ejecutar acciones distintas */