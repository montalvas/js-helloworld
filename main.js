// janeiro
const janeiro = new Mes("Janeiro");

janeiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1000));
janeiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento ("Internet", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento ("Transporte", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento ("Lazer", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento ("Alimentação", "despesa", 500));

// fevereiro
const fevereiro = new Mes("Fevereiro");

fevereiro.adicionarLancamento(new Lancamento ("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento ("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento ("Conta de luz", "despesa", 250));
fevereiro.adicionarLancamento(new Lancamento ("Conta de água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento ("Internet", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento ("Transporte", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento ("Alimentação", "despesa", 1000));

// março
const marco = new Mes("Março");
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

console.log(ano.meses);

janeiro.adicionarLancamento(new Lancamento("escola", "despesa", 250));
ano.calcularSaldo();
