class Cliente {
    nome;
    cpf;
}
class contaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteAdriano = new contaCorrente();
contaCorrenteAdriano.saldo = 0;
contaCorrenteAdriano.agencia = 1001;


contaCorrenteAdriano.depositar(100);
contaCorrenteAdriano.sacar(50);

console.log(contaCorrenteAdriano)


