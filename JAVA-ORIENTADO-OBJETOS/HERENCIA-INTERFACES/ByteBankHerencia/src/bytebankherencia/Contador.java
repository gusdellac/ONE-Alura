
package bytebankherencia;

public class Contador extends Funcionario{ //extiende de Funcionario
    
    //sobreescritura método getBonificacion()
    @Override
    public double getBonificacion() {
        System.out.println("Ejecutando desde contador!!");
        return 200;
    }
    
}
