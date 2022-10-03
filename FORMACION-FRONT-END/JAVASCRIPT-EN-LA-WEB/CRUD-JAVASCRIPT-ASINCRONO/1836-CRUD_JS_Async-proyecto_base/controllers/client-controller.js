import { clientServices } from "../service/client-service.js"; //importamos el objeto clientServices


// Código para crear un objeto html <tr> en donde cargaremos los datos que nos devuelve el servidor (template)
const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido;   
    return linea;
};
//Traemos el objeto html <tbody> referenciando su data atributte
const table = document.querySelector("[data-table]");


clientServices.listaClientes().then((data) => { //usamos el método .then() que se ejecuta en el caso de que la información fúe recibida
    data.forEach((perfil) => { //iteramos sobre el objeto JSON guardado en const data y extraemos cada usuario registrado
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email); //creamos un objeto html por cada usuario
      table.appendChild(nuevaLinea); //le indicamos al <tbody> que adopte los <tr> creados
    });
    console.log(data);    
}).catch((error)=>alert("Ocurrio un error de comunicación.")); //método .catch() se ejecuta en el caso de que la información no fué recibida