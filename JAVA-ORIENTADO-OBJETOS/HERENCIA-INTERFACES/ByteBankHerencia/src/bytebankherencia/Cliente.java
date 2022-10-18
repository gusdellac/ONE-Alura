
package bytebankherencia;

public class Cliente implements Autenticable{
    private String nombre;
    private String documento;
    private String telefono;
    private String clave;
    
    private final AutenticacionUtil util;
    
    public Cliente(){
        //composición de objetos
        //instanciamos dentro de atributo util un objeto de la clase
        //AutenticacionUtil
        this.util = new AutenticacionUtil();
    }
    /*
    Autogenerar setters y getters: click derecho + insert code +
    generate setters y getters
    */
    
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDocumento() {
        return this.documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getTelefono() {
        return this.telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override
    public void setClave(String clave) {
        this.util.setClave(clave); 
    }
    
    @Override
    public String getClave() {
        return this.util.getClave();
    }

    @Override
    public boolean iniciarSesion(String clave) {
        return this.util.iniciarSesion(clave);
    }

    
    
    
  
}
