
package bytebankherencia;

public abstract class Cuenta {
   
    protected double saldo; //palabra reservada protected permite que las 
    //clases hijas puedan acceder a este atributo
    
    private int agencia; 
    private int numero;
    
    private static int total = 0;
    Cliente titular = new Cliente(); 
    
    public Cuenta(int agencia, int numero){
        System.out.println("Cuenta número: "+numero);
        total++; 
        if (agencia <= 0){
            System.out.println("No se permite ingresar cero o números "
                    + "negativos.");
            this.agencia = 1; 
        } else{
            this.agencia = agencia;
        }
        if(numero <= 0){
            System.out.println("No se permite ingresar cero o números "
                    + "negativos");
            this.numero = 1;
        }else{
            this.numero = numero;
        }
    }
    
    public abstract void depositar(double saldo);
    
    public void retirar(double saldo) {
        if(this.saldo < saldo){
            try {
                throw new SaldoInsuficienteException("Saldo insuficiente");
            } catch (SaldoInsuficienteException ex) {
                ex.getMessage();
                ex.printStackTrace();
            }
        }else{
            this.saldo -= saldo;
            System.out.println("Monto a retirar: $ "+saldo);
            System.out.println("Retiro exitoso, su saldo es : $ "+this.saldo);
        }
    }
    
    public boolean transferir(double saldo, Cuenta cuenta){ 
        if(this.saldo >= saldo){
            this.saldo -= saldo;
            cuenta.depositar(saldo);
            return true; 
        }
        return false;
    }
    
   
   
    public double getSaldo(){
        return this.saldo;
    }
    
   
    public void setSaldo(double saldo){
        this.saldo = saldo;
    }
    
    
    public int getAgencia() {
        return this.agencia;
    }
    
    public int getNumero(){
        return this.numero;
    }

    public void setTitular(Cliente titular) {
        this.titular = titular;
    }
    
    public Cliente getTitular(){
        return this.titular;
    }
    
    //método de la clase, no de la instancia
    public static int getTotal(){
        return Cuenta.total;
    }
     
}


