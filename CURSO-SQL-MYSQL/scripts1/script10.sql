SELECT * FROM tbcliente;
select * from tbproducto;

SELECT NOMBRE, MATRICULA FROM TABLA_DE_VENDEDORES;

SELECT DNI, NOMBRE FROM tbcliente;

/*selecciona lo indicado y muestra los campos con otros nombres*/
SELECT NOMBRE AS nombre_completo, SEXO AS genero, EDAD AS años, DIRECCION1 AS domicilio FROM tbcliente;

/*selecciona lo indicado con un limite de 6 registros*/
SELECT NOMBRE, SEXO, EDAD FROM tbcliente LIMIT 6;

/*filtramos la busqueda*/
SELECT * FROM tbproducto WHERE SABOR = "Maracuyá";
SELECT * FROM tbproducto WHERE SABOR = "Mango";
SELECT * FROM tbproducto WHERE SABOR = "Naranja";

/*seteamos el sabor de Mango por Naranja*/
UPDATE tbproducto SET SABOR = "Naranja" WHERE SABOR = "Mango";
SELECT * FROM tbproducto WHERE SABOR = "Naranja";

SELECT * FROM TABLA_DE_VENDEDORES WHERE NOMBRE = 'Claudia Morais';

