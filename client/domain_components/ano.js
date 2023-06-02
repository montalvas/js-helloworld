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

    adicionarLancamento(nomeMes, lancamento) {
        if (!this.meses.some(mes => mes.nome === nomeMes)) {
            this.adicionarMes(new Mes(nomeMes));
        }

        for (const mes of this.meses) {
            if (nomeMes === mes.nome) {
                mes.adicionarLancamento(lancamento);
                break;
            }
        }
    }

    deletarLancamento(nomeMes, lancamento) {
        const position = nomeMes.lancamentos.splice(nomeMes.lancamentos.indexOf(lancamento), 1);
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