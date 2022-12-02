/*COMANDO GROUP BY.
Este comando realizará una agrupación de registros, según lo que se le indique.
Podemos utilizar las siguientes funciones: 
SUM() Suma,
MAX() Máximo,
MIN() Mínimo,
AVG() Promedio,
COUNT() Contador
*/
SELECT * FROM tabla_de_clientes;

SELECT ESTADO, LIMITE_DE_CREDITO FROM tabla_de_clientes;

SELECT ESTADO, SUM(LIMITE_DE_CREDITO) AS LIMITE_TOTAL 
FROM tabla_de_clientes GROUP BY ESTADO; /*Agrupa los estados que coincidan y realiza
la sumatoria de todos los límites de crédito que correspoden al mismo estado.
Al utilizar una función sobre un campo es necesario agregar un alias con AS*/

SELECT ENVASE, PRECIO_DE_LISTA FROM tabla_de_productos;

SELECT ENVASE, MAX(PRECIO_DE_LISTA) AS MAYOR_PRECIO
FROM tabla_de_productos GROUP BY ENVASE; /*agrupa por ENVASE y realiza la sumatoria
de todos los precios que corresponden a cada envase*/

SELECT ENVASE, COUNT(*) FROM tabla_de_productos
GROUP BY ENVASE; /*agrupa por ENVASE y cuenta cuantas veces se repite cada ENVASE*/

SELECT BARRIO, SUM(LIMITE_DE_CREDITO) AS LIMITE 
FROM tabla_de_clientes GROUP BY BARRIO; 

SELECT CIUDAD, BARRIO, SUM(LIMITE_DE_CREDITO) AS LIMITE 
FROM tabla_de_clientes WHERE CIUDAD = "CIUDAD DE MÉXICO" 
GROUP BY BARRIO;

SELECT CIUDAD, BARRIO, SUM(LIMITE_DE_CREDITO) AS LIMITE 
FROM tabla_de_clientes WHERE CIUDAD = "GUADALAJARA" 
GROUP BY BARRIO;

SELECT CIUDAD, BARRIO, MAX(LIMITE_DE_CREDITO) AS LIMITE 
FROM tabla_de_clientes WHERE CIUDAD = "CIUDAD DE MÉXICO" 
GROUP BY BARRIO;

SELECT ESTADO, BARRIO, MAX(LIMITE_DE_CREDITO) AS LIMITE, 
EDAD FROM tabla_de_clientes
WHERE EDAD >= 20
GROUP BY ESTADO, BARRIO
ORDER BY EDAD; /*Selecciona los campos ESTADO, BARRIO , LIMITE_DE_CREDITO, EDAD.
Filtra (WHERE) los registros en donde el campo EDAD sea mayor o igual a 20.
Agrupa (GROUP BY) los registros por ESTADO Y BARRIO.
Ordena (ORDER BY) los registros según el campo EDAD de forma ascendente*/

SELECT * FROM items_facturas;

SELECT NUMERO, CANTIDAD FROM items_facturas 
WHERE CODIGO_DEL_PRODUCTO = "1101035";

SELECT NUMERO, MAX(CANTIDAD) AS CANTIDAD_MAXIMA
FROM items_facturas 
WHERE CODIGO_DEL_PRODUCTO = "1101035";

SELECT COUNT(*) FROM items_facturas WHERE CODIGO_DEL_PRODUCTO = "1101035" AND CANTIDAD = 99;




