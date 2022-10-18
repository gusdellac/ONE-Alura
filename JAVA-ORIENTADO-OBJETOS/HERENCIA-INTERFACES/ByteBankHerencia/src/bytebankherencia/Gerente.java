
package bytebankherencia;

public class Gerente extends Funcionario implements Autenticable{ //extiende de 
    //Funcionario
    
    private final AutenticacionUtil util;
    
    public Gerente(){
        this.util = new AutenticacionUtil();
    }
    
   
    //sobreescritura de método getBonificacion()
    
    @Override //Override es la notación de java para indicar que un método es
    //sobreescrito
    public double getBonificacion() {
        System.out.println("Ejecutando desde gerente!!");
        return super.getSalario() + this.getSalario()*0.05; //super nos 
        //permite utilizar métodos de la clase padre
        
    }

    @Override
    public void setClave(String clave) {
        this.util.setClave(clave); 
    }
    
    @Override
    public String getClave() {
        return this.util.getClave();
    }

    @Override
    public boolean iniciarSesion(String clave) {
        return this.util.iniciarSesion(clave);
    }

    
}
