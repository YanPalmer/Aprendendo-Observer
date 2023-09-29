// Consigo criar instâncias? NÃO
// O que ele faz? Notifica algo
interface Observador {
    notificar(mensagem: string): void;
}


abstract class Observado {
    // Vai ter uma lista de observadores
    private observadores: Observador[] = [];

    public adicionarObservador(observador: Observador): void {
        this.observadores.push(observador);
        console.log("Observador adicionado");
    }

    public removerObservador(observador: Observador): void {
        this.observadores = this.observadores.filter((obs) => obs !== observador);
        console.log(`Observador removido`);
    }

    public notificarObservadores(mensagem: string): void {
        this.observadores.forEach((observador) => observador.notificar(mensagem));
    }
}

// class Select extends Observado {
//     private opcoes: string[] = [];

//     constructor(opcoes: string[]) {
//         super();
//         this.opcoes = opcoes;
//     }

//     selecionarOpcao(opcao: string): void {

//     }
// }

class Botao extends Observado {
    private texto: string;

    constructor(texto: string) {
        super();
        this.texto = texto;
    }
    clicar(): void {
        this.notificarObservadores(this.texto);
    }
}

class ObservadorConcreto implements Observador {
    notificar(mensagem: string): void {
        console.log(`Botão clicado: ${mensagem}`)
    }
}

// Cria um novo botão com o texto "Cadastrar"
const botao1 = new Botao("Cadastrar");

// Cria um observadorConcreto definido com o "console.log(`Botão clicado: ${mensagem}`)"
const observador1 = new ObservadorConcreto();

// Adiciona a instância observador ao botão1
botao1.adicionarObservador(observador1);

// Ao receber um click irá notificar todos os observadores existentes
botao1.clicar();

botao1.removerObservador(observador1);

botao1.clicar();