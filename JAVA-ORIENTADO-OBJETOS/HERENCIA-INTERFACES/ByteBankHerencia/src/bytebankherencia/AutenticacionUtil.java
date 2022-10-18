
package bytebankherencia;

/*
Esta clase gestionará el atributo clave, con los métodos para setear la clave
y iniciar sesion. Si las otras clases quieren hacer uso de ésta, deben 
instanciar un objeto en su constructor. Esto sirve para crear un bloque el cual
realice una operación en común para las otras clases, y las clases que 
necesiten realizar está operación hagan uso de estos métodos sin la necesidad
de implementar la funcionalidad dentro de sus métodos. Esto nos ayuda
 a evitar repetir código múltiples veces.
*/
public class AutenticacionUtil {
    private String clave;
    
    public boolean iniciarSesion(String clave){
        return this.clave == clave;
    }
    
    public void setClave(String clave) {
        this.clave = clave;
    }
    
    public String getClave() {
        return this.clave;
    }
}
