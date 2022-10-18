
package bytebankherencia;

//Interface
/*
Una interface es siempre abstracta y siempre es pública. Puede colocarse la 
palabra reservada abstract pero no es buena práctica. 
Se diferencia a una clase abstracta en que sus métodos no pueden ser 
implementados, es decir deben ser abstractos y públicos. También que no se
extiende de una interface (extends) sino que se implementa (implements) en 
otra clase u objeto. 
Atributos: cuando tiene un atributo en una interfaz, siempre será public 
static final (constante publica estática).
Métodos estáticos: pueden implementarse métodos estáticos en las interfaces.
Por defecto, los métodos de las interfaces son públicos abstractos.

*/
public interface Autenticable {
    
    public void setClave(String clave);
    public String getClave();
    public boolean iniciarSesion(String clave);
}

/*
Una interfaz en Java es una colección de métodos abstractos y propiedades 
constantes.

En las interfaces se especifica qué se debe hacer pero no su implementación. 
Serán las clases que implementen estas interfaces las que describen la lógica 
del comportamiento de los métodos.

Las interfaces nos permiten relacionar clases que no tengan relación de herencia
entre ellas, pero que si compartan un comportamiento en común. Como por ejemplo
ciertas clases que necesiten un sistema de autenticación para iniciar sesión.
*/