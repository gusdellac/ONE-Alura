
package cuenta;

public class TestReferencia {
    public static void main(String[] args) {
        // Variable        --->    123FFD
        Cuenta primeraCuenta = new Cuenta(565,89512);
        primeraCuenta.depositar(200);
        
        /*
        Creamos un objeto de tipo Cuenta, pero no lo instanciamos, sino
        que le asignamos el objeto anteriormente instanciado.
        De esta forma los dos objetos apuntarán a la misma posición de memoria,
        por lo tanto, cualquier reasignación de los atributos que se haga sobre
        cualquiera de los dos objetos, modificará el valor para los dos objetos
        */
      
        // Variable        --->    123FFD
        Cuenta segundaCuenta = primeraCuenta;
        segundaCuenta.depositar(100);
        
        System.out.println("Saldo primera Cuenta: "+ primeraCuenta.getSaldo());
        System.out.println("Saldo segunda Cuenta: "+ segundaCuenta.getSaldo());
        
        segundaCuenta.depositar(400);
        
        System.out.println(primeraCuenta.getSaldo());
        System.out.println(segundaCuenta.getSaldo());
        
        System.out.println(primeraCuenta);
        System.out.println(segundaCuenta);
        
        //verificamos si los objetos son iguales, es decir , si los dos
        //hacen referencia a la misma posición en memoria
        if (primeraCuenta == segundaCuenta){
            System.out.println("Son el mismo objeto");
        }else{
            System.out.println("Son diferentes");
        }
    }
}
