/*COMANDO JOIN.
Este comando nos permite unir tablas (relacionar) utilizando un campo en común en donde colocamos nuestra
primary key (PK) en una tabla y nuestra foreign key en otra tabla.
Tipos de JOIN: 
INNER JOIN
LEFT JOIN
RIGHT JOIN
FULL JOIN
CROSS JOIN
*/
SELECT * FROM tabla_de_vendedores;

SELECT * FROM facturas;

/*INNER JOIN*/
SELECT * FROM tabla_de_vendedores A
INNER JOIN
facturas B
ON A.MATRICULA = B.MATRICULA;

/*INNER JOIN*/
SELECT A.NOMBRE, B.MATRICULA, COUNT(*) FROM tabla_de_vendedores A
INNER JOIN
facturas B
ON A.MATRICULA = B.MATRICULA
GROUP BY A.NOMBRE, B.MATRICULA;

/*CROSS JOIN.
Es una alternativa al INNER JOIN*/
SELECT A.NOMBRE, B.MATRICULA, COUNT(*) 
FROM tabla_de_vendedores A, facturas B
WHERE A.MATRICULA = B.MATRICULA
GROUP BY A.NOMBRE, B.MATRICULA;

/*Obtén la facturación anual de la empresa. Ten en cuenta que el valor financiero de 
las ventas consiste en multiplicar la cantidad por el precio.*/
SELECT YEAR(A.FECHA_VENTA) AS AÑO, SUM(B.CANTIDAD * B.PRECIO) AS TOTAL_FACTURACION
FROM facturas A
INNER JOIN
items_facturas B
ON A.NUMERO = B.NUMERO
GROUP BY YEAR(A.FECHA_VENTA);

SELECT count(*) FROM tabla_de_clientes;

SELECT DISTINCT A.DNI, A.NOMBRE, B.DNI FROM tabla_de_clientes A
INNER JOIN
facturas B
ON A.DNI = B.DNI;

SELECT DISTINCT A.DNI, A.NOMBRE, B.DNI, A.CIUDAD FROM tabla_de_clientes A
LEFT JOIN
facturas B
ON A.DNI = B.DNI;

SELECT DISTINCT A.DNI, A.NOMBRE, B.DNI , A.CIUDAD FROM tabla_de_clientes A
LEFT JOIN
facturas B
ON A.DNI = B.DNI
WHERE B.DNI IS NULL;

SELECT DISTINCT B.DNI, B.NOMBRE, A.DNI , B.CIUDAD FROM facturas A
RIGHT JOIN
tabla_de_clientes B
ON B.DNI = A.DNI
WHERE A.DNI IS NULL;
