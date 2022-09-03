console.log("Hola mundo");

var unNumero = 10;

console.log(typeof(unNumero)); //dataType : number 

unNumero = "Hola mundo"; //reasignación con distinto tipo de dato

console.log(typeof(unNumero)); //dataType : string 


/*Javascript es un lenguaje de tipado dinámico y debil. Es decir:
Tipado dinámico: cuando la comprobación de tipificación se realiza durante su ejecución en vez de durante la compilación.
Tipado débil: el lenguaje infiere por sí solo el tipo de dato asignado a una variable o constante.
Tambien se puede reasignar un valor a la misma variable con otro tipo de dato que no sea el mismo que el asignado incialmente*/

/*Java es un lenguaje de tipado estático y fuerte.
Tipado estático:  la comprobación de tipificación se realiza durante la compilación, y no durante la ejecución
Tipado fuerte: el lenguaje puede o no inferir el tipo de dato asignado a una variable o constante.
No se puede reasignar una variable con un tipo de dato diferente al indicado inicialmente. Ya sea que el lenguaje
haya inferido el tipo de dato o se le haya indicado específicamente este tipo. */