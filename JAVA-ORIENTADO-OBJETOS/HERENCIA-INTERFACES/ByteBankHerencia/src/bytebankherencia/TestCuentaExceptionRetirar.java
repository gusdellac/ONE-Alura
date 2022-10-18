
package bytebankherencia;

public class TestCuentaExceptionRetirar {
    public static void main(String[] args) {
        Cuenta cuenta = new CuentaAhorro(123, 456);
        
        cuenta.depositar(200);
        cuenta.retirar(100);
        cuenta.retirar(20);
        cuenta.retirar(50);
        cuenta.retirar(100);
    }
}
