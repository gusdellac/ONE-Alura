import { clientServices } from "../service/client-service.js"; //importamos el objeto clientServices


// Código para crear un objeto html <tr> en donde cargaremos los datos que nos devuelve el servidor (template)
// utilizamos backticks (``) para incrustar variables en código html
const crearNuevaLinea = (nombre, email, id) => { //crearNuevaLinea() recibe como parámetros nombre, email , id
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id=${id}
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido; 
    const btn = linea.querySelector("button"); //guardamos el objeto button en const btn
    btn.addEventListener("click", ()=>{ //escuchamos el evento click en btn, al ejecutarse el evento click ejecutamos la arrow function
      const id = btn.id //extraemos de btn el id
      clientServices.eliminarCliente(id).then(() => { //ejecutamos el método eliminarCliente() parámetro id, del objeto clientServices
      }).catch(err => alert("Ocurrió un error"));
    });
    
    return linea;
};
//Traemos el objeto html <tbody> referenciando su data atributte
const table = document.querySelector("[data-table]");


clientServices.listaClientes().then((data) => { //usamos el método .then() que se ejecuta en el caso de que la información fúe recibida
    data.forEach(({nombre, email, id}) => { //iteramos sobre el objeto JSON guardado en const data y extraemos cada usuario registrado
      //en la línea anterior podemos recorrer los atributos del objeto colocando las {} y dentro las variables que representan a los atributos (refactorizar, destructuring)
      const nuevaLinea = crearNuevaLinea(nombre, email, id); //creamos un objeto html por cada usuario
      table.appendChild(nuevaLinea); //le indicamos al <tbody> que adopte los <tr> creados
    });
     
}).catch((error)=>alert("Ocurrió un error de comunicación.")); //método .catch() se ejecuta en el caso de que la información no fué recibida

