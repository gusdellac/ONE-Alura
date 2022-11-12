/*crear base de datos*/
CREATE DATABASE ejemplo;

/*eliminar base de datos*/
DROP DATABASE ejemplo;

/**/
CREATE DATABASE ejemplo;

/*usar (seleccionar) una base de datos para ppoder utilizarla*/
USE ejemplo;

/*crear una tabla*/
CREATE TABLE EJEMPLO(
DNI VARCHAR(20),
NOMBRE VARCHAR(150),
DIRECCION1 VARCHAR(150),
DIRECCION2 VARCHAR(150),
BARRIO VARCHAR(50),
CIUDAD VARCHAR(50),
ESTADO VARCHAR(50),
CP VARCHAR(10),
EDAD SMALLINT,
SEXO VARCHAR(1),
LIMITE_CREDITO FLOAT,
VOLUMEN_COMPRA FLOAT,
PRIMERA_COMPRA BIT(1));

/*seleccionar una tabla de la base de datos*/
SELECT * FROM EJEMPLO;

/*eliminar tabla*/
DROP TABLE EJEMPLO;

DROP DATABASE ejemplo;

/*creamos tabla vendedores*/
CREATE TABLE TABLA_DE_VENDEDORES (
    MATRICULA varchar(5), 
    NOMBRE varchar(100), 
    PORCENTAJE_COMISION float);