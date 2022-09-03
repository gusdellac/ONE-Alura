const nombre = "Gustavo"; //constante
let nombre2 = "Gustavo"; //variable aplicable dentro de un bloque de código
var nombre3 = "Gustavo"; //variable global, puede utilizarse en cualquier parte del código


//Data types primitives
var nombre4 = "Gustavo"; //string
var edad = 20; //number (int)
var numeroDecimal = 20.5; //number (float)
var booleanTrue = true; //boolean
var booleanFalse = false; //boolean
var undefined_type = undefined;
console.log(typeof(undefined_type));
var bigInt_type = 2n;
console.log(typeof(bigInt_type));
var symbol_type = Symbol();

console.log(typeof(symbol_type));
var null_type = null;
console.log(typeof(null_type));

//Data types objects
console.log(typeof({}));
console.log(typeof([]));
const set = new Map();
console.log(typeof(set));

//Data types function
console.log(typeof(function(){}));


