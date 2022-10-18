/*
Ejercicio 10: Pedir 10 números y escribir la suma total
Hacerlo con la clase Scanner y JOptionPane
*/
package ciclos10;

import java.util.Scanner;

public class Ciclos10 {
    public static void main(String[] args) {
        int contador = 1, numero, sumaTotal = 0;
        Scanner input = new Scanner(System.in);
        while(contador <= 10){
            System.out.print(contador+". Digite un número: ");
            numero = Integer.parseInt(input.nextLine());
            sumaTotal += numero;
            contador++;
        }
        System.out.println("La suma total de los números "
                + "ingresados es: "+sumaTotal);
        
    }
}
