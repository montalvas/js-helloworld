class Tela {
    constructor () {
        // janeiro
        const janeiro = new Mes("janeiro");

        janeiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
        janeiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1000));
        janeiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 200));
        janeiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));

        // fevereiro
        const fevereiro = new Mes("fevereiro");

        fevereiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
        fevereiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1200));
        fevereiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 250));
        fevereiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));

        // março
        const marco = new Mes("março");
        marco.adicionarLancamento(new Lancamento ("Salário", "receita", 4000));
        marco.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1200));
        marco.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 200));
        marco.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));

        const ano = new Ano();

        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.calcularSaldo();

        janeiro.adicionarLancamento(new Lancamento("escola", "despesa", 250));
        ano.calcularSaldo();

        this.ano = ano;
    }

    novoLancamento() {
        const nomeMes = document.getElementById("mes").value;
        const categoria = document.getElementById("categoria").value;
        const tipo = document.getElementById("tipo").value;
        const valor = Number(document.getElementById("valor").value);
    
        this.ano.adicionarLancamento(nomeMes, new Lancamento (categoria, tipo, valor));
        this.ano.calcularSaldo();
        
        this.renderizar();
    
        document.getElementById("categoria").value = "";
        document.getElementById("valor").value = "";
    }

    formataValor(valor) {
        return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor)
    }

    renderizar() {
        document.getElementsByClassName("app")[0].remove();
        const app = new Div("app");
    
        const mainTitle = new Title("h1", "FINANÇAS PESSOAIS");
        app.addChild(mainTitle.element);
        const form = new Div("form-lancamento");
    
        const mesSelect = new Select("mes");
        for (const mes of this.ano.meses) {
            mesSelect.addOption(mes.nome);
        }
    
        const inputTypeText = new Input("text", "categoria", "Categoria");
    
        const tipoSelect = new Select("tipo");
        tipoSelect.addOption("receita");
        tipoSelect.addOption("despesa");
    
        const inputTypeNumber = new Input("number", "valor", "Valor");
        const button = new Button("btn-add-lancamento", "Adicionar Lançamento");
        button.addEventListener(() => {
            this.novoLancamento();
        });
    
        form.addChild(mesSelect.element);
        form.addChild(inputTypeText.element);
        form.addChild(tipoSelect.element);
        form.addChild(inputTypeNumber.element);
        form.addChild(button.element);
        app.addChild(form.element);
        
        const grafico = new Grafico();
    
        for (const mes of this.ano.meses) {
            grafico.addBars(mes.nome, mes.balancoDoMes.saldo);
        }
    
        app.addChild(grafico.element);
        
        for (const mes of this.ano.meses) {
            const title = new Title("h4", mes.nome.toUpperCase());
            app.addChild(title.element);
    
            const tabelaLancamentos = new Tabela("tabela-lancamento");
            tabelaLancamentos.addRow("th", ["Tipo", "Categoria", "Valor"]);
    
            for (const lancamento of mes.lancamentos) {
                tabelaLancamentos.addRow("td", [lancamento.tipo, lancamento.categoria, this.formataValor(lancamento.getValorTipo())]);
            }
    
            tabelaLancamentos.addRow("th", ["", "Juros", this.formataValor(mes.balancoDoMes.juros)]);
            tabelaLancamentos.addRow("th", ["", "Rendimentos", this.formataValor(mes.balancoDoMes.rendimentos)]);
            tabelaLancamentos.addRow("th", ["", "Saldo", this.formataValor(mes.balancoDoMes.saldo)]);
            
            app.addChild(tabelaLancamentos.element);
        }
        const [body] = document.getElementsByTagName("body");
        body.appendChild(app.element);
    }
}