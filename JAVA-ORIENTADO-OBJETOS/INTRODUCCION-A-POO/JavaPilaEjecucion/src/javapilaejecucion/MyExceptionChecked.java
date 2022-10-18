
package javapilaejecucion;


public class MyExceptionChecked extends Exception{ /*
    Checked. Extiende de Exception
    La exception ocurrirá si o si
    */

    public MyExceptionChecked(){
        super();
    }
    public MyExceptionChecked(String message){
        super(message);
    }
}
