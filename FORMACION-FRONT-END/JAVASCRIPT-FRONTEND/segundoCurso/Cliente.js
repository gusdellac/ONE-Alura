export class Cliente //exportamos la clase Cliente
{
    nombreCliente; //atributos o propiedades
    dniCliente;
    rutCliente;

    constructor(nombreCliente,dniCliente,rutCliente){ /*Creamos el constructor para instanciar objetos de la clase cliente
    y le pasamos parámetros para cada atributo de la clase */
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}