/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));

//const cliente2 = new Cliente('María','16979808','8989');
//cliente2.asignarClave('222');
//console.log(SistemaAutenticacion.login(cliente2,'2222'));

const empleado = new Empleado('Juan Perez', '1234343',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente =  new Gerente('Pedro Rivas', '2344653',10000);
gerente.asignarClave('12345');
console.log(SistemaAutenticacion.login(gerente,'12345'));

const director = new Director('Elena Moreno','4654626',10000);




