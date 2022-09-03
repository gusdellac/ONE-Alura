export class SistemaAutenticacion {
    static login(usuario,clave){ /*Método estático*/ 
        if ('autenticable' in usuario && usuario.autenticable instanceof Function) 
            /*al instanciar alguna de las clases, el objeto derivado
            se pasa como parámetro para esta función estática (login()), validamos si
            existe algun método o atributo dentro del objeto que se llame 'autenticable'
            (utilizamos el operador in para establecer la relación) y además si ese autenticable corresponde a una function o no (instanceof
            Function)*/
            return usuario.autenticable(clave);
        else
            return false;   
    }
}