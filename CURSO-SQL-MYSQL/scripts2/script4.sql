/*COMANDO LIMIT
Este comando límita la búsqueda de registros a N registros
*/

SELECT * FROM tabla_de_productos;

SELECT * FROM tabla_de_productos LIMIT 5; /*limita la búsqueda a los 5 primeros registros*/

SELECT * FROM tabla_de_productos LIMIT 5, 4;  /*limita la búsqueda a los 4 primeros registros
a partir del índice 5 */

SELECT * FROM facturas;

SELECT * FROM facturas WHERE FECHA_VENTA = "2017-01-01" LIMIT 10;