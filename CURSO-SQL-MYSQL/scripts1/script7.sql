SELECT * FROM tbclientes;

/*agregamos una clave primaria a nuestro campo DNI*/
ALTER TABLE tbclientes ADD PRIMARY KEY (DNI);

/*agregamos a la tabla tbclientes una columna (campo) llamado FECHA_NACIMIENTO de tipo DATE*/
ALTER TABLE tbclientes ADD COLUMN(FECHA_NACIMIENTO DATE);

/*insertamos a la tabla un nuevo cliente*/
INSERT INTO tbclientes(
DNI,
NOMBRE,
DIRECCION1,
DIRECCION2,
BARRIO,
CIUDAD,
ESTADO,
CP,
EDAD,
SEXO,
LIMITE_CREDITO,
VOLUMEN_COMPRA,
PRIMERA_COMPRA,
FECHA_NACIMIENTO) VALUES ("38208173", "Gustavo De Llac", "Necochea 312", "El parral 2270", "Musso", "San Rafael",
"Mendoza", "5600", 28, "M", 100000, 2000, 0, "1994-04-20");