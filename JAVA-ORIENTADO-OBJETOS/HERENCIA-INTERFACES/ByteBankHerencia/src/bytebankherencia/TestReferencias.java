
package bytebankherencia;

public class TestReferencias {
    public static void main(String[] args) {
        //El elemento más genérico puede ser adaptado
        //                       al elemento más específico
        Funcionario funcionario = new Gerente();
        funcionario.setNombre("Diego");
        Gerente gerente = new Gerente();
        gerente.setNombre("Gustavo");
        
        funcionario.setSalario(2000);
        gerente.setSalario(10000);
    }
}
