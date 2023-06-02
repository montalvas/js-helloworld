class Tela {
    constructor (lancamentoService) {
        this.lancamentoService = lancamentoService;    
        this.init();
    }

    async init () {
        const lancamentos = await this.lancamentoService.getLancamentos();
        this.ano = new Ano();
        
        for (const lancamento of lancamentos) {
            this.ano.adicionarLancamento(lancamento.mes, new Lancamento (
                lancamento.categoria, lancamento.tipo, parseFloat(lancamento.valor), lancamento.idLancamento
            ));
        }

        this.ano.calcularSaldo();
        this.renderizar();
    }

    novoLancamento() {
        const nomeMes = this.mesSelect.getValue();
        const categoria = this.inputTypeText.getValue();
        const tipo = this.tipoSelect.getValue();
        const valor = this.inputTypeNumber.getValue();
    
        this.ano.adicionarLancamento(nomeMes, new Lancamento (categoria, tipo, valor));
        const lancamento = {mes: nomeMes, categoria: categoria, tipo: tipo, valor: valor}
        this.lancamentoService.saveLancamento(lancamento);

        this.ano.calcularSaldo();
        this.renderizar();
    }

    deletarLancamento(mes, lancamento) {
        this.lancamentoService.deleteLancamento(lancamento.idLancamento);
        this.ano.deletarLancamento(mes, lancamento);
        this.ano.calcularSaldo();
        this.renderizar();
    }

    formataValor(valor) {
        return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor)
    }

    renderizar() {
        document.getElementsByClassName("app")[0].remove();
        const app = new Div("app");
        
        const mainTitle = new Title("h1", "FINANÇAS PESSOAIS");
        app.addChild(mainTitle.element);

        const form = this.criarForm();
        app.addChild(form.element);
        
        const grafico = this.criarGrafico();
        app.addChild(grafico.element);
        
        for (const mes of this.ano.meses) {
            const title = new Title("h4", mes.nome.toUpperCase());
            app.addChild(title.element);

            const tabelaLancamentos = this.criarTabelaLancamentos(mes);
            app.addChild(tabelaLancamentos.element);
        }

        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }

    criarForm() {
        const form = new Div("form-lancamento");
        this.mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            this.mesSelect.addOption(mes.nome);
        }
    
        this.inputTypeText = new Input("text", "categoria", "Categoria");
    
        this.tipoSelect = new Select("tipo");
        this.tipoSelect.addOption("receita");
        this.tipoSelect.addOption("despesa");
    
        this.inputTypeNumber = new Input("number", "valor", "Valor");
        const button = new Button("btn-add-lancamento", "Adicionar Lançamento");
        button.addEventListener(() => {
            this.novoLancamento();
        });
    
        form.addChild(this.mesSelect.element);
        form.addChild(this.inputTypeText.element);
        form.addChild(this.tipoSelect.element);
        form.addChild(this.inputTypeNumber.element);
        form.addChild(button.element);

        return form
    }

    criarGrafico() {
        const grafico = new Grafico();

        for (const mes of this.ano.meses) {
            grafico.addBars(mes.nome, mes.balancoDoMes.saldo);
        }

        return grafico
    }

    criarTabelaLancamentos (mes) {
        const tabelaLancamentos = new Tabela("tabela-lancamento");
            tabelaLancamentos.addRow("th", ["Tipo", "Categoria", "Valor", ""]);
    
            for (const lancamento of mes.lancamentos) {
                const button = new Button("delete-lancamento", "delete");
                button.addEventListener(() => {
                    this.deletarLancamento(mes, lancamento);
                });

                tabelaLancamentos.addRow("td", [lancamento.tipo, lancamento.categoria, this.formataValor(lancamento.getValorTipo())], [button]);
            }
    
            tabelaLancamentos.addRow("th", ["Juros", "", this.formataValor(mes.balancoDoMes.juros), ""], );
            tabelaLancamentos.addRow("th", ["Rendimentos", "", this.formataValor(mes.balancoDoMes.rendimentos), ""], );
            tabelaLancamentos.addRow("th", ["Saldo", "", this.formataValor(mes.balancoDoMes.saldo), ""], );

            return tabelaLancamentos
    }
}