/*Palabra LIKE. Esta palabra nos permite realizar una busqueda del elemento que introduzcamos dentro 
del condicional: %condicional%.
%condicional busca los elementos que finalizan con el condicional,
condicional% busca los elementos que inician con el condicional,
%condicional% busca todos los elementos que contengan el condicional (en cualquier posición)*/

SELECT * FROM tabla_de_productos WHERE SABOR LIKE "%manzana";

SELECT * FROM tabla_de_productos WHERE SABOR LIKE "%manzana" 
AND ENVASE = "Botella PET";