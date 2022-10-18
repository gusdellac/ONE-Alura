
package javapilaejecucion;

public class TestConexion {
    public static void main(String[] args) throws Exception {
        
        //try con recursos
        System.out.println("Try con recursos-------------");
        try (Conexion con = new Conexion()){ //try with resources (ver)
            con.leerDatos();
        } catch (IllegalStateException ex){
            System.out.println("Ejecutando catch");
            ex.printStackTrace();
        }
        
        
        // try sin recursos
        System.out.println("Try sin recursos-------------");
        Conexion con = null; 
        try{
            con = new Conexion();
            con.leerDatos(); 
        }catch(IllegalStateException ex){
            ex.printStackTrace();
        } finally { //finally se ejecuta independientemente de si se lanza
            //la exception o no
            System.out.println("Ejecutando finally");
            if(con != null){
                con.cerrar();
            } 
        }
        
        
    }
}
