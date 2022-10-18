
package cuenta;

public class PruebaEncapsulamiento {
    public static void main(String[] args) {
        Cuenta cuenta = new Cuenta(555,61316);
        Cliente cliente = new Cliente();
        cliente.setNombre("Diego");
        cliente.setDocumento("32657164");
        
        cuenta.setTitular(cliente);
        System.out.println(cliente.getNombre());
        System.out.println(cuenta.getTitular().getNombre());
        
        System.out.println(cliente);
        System.out.println(cuenta.getTitular());
    }
}
