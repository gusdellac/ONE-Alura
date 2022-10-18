
package javapilaejecucion;

/*
El stack (memoria stack) o pila de ejecución.
La memoria Stack se usa para almacenar las variables locales 
(cuyo ámbito de acción está limitada solo a la función donde se declaró) 
y también las llamadas de funciones en Java. Las variables almacenadas en 
esta memoria por lo general tienen un periodo de vida corto, viven hasta que  
terminen la función o método en el que se están ejecutando.
*/

public class Flujo {
    public static void main(String[] args) {
        System.out.println("Incio main");
        metodo1();
        System.out.println("Fin main");
    }
    
    private static void metodo1(){
        System.out.println("Inicio metodo1");
        
        //Le damos seguimiento al método2 que ejecutará la exception
        //y la capturamos en el catch
        try{
            metodo2();
        } catch(MyExceptionUnchecked miExcepcion){
            String message = miExcepcion.getMessage();
            System.out.println("Exception " + message);
            miExcepcion.printStackTrace();
        }
        
        System.out.println("Fin de metodo1");
    }
    
    private static void metodo2(){
        System.out.println("Inicio metodo2");
        //Instanciamos un objeto de la clase ArithmeticException
//        ArithmeticException ae = new ArithmeticException(); 
//        throw new ArithmeticException();

        //throw new ArithmeticException("Surgió un error!!"); //con throw 
        //lanzamos la excepción.
        // new para instanciar un objeto de la clase ArithmeticException.
        // no es necesario crear una referencia de este objeto en una variable
        //y luego lanzarla como en el código anterior
        
        metodo3(); /*
        llamamos al metodo3() antes de ejecutar MyException con la palabra
        throw. Sino lo llamamos antes el código no compila, ya que después de
        throw no se ejecuta ninguna línea de código.
        */
        throw new MyExceptionUnchecked("Mi excepcion fué lanzada!!"); /*
        lanzamos la primer excepción que extiende de RuntimeException.
        Cuando ejecutamos una exception que extiende de la clase 
        RuntimeException solo la lanzamos (throw new MyException) y le damos
        seguimiento con try/catch. No es necesario indicar en la firma
        del método que la exception ocurrirá, ya que a este tipo de 
        excepciones hacen referencia a algo que puede ocurrir o no (concepto
        unchecked).
        */
    }
    
    private static void metodo3(){
        System.out.println("Inicio metodo3");
        
        /*
        Le damos seguimiento al método que ejecutará la exception y la
        capturamos en el catch. Si no utilizarmos el try/catch en este punto
        también deberíamos colocar throws MyException2 en la firma del metodo3
        y utilizar try/catch en el metodo2. Es decir seguiriamos trasladando
        la exception a los otros métodos que se están ejecutando hasta que 
        alguno le de tratamiento
        */
        try{
            metodo4(); 
        } catch(MyExceptionChecked miExcepcion2){
            String message = miExcepcion2.getMessage();
            System.out.println("Exception " + message);
            miExcepcion2.printStackTrace();
        }
        
        System.out.println("Fin de metodo3");
    }
    
    private static void metodo4() throws MyExceptionChecked{ /*
        debemos colocar throws + la exception en la firma del método
        cuando lanzamos una excepcion que extiende de la clase Exception.
        Esto es necesario porque de está forma se indica que dentro del método
        va a ocurrir una excepción, si o sí, a esto hace referencia el concepto
        de checked
        */
        System.out.println("Inicio metodo4");
        throw new MyExceptionChecked("Mi excepcion 2 fué lanzada"); /*
        lanzamos la segunda excepcion que extiende de Exception
        */
    }
}

/*
(***) Con try catch podemos realizar un control sobre las excepciones.
De ésta forma, podemos indicar a java en que puntos de nuestro código pueden
generarse errores enmarcando ese código dentro del bloque de try{}. Si este 
código mencionado genera un error, se llamará a catch() {}. En catch atrapamos
los errores que indiquemos dentro de los paréntesis y podemos hacer uso de 
sus métodos, ya que estos errores son objetos.
Esto tiene la utilidad de evitar que las excepciones generadas en ciertos
puntos de nuestro código rompan la ejecución completa del mismo. Ya que si 
estas excepciones no reciben un tratamiento en alguna parte de la pila de
ejecución, el código posterior a ejecutarse al momento del error no lo podrá
hacer.
Podemos atrapar distintas exception dentro del mismo catch () separándolas
de esta forma (| pipe):  exception | exception | exception
*/

/*
private static void metodo2(){
        System.out.println("Inicio metodo2");
        for(int i = 1; i <= 5; i++){
            System.out.println(i);
            
            //control de excepciones (***)
            
            try { //intenta esto
                if (i == 3){
                    int num = 0;
                    int resultado = i/num; //división de un número entre cero
                    //(ArithmeticException)
                    System.out.println(resultado);
                }
                
                String test = null;
                System.out.println(test.toString()); // ejecutamos método
                //toString() para una variable null (NullPointerException)
                
            }catch(ArithmeticException | NullPointerException exception ){
                //Con catch atrapamos el error (catcheamos) y podemos realizar
                //operaciones con él
                
                System.out.println("Atrapo Exception");
                System.out.println(exception.getMessage()); // obtenemos el
                //mensaje de la excepcion
                exception.printStackTrace(); // imprimimos el rastro de la 
                //memoria stack, es decir la pila de ejecución
            }
        }
        System.out.println("Fin metodo2");
    }
*/
