SELECT * FROM tbcliente;

/*filtramos busqueda utilizando operadores relacionales*/

SELECT * FROM tbcliente WHERE EDAD > 27; /*mayor que*/

SELECT * FROM tbcliente WHERE EDAD <= 27;/*menor igual que*/

SELECT * FROM tbcliente WHERE EDAD <> 26;/*diferente a*/

SELECT * FROM tbcliente WHERE EDAD <= 27;

/*operadores + string*/
SELECT * FROM tbcliente WHERE NOMBRE > "Erica Carvajo"; /*nos filtra los nombres que se ubiquen después de Erica Carvajo
de acuerdo al orden alfabético*/

SELECT * FROM tbcliente WHERE NOMBRE <= "Erica Carvajo"; /*nos filtra los nombres que se ubiquen antes de Erica Carvajo
y el que sea igual*/

SELECT * FROM tbcliente WHERE NOMBRE <= "Erica Carvajo";


SELECT * FROM tbproducto;

/*filtramos números con coma flotante (float)*/

SELECT * FROM tbproducto WHERE PRECIO_LISTA = 28.51; /*no nos genera ninguna coincidencia, porque es con coma flotante,
es decir que mysql puede estar teniendo en cuenta diversos valores que se encuentren entre .50 y .52*/

SELECT * FROM tbproducto WHERE PRECIO_LISTA < 28.51; /*trae los valores que sean menores a 28.51*/

SELECT * FROM tbproducto WHERE PRECIO_LISTA BETWEEN 28.50 AND 28.52; /*filtramos un valor que se encuentre en un rango determinado*/

SELECT * FROM tabla_de_vendedores;

SELECT * FROM tabla_de_vendedores WHERE PORCENTAJE_COMISION > 0.10;


/*FILTROS CON FECHAS*/

SELECT * FROM tbcliente;

SELECT * FROM tbcliente WHERE FECHA_NACIMIENTO = "1995-01-13"; /*igual*/

SELECT * FROM tbcliente WHERE FECHA_NACIMIENTO < "1995-01-13"; /*antes*/

SELECT * FROM tbcliente WHERE FECHA_NACIMIENTO > "1995-01-13"; /*después*/

SELECT * FROM tbcliente WHERE YEAR(FECHA_NACIMIENTO) = 1995;

SELECT * FROM tbcliente WHERE DAY(FECHA_NACIMIENTO) = 20;


SELECT * FROM tabla_de_vendedores;

SELECT * FROM tabla_de_vendedores WHERE YEAR(FECHA_ADMISION) >= 2016;


