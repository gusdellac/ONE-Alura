
package bytebankherencia;

//import java.util.Scanner;

public class TestSistemaInterno {
    public static void main(String[] args) {
       
//        Scanner input = new Scanner(System.in);
        
        SistemaInterno sistema = new SistemaInterno();
        Gerente gerente1 = new Gerente();
//        System.out.println("Digite una nueva contraseña: ");
//        claveSeteada = input.nextLine();
        gerente1.setClave("gustavo");
        String clave1 = "gustavo";
        //System.out.println("Digite su contraseña: ");
        //clave = input.nextLine();
        Administrador admin = new Administrador();
        admin.setClave("admin1235");
        String clave2 = "admin1234";
        
        
        Cliente gustavo = new Cliente();
        gustavo.setClave("gusta2014");
        String clave3 = "gusta2014";
        
        sistema.autenticar(gerente1, clave1);
        sistema.autenticar(admin, clave2);
        sistema.autenticar(gustavo, clave3);
        
       
    }
}
