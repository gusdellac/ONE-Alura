
package bytebankherencia;

public class TestFuncionario {
    public static void main(String[] args) {
        Funcionario diego = new Gerente();
        diego.setNombre("Diego");
        diego.setDocumento("464646556");
        diego.setSalario(2000);
        
        System.out.println(diego.getNombre()+" "+diego.getDocumento()+" "+ 
                diego.getSalario());
        
        System.out.println(diego.getSalario());
        System.out.println(diego.getBonificacion());
    }
}
