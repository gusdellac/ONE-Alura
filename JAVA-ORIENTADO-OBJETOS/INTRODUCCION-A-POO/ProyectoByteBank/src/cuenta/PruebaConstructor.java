
package cuenta;

public class PruebaConstructor {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta(555, 565);
        Cuenta cuenta1 = new Cuenta(55, 849);
        Cuenta cuenta2 = new Cuenta(5, 946);
        
        System.out.println("Total de cuentas: "+Cuenta.getTotal());
        
    }
}
