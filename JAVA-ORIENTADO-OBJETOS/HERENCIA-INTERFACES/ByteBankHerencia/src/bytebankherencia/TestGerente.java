
package bytebankherencia;

public class TestGerente {
    public static void main(String[] args) {
        Gerente gerente = new Gerente();
        gerente.setSalario(6000);
        gerente.setClave("AluraCursos");
        
        System.out.println(gerente.getBonificacion());
        System.out.println(gerente.iniciarSesion("AluraCursos"));
    }
}
