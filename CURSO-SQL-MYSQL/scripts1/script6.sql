SELECT * FROM tbproductos;

/*eliminamos un producto de la tabla*/
DELETE FROM tbproductos WHERE producto = "695594";

/*agregamos una llave primaria a nuestra tabla, 
esta llave no permitirá datos duplicados*/
ALTER TABLE tbproductos ADD PRIMARY KEY(producto);

/*agregamos nuevamente el producto dos veces (duplicado)*/
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("695594", "Festival de Sabores", "Lata",
"1.5 litros", "Asaí", 28.51);

/*al intentar agregar el producto otra vez nos genera error debido a que establecimos
una primary key en nuestro campo producto*/
INSERT INTO tbproductos( 
producto, nombre, envase, volumen, sabor, 
precio) VALUES ("695594", "Festival de Sabores", "Lata",
"1.5 litros", "Asaí", 28.51);

/*agregamos una llave primaria a nuestra tabla, 
esta llave no permitirá datos duplicados*/
ALTER TABLE tbproductos ADD PRIMARY KEY(producto);

