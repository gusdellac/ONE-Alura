/*Comando HAVING
Este comando sirve para introducir un condicional (HAVING) luego de una agrupación de datos (GROUP BY).
Agrupamos los registros según lo que indiquemos luego del GROUP BY y podemos filtrar los resultados
que nos devuelva ésta agrupación utilizando HAVING y un condicional
*/
SELECT ESTADO, SUM(LIMITE_DE_CREDITO) AS LIMITE_TOTAL 
FROM tabla_de_clientes GROUP BY ESTADO;


/* Seleccionamos ESTADO, función suma sobre LIMITE_DE_CREDITO y agrupamos en relación a ESTADO.
Filtramos de acuerdo a la condición que introduzca HAVING. 
Devolverá el estado que tenga una sumatoria de LIMITE_DE_CREDITO mayor a 300000
*/
SELECT ESTADO, SUM(LIMITE_DE_CREDITO) AS LIMITE_TOTAL 
FROM tabla_de_clientes
GROUP BY ESTADO
HAVING LIMITE_TOTAL > 300000;

SELECT ENVASE, MAX(PRECIO_DE_LISTA) AS PRECIO_MAXIMO,
MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO
FROM tabla_de_productos GROUP BY ENVASE;

SELECT ENVASE, MAX(PRECIO_DE_LISTA) AS PRECIO_MAXIMO,
MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO
FROM tabla_de_productos GROUP BY ENVASE
HAVING SUM(PRECIO_DE_LISTA) > 80;

SELECT ENVASE, MAX(PRECIO_DE_LISTA) AS PRECIO_MAXIMO,
MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO,
SUM(PRECIO_DE_LISTA) AS SUMA_PRECIO
FROM tabla_de_productos GROUP BY ENVASE
HAVING SUM(PRECIO_DE_LISTA) > 80;

SELECT ENVASE, MAX(PRECIO_DE_LISTA) AS PRECIO_MAXIMO,
MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO,
SUM(PRECIO_DE_LISTA) AS SUMA_PRECIO
FROM tabla_de_productos GROUP BY ENVASE
HAVING SUM(PRECIO_DE_LISTA) > 80
AND MAX(PRECIO_DE_LISTA) >= 14; /*introducimos dos condiciones*/

/*Para visualizar los años en los que se facturó*/
SELECT DISTINCT YEAR(FECHA_VENTA) FROM facturas;

SELECT DNI, COUNT(*) FROM facturas
WHERE YEAR(FECHA_VENTA) = 2016
GROUP BY DNI
HAVING COUNT(*) > 2000;