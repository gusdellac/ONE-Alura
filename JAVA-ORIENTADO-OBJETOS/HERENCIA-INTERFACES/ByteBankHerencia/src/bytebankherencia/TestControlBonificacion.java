
package bytebankherencia;

public class TestControlBonificacion {
    public static void main(String[] args) {
        //clase padre
        Funcionario diego = new Contador();
        diego.setSalario(2000);
        
        //clase hija
        Gerente jimena = new Gerente();
        jimena.setSalario(10000);
        
        //clase hija
        Contador alexiz = new Contador();
        alexiz.setSalario(5000);
        
        //instanciamos un objeto de tipo ControlBonificacion
        ControlBonificacion controlBonificacion = new ControlBonificacion();
        
        //Polimorfismo : las clases hijas de Funcionario también pueden ser
        //pasadas como argumentos de tipo Funcionario
        controlBonificacion.registrarSalario(diego);
        controlBonificacion.registrarSalario(jimena);
        controlBonificacion.registrarSalario(alexiz);
        
        //las clases hijas llamaran al método getBonificacion() sobreescrito
        //en cada una de ellas. Ya que java ejecuta primero los métodos
        //mas específicos de una clase antes de los más genéricos
    }
}
