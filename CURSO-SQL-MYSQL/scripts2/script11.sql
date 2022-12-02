/*COMANDO UNION.
Este comando permite unir campos de diferentes tablas que sean del mismo tipo.
UNION une las tablas y muestra los registros sin repetirse (ejecuta DISTINCT por implícitamente).
UNION ALL une las tablas y muestra todos los registros aunque se repitan*/

SELECT DISTINCT BARRIO FROM tabla_de_clientes;

SELECT DISTINCT BARRIO FROM tabla_de_vendedores;

/*UNION*/
SELECT BARRIO FROM tabla_de_clientes
UNION
SELECT BARRIO FROM tabla_de_vendedores;

/*UNION ALL*/
SELECT BARRIO FROM tabla_de_clientes
UNION ALL
SELECT BARRIO FROM tabla_de_vendedores;

SELECT BARRIO, NOMBRE, "Cliente" AS TIPO FROM tabla_de_clientes
UNION ALL
SELECT BARRIO, NOMBRE, "Vendedor" AS TIPO FROM tabla_de_vendedores;

SELECT BARRIO, NOMBRE, "Cliente" AS TIPO_CLIENTE, DNI FROM tabla_de_clientes
UNION ALL
SELECT BARRIO, NOMBRE, "Vendedor" AS TIPO_VENDEDOR, MATRICULA FROM tabla_de_vendedores;


/*FULL JOIN usando UNION*/
SELECT tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE, VACACIONES
FROM tabla_de_clientes
LEFT JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO
UNION
SELECT tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE, VACACIONES
FROM tabla_de_clientes
RIGHT JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

