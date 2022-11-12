SELECT * FROM tabla_de_vendedores;

UPDATE tabla_de_vendedores SET PORCENTAJE_COMISION = 0.11
WHERE MATRICULA = "00236";

UPDATE tabla_de_vendedores SET NOMBRE = "Joan Geraldo de la Fonseca Junior"
WHERE MATRICULA = "00233";

SELECT * FROM tabla_de_vendedores;