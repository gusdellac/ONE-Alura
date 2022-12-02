/*COMANDO CASE (SEGÚN)
Este comando es un condicional múltiple. Introduce una condicion luego de utilizar el comando
WHEN <condicion> THEN <acción si se cumple la condición>. Debemos utilizar indentación.
En los condicionales podemos utilizar los operadores lógicos y operadores de comparación.
Para finalizar los condicionales utilizamos ELSE <acción>.
Para finalizar el CASE colocamos END + AS para renombrar el campo.
CASE se coloca como otro campo dentro del comando SELECT
*/

SELECT * FROM tabla_de_productos;

SELECT NOMBRE_DEL_PRODUCTO, PRECIO_DE_LISTA,
CASE
	WHEN PRECIO_DE_LISTA >= 12 THEN "Costoso"
    WHEN PRECIO_DE_LISTA >= 5 AND PRECIO_DE_LISTA < 12 THEN "Accesible"
    ELSE "Barato"
END AS PRECIO
FROM tabla_de_productos;

SELECT * FROM tabla_de_productos;


/*Seleccionamos 4 campos: ENVASE, SABOR, campo introducido por el CASE renombrado PRECIO,
campo introducido por la función MIN() renombrado PRECIO_MINIMO.
(FROM) De la tabla_de_productos, (WHERE) donde TAMANO = "700 ml", (GROUP BY)agrupamos por ENVASE y por el campo el campo que 
introduce el CASE (PRECIO).
(ORDER BY) Ordenamos por ENVASE*/
SELECT ENVASE, SABOR,
CASE
	WHEN PRECIO_DE_LISTA >= 12 THEN "Costoso"
    WHEN PRECIO_DE_LISTA >= 5 AND PRECIO_DE_LISTA < 12 THEN "Accesible"
    ELSE "Barato"
END AS PRECIO, MIN(PRECIO_DE_LISTA) AS PRECIO_MINIMO
FROM tabla_de_productos
WHERE TAMANO = "700 ml"
GROUP BY ENVASE,
CASE
	WHEN PRECIO_DE_LISTA >= 12 THEN "Costoso"
    WHEN PRECIO_DE_LISTA >= 5 AND PRECIO_DE_LISTA < 12 THEN "Accesible"
    ELSE "Barato"
END
ORDER BY ENVASE;


/*Registre el año de nacimiento de los clientes y clasifíquelos de la siguiente manera:
Nacidos antes de 1990= Viejos, nacidos entre 1990 y 1995= Jóvenes 
y nacidos después de 1995= Niños. Liste el nombre del cliente y esta clasificación.*/

SELECT * FROM tabla_de_clientes;

SELECT NOMBRE, FECHA_DE_NACIMIENTO,
CASE
	WHEN YEAR(FECHA_DE_NACIMIENTO) < 1990 THEN "Viejos"
    WHEN YEAR(FECHA_DE_NACIMIENTO) >= 1990 AND YEAR(FECHA_DE_NACIMIENTO) < 1995 THEN "Jovenes"
    ELSE "Niños"
END AS CLASIFICACION_EDAD
FROM tabla_de_clientes;

