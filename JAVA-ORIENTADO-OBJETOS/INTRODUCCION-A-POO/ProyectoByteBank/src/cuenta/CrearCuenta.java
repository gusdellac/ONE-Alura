
package cuenta;

public class CrearCuenta {
    public static void main(String[] args) {
        // Variable        --->    123FFD
        Cuenta primeraCuenta = new Cuenta(555,8946); /*
        En java no se asigna un valor a la variable con la que instanciamos
        una clase, sino que la variable creada hace referencia a la posición de
        memoria que java genera cuando se instancia un objeto, es decir, cuando
        se utiliza la palabra new Cuenta() java crea un espacio en memoria.
        */
        primeraCuenta.depositar(1000);
        System.out.println("primeraCuenta = " + primeraCuenta.getSaldo());
        
        Cuenta segundaCuenta = new Cuenta(555,89612);
        segundaCuenta.depositar(500); 
        System.out.println("segundaCuenta: "+segundaCuenta.getSaldo());
        
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
