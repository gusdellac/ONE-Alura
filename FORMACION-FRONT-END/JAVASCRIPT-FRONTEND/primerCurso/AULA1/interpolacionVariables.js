const miNombre = "Gustavo";
const miApellido = "De Llac";

const textoMiNombreDobles = "Mi nombre es: ${miNombre} ${miApellido}";
console.log(textoMiNombreDobles);

const textoMiNombreSimples = 'Mi nombre es: ${miNombre} ${miApellido}';
console.log(textoMiNombreSimples);

const textoMiNombreInvertidas = `Mi nombre es: ${miNombre} ${miApellido}`; /*Para interpolar variables dentro
de un string es necesario usar comillas invertidas: alt+96 */
console.log(textoMiNombreInvertidas);
