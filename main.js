// janeiro
const janeiro = new Mes("janeiro");

janeiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento ("Internet", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento ("Transporte", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento ("Lazer", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento ("Alimentação", "despesa", 500));

// fevereiro
const fevereiro = new Mes("fevereiro");

fevereiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento ("Internet", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento ("Transporte", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento ("Alimentação", "despesa", 1000));

// março
const marco = new Mes("março");
marco.adicionarLancamento(new Lancamento ("Salário", "receita", 4000));
marco.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1200));
marco.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 200));
marco.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));
marco.adicionarLancamento(new Lancamento ("Internet", "despesa", 200));
marco.adicionarLancamento(new Lancamento ("Transporte", "despesa", 500));
marco.adicionarLancamento(new Lancamento ("Lazer", "despesa", 800));
marco.adicionarLancamento(new Lancamento ("Alimentação", "despesa", 1000));

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

function cabecalhoTabela() {
    const linha = document.createElement("tr");
    addElement(linha, "th", "Tipo");
    addElement(linha, "th", "Categoria");
    addElement(linha, "th", "Valor");

    return linha
}

function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) app.firstChild.remove();

    const painel = document.createElement("div");
    
    for (mes of ano.meses) {
        addElement(painel, "h4", mes.nome.toUpperCase());

        const tabelaLancamentos = document.createElement("table");
        tabelaLancamentos.appendChild(cabecalhoTabela());

        for (lancamento of mes.lancamentos) {
            const linha = document.createElement("tr");
            addElement(linha, "td", lancamento.tipo);
            addElement(linha, "td", lancamento.categoria);
            addElement(linha, "td", lancamento.valor);

            tabelaLancamentos.appendChild(linha);
        }

        painel.appendChild(tabelaLancamentos);

        const linhaJuros = document.createElement("tr");
        addElement(linhaJuros, "th", "Juros");
        linhaJuros.firstChild.colSpan = 2;
        addElement(linhaJuros, "th", mes.balancoDoMes.juros);
        tabelaLancamentos.appendChild(linhaJuros);

        const linhaRendimentos = document.createElement("tr");
        addElement(linhaRendimentos, "th", "Rendimentos");
        linhaRendimentos.firstChild.colSpan = 2;
        addElement(linhaRendimentos, "th", mes.balancoDoMes.rendimentos);
        tabelaLancamentos.appendChild(linhaRendimentos);

        const linhaSaldo = document.createElement("tr");
        addElement(linhaSaldo, "th", "Saldo");
        linhaSaldo.firstChild.colSpan = 2;
        addElement(linhaSaldo, "th", mes.balancoDoMes.saldo);
        tabelaLancamentos.appendChild(linhaSaldo);
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