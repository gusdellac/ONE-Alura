
package cuenta;

public class PruebaAcceso {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta(555,5164);
        cuenta.depositar(400);
        cuenta.retirar(300);
        System.out.println(cuenta.getSaldo());
        System.out.println(cuenta.getAgencia());
        
    }
}
