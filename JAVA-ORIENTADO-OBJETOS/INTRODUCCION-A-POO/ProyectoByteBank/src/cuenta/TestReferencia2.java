
package cuenta;

public class TestReferencia2 {
    public static void main(String[] args) {
        //instanciamos un objeto de la clase Cliente
        Cliente diego = new Cliente();
        diego.setNombre("Diego De Llac"); 
        diego.setDocumento("36218786");
        diego.setTelefono("2604254689");
        
        //instanciamos un objeto de la clase Cuenta
        Cuenta cuentaDeDiego = new Cuenta(545,8123);
        cuentaDeDiego.titular = diego; /*indicamos que el atributo titular
        del objeto Cuenta recibirá al objeto diego. Lo que se asignará
        será la referencia de posición en memoria del objeto diego. Por lo
        tanto, si imprimimos cuentaDeDiego.titular o el objeto diego, podremos
        ver que los dos imprimen la misma referencia en memoria.
        */
        
        System.out.println(cuentaDeDiego.titular.getDocumento());
        System.out.println("Atributo titular: "+cuentaDeDiego.titular);
        System.out.println("Objeto diego: "+diego);
        System.out.println("Objeto cuentaDeDiego: "+cuentaDeDiego);
        
    }
}
