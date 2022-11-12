/*agregamos dos productos más con errores*/
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("479745", "Clean", "Botella PET",
"2 litros", "Naranja", 3.77);
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("695594", "Festival de Sabores", "Lata",
"1.5 litros", "Asaí", 28.51);


SELECT * FROM tbproductos; 

/*arreglamos los registros con errores*/
/*lo recomendado para realizar modificacionas seguras es usar llaves primarias.
Para este ejemplo desactivaremos la función safe updates, que se encuentra en edit, preferences,
sql editor, casillero Safe Updates. Debemos reiniciar MYSQL workbench  */

UPDATE tbproductos SET envase = "Botella de Vidrio", volumen = "470 ml"
WHERE producto = "479745";

UPDATE tbproductos SET envase = "Botella PET"
WHERE producto = "695594";

SELECT * FROM tbproductos;
