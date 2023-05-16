class Mes {

    constructor(nome) {
        if (nome === "") throw new Error ("Mês inválido: nome do mês é obrigatório");

        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const mesValido = meses.find(mes => mes === nome.toLowerCase());
        if (mesValido === undefined) throw new Error("Mês inválido: nome do mês não existe!");

        this.nome = nome;
        this.saldoInicial = 0;
        this.balancoDoMes = {
            saldo: 0,
            rendimentos: 0,
            juros: 0,
            receitas: 0,
            despesas: 0,
            proporcaoDeGastos: []
        }
        this.lancamentos = [];

    }

    adicionarLancamento(lancamento) {
        this.lancamentos.push(lancamento)
    }

    calcularSaldo() {
        this.balancoDoMes = {saldo: 0, rendimentos: 0, juros: 0, receitas: 0, despesas: 0, proporcaoDeGastos: []}
        this.balancoDoMes.saldo = this.saldoInicial;

        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.balancoDoMes.saldo += lancamento.valor;
                this.balancoDoMes.receitas += lancamento.valor;
            }
            if (lancamento.tipo === "despesa") {
                this.balancoDoMes.saldo -= lancamento.valor;
                this.balancoDoMes.despesas += lancamento.valor
            }
        }

        this.calcularPorcentagem();
        this.apurarRendimentos();
        this.apurarJuros();
    }

    calcularPorcentagem() {
        const lista = [];

        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa") {
                const porcentagem = arredondar((lancamento.valor / this.balancoDoMes.despesas) * 100);
                lista.push({ categoria: lancamento.categoria, porcentagem });
            }
        }

        this.balancoDoMes.proporcaoDeGastos = lista;
    }

    apurarRendimentos() {
        if (this.balancoDoMes.saldo > 0) {
            this.balancoDoMes.rendimentos = this.calcularRendimentos(this.balancoDoMes.saldo);
            this.balancoDoMes.saldo = arredondar(this.balancoDoMes.saldo + this.balancoDoMes.rendimentos);
        }
    }

    calcularRendimentos(saldo) {
        return arredondar(saldo *= 0.005);
    }

    apurarJuros() {
        if (this.balancoDoMes.saldo < 0) {
            this.balancoDoMes.juros = this.calcularJuros(this.balancoDoMes.saldo);
            this.balancoDoMes.saldo = arredondar(this.balancoDoMes.saldo - this.balancoDoMes.juros);
        }
    }

    calcularJuros(saldo) {
        return arredondar(saldo *= 0.1);
    }
}