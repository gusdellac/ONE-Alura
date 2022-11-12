
USE jugos; 

INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("838819", "Clean", "Botella PET",
"1,5 litros", "Naranja", 12.01);
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("1037797", "Clean", "Botella PET",
"2 litros", "Naranja", 16.01);
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("812829", "Clean", "Lata",
"350 ml", "Naranja", 2.81);


SELECT * FROM tbproductos; 

INSERT INTO tabla_de_vendedores(
MATRICULA, NOMBRE, PORCENTAJE_COMISION) VALUES ("00235",
"Marcio Almeida Silva", 0.8);
INSERT INTO tabla_de_vendedores(
MATRICULA, NOMBRE, PORCENTAJE_COMISION) VALUES ("00236",
"Claudia Morais", 0.8);

SELECT * FROM tabla_de_vendedores; 