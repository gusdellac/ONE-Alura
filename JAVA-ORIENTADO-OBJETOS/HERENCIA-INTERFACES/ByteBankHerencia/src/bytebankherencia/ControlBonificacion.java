
package bytebankherencia;

public class ControlBonificacion {
    
    private double suma; //atributo. No es necesario iniciarlizarlo, ya que
    //al instanciarse la clase se inicializa al valor por defecto para
    //datos de tipo double (0.0)
    
    //método para registrar los salarios y devolver la suma de todas las 
    //bonificaciones generadas
    public double registrarSalario(Funcionario funcionario){/*
        El método recibirá como parámetro un objeto de tipo Funcionario.
        Es decir, que cualquier instancia de la clase Funcionario, así como 
        cualquier instancia de las clases hijas de Funcionario pueden pasarse
        como parámetro de éste método. Esto es debido a que como las clases 
        hijas extienden de la clase Funcionario, siguen siendo del mismo tipo.
        Esta funcionalidad del lenguaje es lo que se conoce como polimorfismo.
        */
        this.suma = funcionario.getBonificacion() + this.suma;
        System.out.println("Cálculo actual: " +this.suma);
        return this.suma;
    }
}
