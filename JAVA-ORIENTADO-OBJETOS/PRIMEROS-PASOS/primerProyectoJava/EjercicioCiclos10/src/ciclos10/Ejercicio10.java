
package ciclos10;

import javax.swing.JOptionPane;

public class Ejercicio10 {
    public static void main(String[] args) {
        int contador = 1, numero, sumaTotal = 0;
        while(contador <= 10){
            numero = Integer.parseInt(JOptionPane.showInputDialog(contador+". "
                    + "Digite un número: "));
            sumaTotal += numero;
            contador++;
        }
        JOptionPane.showMessageDialog(null, "La suma total de los "
                + "números ingresados es: "+ sumaTotal);
    }
}
