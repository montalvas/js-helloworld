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

function renderizar() {
    const app = document.getElementById("app");
    if (app.firstChild) app.firstChild.remove();

    const painel = document.createElement("div");
    
    for (mes of ano.meses) {
        addElement(painel, "h4", mes.nome.toUpperCase());

        for (lancamento of mes.lancamentos) {
            const informacoesLancamento = `${lancamento.tipo} ${lancamento.categoria} ${lancamento.valor}`
            addElement(painel, "p", informacoesLancamento);
        }

        addElement(painel, "h4", "Saldo: " + mes.balancoDoMes.saldo);
        addElement(painel, "hr");
    }

    app.appendChild(painel);
}

renderizar();

function recebeOuCriaMes(nomeMes) {
    for (mes of ano.meses) {
        if (mes.nome === nomeMes) return mes
    }
    
    return new Mes(nomeMes);
}

function novoLancamento() {
    const nomeMes = document.getElementById("mes").value;
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("tipo").value;
    const valor = Number(document.getElementById("valor").value);

    const novoMes = recebeOuCriaMes(nomeMes);
    novoMes.adicionarLancamento(new Lancamento(categoria, tipo, valor));

    ano.adicionarMes(novoMes);
    ano.calcularSaldo();
    renderizar();

    document.getElementById("mes").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("valor").value = "";
}

const button = document.getElementById("btn-add-lancamento");
button.addEventListener('click', novoLancamento);

