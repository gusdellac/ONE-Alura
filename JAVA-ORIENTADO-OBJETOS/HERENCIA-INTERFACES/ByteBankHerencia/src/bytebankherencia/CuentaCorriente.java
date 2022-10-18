
package bytebankherencia;

public class CuentaCorriente extends Cuenta {
    
    //Las clases hijas heredan atributos y métodos, no los constructores.
    
    //constructor clase CuentaCorriente
    //debe llevar dos parámetros de tipo int para agencia y numero, al igual
    //que la clase padre. Ya que de lo contrario genera error de compilación
    
    public CuentaCorriente(int agencia, int numero){
        //con super accedemos a los métodos o atributos de la clase padre
        //super() llama al constructor
        super(agencia, numero); /*
        el constructor de la clase padre Cuenta exige dos parámetros de tipo
        int para agencia y numero
        */
    }
    
    //sobreescribimos el método transferir para agregar nuestra regla de 
    //negocio de una comisión al realizar transferencias
    @Override
    public boolean transferir(double saldo, Cuenta cuenta){
        
        double comision = saldo*0.05;
      
        if(this.getSaldo() >= saldo){
            this.saldo = this.saldo - saldo - comision;
            cuenta.depositar(saldo);
            return true; 
        }
        return false;
    }

    @Override
    public void depositar(double saldo) {
        this.saldo += saldo;
    }
}
