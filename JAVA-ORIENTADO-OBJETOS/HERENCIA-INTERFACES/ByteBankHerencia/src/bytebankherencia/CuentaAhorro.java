
package bytebankherencia;

public class CuentaAhorro extends Cuenta{
    
    public CuentaAhorro(int agencia, int numero) {
        super(agencia, numero);
    }

    @Override
    public void depositar(double saldo) {
        this.saldo += saldo;
    }
    
}
