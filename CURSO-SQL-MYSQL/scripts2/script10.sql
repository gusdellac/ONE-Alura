SELECT * FROM tabla_de_clientes;

SELECT * FROM tabla_de_vendedores;

/*INNER JOIN
(SELECT)Seleccionamos el campo NOMBRE y BARRIO de la tabla_de_clientes, y
el campo NOMBRE de la tabla_de_vendedores.
(FROM) de la tabla_de_clientes.
(INNER JOIN) unimos o relacionamos con uno o más campos de la tabla_de_vendedores.
(ON) donde el BARRIO de la tabla_de_clientes sea igual (=) al BARRIO de la tabla_de_vendedores

*/
SELECT tabla_de_clientes.NOMBRE,tabla_de_clientes.CIUDAD,
tabla_de_clientes.BARRIO, tabla_de_vendedores.NOMBRE
FROM tabla_de_clientes
INNER JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;


/*LEFT JOIN*/
SELECT tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE
FROM tabla_de_clientes
LEFT JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

/*RIGHT JOIN*/
SELECT tabla_de_clientes.NOMBRE AS CLIENTE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE AS VENDEDOR, tabla_de_vendedores.VACACIONES
FROM tabla_de_clientes
RIGHT JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;


/*FULL JOIN.
No se realiza de esta manera, ver otro ejemplo*/
SELECT tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE, tabla_de_vendedores.VACACIONES
FROM tabla_de_clientes
FULL JOIN
tabla_de_vendedores
ON tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

/*CROSS JOIN
Planteado de esta forma funciona igual que un INNER JOIN*/
SELECT tabla_de_clientes.NOMBRE, tabla_de_clientes.BARRIO,
tabla_de_vendedores.NOMBRE, tabla_de_vendedores.VACACIONES
FROM tabla_de_clientes, tabla_de_vendedores
WHERE tabla_de_clientes.BARRIO = tabla_de_vendedores.BARRIO;

