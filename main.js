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

function addElement(parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text) element.innerText = text;
    parent.appendChild(element);
}

function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) app.firstChild.remove();

    const painel = document.createElement("div");
    const grafico = new Grafico();

    for (mes of ano.meses) {
        grafico.addBars(mes.nome, mes.balancoDoMes.saldo);
    }
    painel.appendChild(grafico.element);
    
    for (mes of ano.meses) {
        addElement(painel, "h4", mes.nome.toUpperCase());

        const tabelaLancamentos = new Tabela("tabela-lancamento");
        tabelaLancamentos.addRow("th", ["Tipo", "Categoria", "Valor"]);

        for (lancamento of mes.lancamentos) {
            tabelaLancamentos.addRow("td", [lancamento.tipo, lancamento.categoria, formataValor(lancamento.getValorTipo())]);
        }

        tabelaLancamentos.addRow("th", ["", "Juros", formataValor(mes.balancoDoMes.juros)]);
        tabelaLancamentos.addRow("th", ["", "Rendimentos", formataValor(mes.balancoDoMes.rendimentos)]);
        tabelaLancamentos.addRow("th", ["", "Saldo", formataValor(mes.balancoDoMes.saldo)]);
        
        painel.appendChild(tabelaLancamentos.element);
    }

    app.appendChild(painel);
}

renderizar();

function novoLancamento() {
    const nomeMes = document.getElementById("mes").value;
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("tipo").value;
    const valor = Number(document.getElementById("valor").value);

    ano.adicionarLancamento(nomeMes, new Lancamento (categoria, tipo, valor));
    ano.calcularSaldo();
    
    renderizar();

    document.getElementById("mes").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("valor").value = "";
}

const button = document.getElementById("btn-add-lancamento");
button.addEventListener('click', novoLancamento);

const selectMes = document.getElementById("mes");
for (mes of ano.meses) {
    const option = document.createElement("option");
    option.text = mes.nome;
    selectMes.add(option);
}