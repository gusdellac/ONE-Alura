// AJAX Asynchronous Javascript and XML
/*

CRUD         ---  Métodos HTTP
  -Create    ---  POST
  -Read      ---  GET
  -Update    ---  PUT/PATCH
  -Delete    ---  DELETE
*/

//Conexión con el servidor usando Fetch API

//Fetch API (forma 1)
const listaClientes = () => {
  return fetch("http://localhost:3000/perfil").then((respuesta)=>{ /* el método fetch() devuelve una promise de
  la url que le pasamos como parámetro. Usamos el método .then() para recibir el resultado de la promise. fetch por defecto
  ejecuta el método get */
    return respuesta.json(); //transformamos el resultado de la promise a formato json con el método .json() y lo retornamos
  });     
};

//función para crear un cliente
const crearCliente = (nombre, email)=>{ //arrow function recibe dos parámetros (nombre y email)
  return fetch("http://localhost:3000/perfil", { /*utilizamos fetch para gestionar las promises. 
    primer parámetro url del servidor, segundo parámetro objeto con la información de lo que deseamos realizar.
    */
    method: "POST", //indicamos que el método a utilizar será "POST" (Create)
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,email, id: uuid.v4()}) /*en body guardaremos la información que desamos crear.
    nombre y email que son ingresados por el usuario, id que es generado por la librería uuid.v4()
    */
  });
};

//función para eliminar cliente
const eliminarCliente = (id)=>{ //arrow function recibe como parámetro id
  return fetch(`http://localhost:3000/perfil/${id}`, { /*método fetch(), 1er parámtro --> url del servidor,
  lo colocamos entre backticks para incrustar la variable id. Con esto logramos indicar el elemento que deseamos eliminar
  de los datos que se encuentran en nuestro archivo db.json
  */
    method: "DELETE", //2do parámetro --> objeto con el atributo method : "DELETE"
  });
}

//función para obtener los clientes
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
  .catch(err => {
    console.log(err);
    window.location.href = "/screens/error.html";
  });
};

//función para modificar un cliente
const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method : "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({nombre, email})
  }).then(respuesta => console.log(respuesta)).catch(err => console.log(err));
};

//creamos un objeto clientServices y lo exportamos
export const clientServices = {  /* Dentro de este objeto guardaremos los métodos http (CRUD)
que nos sirven para gestionar los datos de nuestro servidor. Exportamos el objeto para que pueda ser
accedido por otros módulos.
*/
  listaClientes, 
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

//Fetch API (sintaxis resumida de lo anterior)
// const listaClientes = () => { return fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json()); 
// };

/*console.log(listaClientes()); //podemos visualizar por consola el estado inicial de la promise (<pending>)  */


/* 
//Código eliminado: 

//Conexión con un servidor utilizando la clase Promise y XMLHttpRequest
  const listaClientes = () => {
    const promise = new Promise((resolve,reject)=> { //instanciamos un objeto derivado de la clase Promise.
    //Esta clase nos permitirá gestionar una operación asíncrona.
    //A esta instancia de la clase Promise le pasaremos cómo parámetro una función anónima, esta arrow functions recibirá
    //como parámetro resolve y reject. Que son dos métodos que representan dos posibles estados de la promise.
    
      
      const http = new XMLHttpRequest(); //instanciamos un objeto llamado http de la clase XMLHttpRequest 
        
      // Método open() . Lo utilizamos para abrir http. open(método,url)
      http.open("GET","http://localhost:3000/perfil")

      // Método send() . Envía petición de datos
      http.send()

      // Propiedad onload . Cuando termina de cargar o recibir una respuesta ejecuta la arrow function
      http.onload = () => {
          const response = JSON.parse(http.response); //guardamos la respuesta del servidor en const data. Convertimos la respuesta de http a formato JSON
          
          //Condicional para determinar si la promesa fue rechazada o resuelta
          if (http.status >= 400) { //si el estatus devuelto en la propiedad status del objeto http es mayor o igual 
          //a 400 significa que existe un error en la comunicación
              reject(response); //ejecutamos el método reject() con el parámetro response
          }else{ //si el estatus devuelto en la propiedad status del objeto http es menor
          //a 400 significa que la comunicación con el servidor fué exitosa
              resolve(response); //ejecutamos el método resolve() con el parámetro response
          };
      }; 
    });
    return promise;  
  };

*/