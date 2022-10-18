
package bytebankherencia;

public class TestCuenta {
    public static void main(String[] args) {
        CuentaCorriente cc = new CuentaCorriente(1, 1);
        CuentaAhorro ca = new CuentaAhorro(2, 3);
        cc.depositar(2000);
        cc.transferir(1000, ca); //la comisión aplica a transferir
        System.out.println("Saldo cc: "+cc.getSaldo());
        System.out.println("Saldo ca: "+ca.getSaldo());
        
        cc.retirar(500); //la comisión no aplica a retirar
        System.out.println("Saldo cc: "+cc.getSaldo());
        
    }
}
