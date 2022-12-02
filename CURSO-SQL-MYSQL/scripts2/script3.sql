/* COMANDO DISTINCT
Este comando busca coincidencias de registros en uno o más campos y
cuando encuentra que registros se repiten sólo devuelve uno
de ellos*/

SELECT * FROM tabla_de_productos;

SELECT ENVASE, TAMANO FROM tabla_de_productos;

SELECT DISTINCT ENVASE, TAMANO FROM tabla_de_productos;

SELECT DISTINCT ENVASE, TAMANO, SABOR FROM tabla_de_productos
WHERE SABOR = "Naranja";

SELECT * FROM tabla_de_clientes;

SELECT DISTINCT BARRIO FROM tabla_de_clientes WHERE CIUDAD = "Ciudad de México";


