var numeroEntero = 10;
var numeroDecimal = 10.5;
console.log(typeof(numeroEntero)); //dataType : number (int)
console.log(typeof(numeroDecimal)); //dataType : number (float)

var resultado = numeroEntero + numeroDecimal; //js aplica el mismo tipo de datos a números enteros y a números decimales
console.log(resultado);

resultado = numeroEntero - numeroDecimal;
console.log(resultado);

resultado = numeroEntero / numeroDecimal;
console.log(resultado);

resultado = numeroEntero * numeroDecimal;
console.log(resultado);

resultado = numeroEntero + numeroEntero * numeroDecimal;
console.log(resultado);