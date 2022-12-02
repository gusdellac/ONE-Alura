/*COMANDO ORDER BY
Este comando ordena los registros que le indiquemos de forma ascendente por defecto (ASC) y
de forma descendente si le indicamos al final DESC*/

SELECT * FROM tabla_de_productos;

SELECT * FROM tabla_de_productos ORDER BY PRECIO_DE_LISTA; /*Forma ascendente
por defecto (ASC)*/

SELECT * FROM tabla_de_productos ORDER BY PRECIO_DE_LISTA DESC; /*Forma
descendente*/

SELECT * FROM tabla_de_productos ORDER BY NOMBRE_DEL_PRODUCTO;

SELECT * FROM tabla_de_productos ORDER BY NOMBRE_DEL_PRODUCTO DESC;

SELECT * FROM tabla_de_productos ORDER BY ENVASE ASC, 
NOMBRE_DEL_PRODUCTO DESC;

SELECT CODIGO_DEL_PRODUCTO FROM tabla_de_productos WHERE NOMBRE_DEL_PRODUCTO = "Refrescante" AND
TAMANO = "1 Litro" AND
SABOR = "Frutilla/Limón";

SELECT * FROM items_facturas WHERE CODIGO_DEL_PRODUCTO = "1101035"
ORDER BY CANTIDAD DESC LIMIT 1;





