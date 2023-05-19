class Ano {
    constructor () {
        this.meses = []
    }

    adicionarMes (novoMes) {
        for (const mes of this.meses) {
            if (novoMes.nome === mes.nome) throw new Error ("Mês inválido: mês já existe.");
        }

        this.meses.push(novoMes);
    }

    calcularSaldo() {
        let saldoInicial = 0;

        for (const mes of this.meses) {
            mes.saldoInicial = saldoInicial;
            mes.calcularSaldo();
            saldoInicial = mes.balancoDoMes.saldo;
        }
    }
}