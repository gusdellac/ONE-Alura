
package javapilaejecucion;


public class MyExceptionUnchecked  extends RuntimeException{ // unchecked .
    //extendemos nuestra exception de la clase RuntimeException. 
    //Esta clase Run.. extiende de Exception
    //la exception puede ocurrir o no
    
    //constructor 1
    public MyExceptionUnchecked(){
        super();
    }
    
    //constructor 2
    public MyExceptionUnchecked(String message){
        super(message);
    }
}
