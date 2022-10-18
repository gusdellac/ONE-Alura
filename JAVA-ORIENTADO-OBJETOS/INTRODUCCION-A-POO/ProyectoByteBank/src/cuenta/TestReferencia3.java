
package cuenta;

public class TestReferencia3 {
    public static void main(String[] args) {
        Cuenta cuentaDeDiego = new Cuenta(545,6131);
        Cliente cliente = new Cliente();
        cuentaDeDiego.titular = cliente;
        System.out.println(cuentaDeDiego.titular.getNombre());
        
    }
}
