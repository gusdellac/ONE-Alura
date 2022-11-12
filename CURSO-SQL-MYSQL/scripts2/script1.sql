USE jugos_ventas;
SELECT * FROM tabla_de_productos;

/*FILTROS CON CONDICIONALES*/

/*AND*/
SELECT * FROM tabla_de_productos WHERE SABOR = "mango" AND TAMANO="470 ml";

/*OR*/
SELECT * FROM tabla_de_productos WHERE SABOR = "mango" OR TAMANO="470 ml";

/*NOT*/
SELECT * FROM tabla_de_productos WHERE NOT (SABOR = "mango") OR TAMANO="470 ml";

SELECT * FROM tabla_de_productos WHERE NOT (SABOR = "mango" AND TAMANO="470 ml");

SELECT * FROM tabla_de_productos WHERE NOT SABOR = "mango" AND NOT (TAMANO="470 ml");

/*OPERADOR IN */
SELECT * FROM tabla_de_productos WHERE SABOR IN ("MANGO", "UVA");
SELECT * FROM tabla_de_productos WHERE SABOR = "MANGO" OR SABOR = "UVA";

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ("ciudad de México", "Guadalajara");

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ("ciudad de México", "Guadalajara")
AND EDAD > 21 ;

SELECT * FROM tabla_de_clientes WHERE CIUDAD IN ("ciudad de México", "Guadalajara")
AND (EDAD BETWEEN 20 AND 25);
