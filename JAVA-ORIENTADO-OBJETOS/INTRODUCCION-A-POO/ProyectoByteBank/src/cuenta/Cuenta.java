/*
Entidad Cuenta:
    saldo
    agencia
    numero
    titular
*/
package cuenta;

public class Cuenta {
    /*
    cuando se instancia un objeto de una clase(new Clase), java inicializa 
    todos los atributos a sus valores por defecto.
    Ej: double = 0.0; int = 0; String = null, Cliente = null.
    Cuando los atributos son de tipo Object, al instanciarse la clase son 
    inicializados con el tipo null
    */
    private double saldo;/*
    indicamos que el atributo será privado, de esta forma evitamos que el
    mismo sea modificado fuera de esta clase
    */
    private int agencia; 
    private int numero;
    
    private static int total = 0;/* Atributo de la clase, no de la instancia.
    Cuando se emplea static para modificar una variable, cada instancia 
    que utilice esa variable no tendrá una copia de ella, como ocurre 
    normalmente, sino que será la clase quién contendrá y tendrá acceso 
    a modificarla. Esta variable reservará sólo un espacio en memoria.
    */
    Cliente titular = new Cliente(); /*indicamos que el atributo será de 
    tipo Cliente. Este atributo es inicializado con un valor que será aplicado
    a todas las instancias de esta clase. El valor asignado es un objeto o 
    nueva instancia de la clase Cliente (new Cliente()). De esta forma
    logramos que cada vez que se instancie una nueva Cuenta, se cree también
    una nueva instancia de Cliente. Así, se accederan a los atributos del 
    objeto Cliente a través del atributo titular de la clase Cuenta.
    Java no guarda el objeto Cliente dentro del atributo titular, sino que 
    crea el objeto Cliente en una posición de memoria distinta y almacena dentro
    de titular la referencia a esa posición de memoria.
    */
    
    //Constructor de clase con argumentos. Notar que no es necesario 
    //la existencia del constructor que no recibe argumentos
    /*
    El constructor es el método que retorna un objeto instanciado de una clase.
    El retorno es del mismo tipo que la clase.
    Este método si no es declarado explícitamente se ejecuta de forma implícita.
    */
    public Cuenta(int agencia, int numero){
        total++; //cada nueva instancia incrementa el total
        if (agencia <= 0){
            System.out.println("No se permite ingresar cero o números "
                    + "negativos.");
            this.agencia = 1; //valor por defecto si ingresa al if
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
    
    public void depositar(double saldo){
        this.saldo += saldo;
    }
    
    public boolean retirar(double saldo){
        if(this.saldo >= saldo){
            this.saldo -= saldo;
            return true;
        }
        return false;
    }
    
    public boolean transferir(double saldo, Cuenta cuenta){ /*
        Podemos pasar como argumentos objetos, es decir, la referencia
        en memoria de un objeto. Por lo tanto, podremos hacer uso de los 
        atributos y métodos del objeto recibido como argumento.
        En este caso con this hacemos referencia al objeto instanciado desde
        el cuál se está llamando al método. Con cuenta hacemos referencia
        al objeto instanciado que fué recibido como argumento.
        */
        
        if(this.saldo >= saldo){
            this.saldo -= saldo;
            cuenta.depositar(saldo);
            return true; //el return termina la ejecución del método
            //es decir, si ingresa al if, el próximo retorno de false
            //no se ejecutará
        }
        return false;
    }
    
    /*
    Para que se pueda obtener y modificar el valor de una atributo privado
    es necesario crear métodos (getters y setters) que cumplan esta función.
    Los getters deben llevar el tipo de dato que retorna.
    Los setters llevan la palabra reservada void, ya que no retornan un valor
    sino que reciben un argumento y modifican un atributo.
    */
    
    /*
    Autogenerar setters y getters: click derecho + insert code +
    generate setters y getters
    */
    public double getSaldo(){
        return this.saldo;
    }
    
    //Este setter no es necesario, ya que controlamos el saldo directamente
    //con los métodos de depositar, retirar y transferir
//    public void setSaldo(double saldo){
//        this.saldo = saldo;
//    }
    
    
    //refactor rename ctrl+r (para cambiar el nombre de una misma variable)
    
    //No es necesario este setter ya que la asignación de la agencia y su 
    //validación la hacemos directamente con el constructor
//    public void setAgencia(int agencia){
//        if(agencia > 0){
//            this.agencia = agencia;
//        }else{
//            System.out.println("No estan permitidos valores negativos");
//        }
//    }

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
    
    
    /*
    En Java, es posible llamar a un constructor dentro de otro, y esto 
    se hace para evitar la duplicación de códigos y reglas. Después de todo, 
    una regla aplicada en un constructor normalmente será la misma para el 
    otro caso. Para esto, se usa this (), pasando los parámetros 
    correspondientes al constructor al que desea llamar.
    
    //Nuevo constructor AQUI!
    public Carro(String modelo, double precio){
        this(2017, modelo, precio);
    }
    */
    
    
    
}


