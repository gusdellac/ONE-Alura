
package cuenta;

public class PruebaMetodos {
    public static void main(String[] args) {
        //-------------Cuenta de Diego----------------
        System.out.println("Cuenta de Diego: ");
        Cuenta cuentaDeDiego = new Cuenta(548,9431);
        cuentaDeDiego.depositar(300);
        System.out.println("Saldo después de depósito: "+cuentaDeDiego.getSaldo());
        cuentaDeDiego.depositar(200);
        System.out.println("Saldo después de depósito: "+cuentaDeDiego.getSaldo());
        cuentaDeDiego.retirar(200);
        System.out.println("Saldo después de retiro: "+cuentaDeDiego.getSaldo());
        
        //-------------Cuenta de Gustavo---------------
        System.out.println("Cuenta de Gustavo: ");
        Cuenta cuentaDeGustavo = new Cuenta(548,68462);
        cuentaDeGustavo.depositar(400);
        System.out.println("Saldo después de depósito: "+cuentaDeGustavo.getSaldo());
        cuentaDeGustavo.depositar(300);
        System.out.println("Saldo después de depósito: "+cuentaDeGustavo.getSaldo());
        boolean puedeTransferir = cuentaDeGustavo.transferir(400, 
                                                            cuentaDeDiego);
        if(puedeTransferir){
            System.out.println("Transferencia exitosa");
        }else{
            System.out.println("Transferencia rechazada");
        }
        /*
        El primer parámetro es el monto a transferir, el segundo es el objeto
        cuentaDeDiego. Del objeto se envía la referencia del mismo. 
        */
        System.out.println("Saldo después de transferencia "
                + "enviada: "+cuentaDeGustavo.getSaldo());
        
        System.out.println("Saldo cuenta de Diego después de "
                + "recibir la transferencia: "+cuentaDeDiego.getSaldo());
    }
}
