/*usamos la base de datos jugos*/
USE jugos; 

/*insertamos productos en tabla tbproductos*/
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("773912", "Clean", "Botella PET",
"1 litro", "Naranja", 8.01);

/*seleccionamos la tabla tbproductos para poder visualizarla*/
SELECT * FROM tbproductos; 

INSERT INTO tabla_de_vendedores(
MATRICULA, NOMBRE, PORCENTAJE_COMISION) VALUES ("00233",
"Joan Geraldo de la Fonseca", 0.10);

SELECT * FROM tabla_de_vendedores; 

