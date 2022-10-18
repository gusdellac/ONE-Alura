
package bytebankherencia;



public class SistemaInterno {
    
    public boolean autenticar(Autenticable autenticable, String clave){
        
        boolean puedeIniciarSesion = autenticable.iniciarSesion(clave);
        if(puedeIniciarSesion){
            System.out.println("Login exitoso");
            return true;
        }else{
            System.out.println("Error en login");
            return false;
        }
    }
}
