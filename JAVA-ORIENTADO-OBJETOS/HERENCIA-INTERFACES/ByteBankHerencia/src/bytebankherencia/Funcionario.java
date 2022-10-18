
package bytebankherencia;

//clase Funcionario es abstracta (palabra reservada abstract)
/*Esto significa que esta clase no podra ser instanciada en un objeto,
sino que su utilidad será sólo de molde o plantilla para las clases hijas.
Las clases abstractas representan un concepto, una abstración
*/
public abstract class Funcionario {
    private String nombre;
    private String documento;
    private double salario;
    
    public Funcionario(){
        
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
    
    //método abstracto. Existe conceptualmente
    //por tal motivo no lleva cuerpo {}
    //un método abstracto exige que las clases hijas lo sobreescriban, sino
    //generará error de compilación
    public abstract double getBonificacion();
    
}


/*
 un método abstracto define solo la firma 
(visibilidad, retorno, nombre del método y parámetros).
*/
