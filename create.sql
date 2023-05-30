create database app;

create schema financas_pessoais;

create table financas_pessoais.lancamento (
    id_lancamento serial primary key,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Aluguel', 'despesa', 1000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Conta de luz', 'despesa', 200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Conta de água', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Salário', 'receita', 4000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Conta de luz', 'despesa', 240);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Conta de água', 'despesa', 120);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Lanches', 'despesa', 380);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Salário', 'receita', 4000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Conta de luz', 'despesa', 280);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Conta de água', 'despesa', 110);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Roupas', 'despesa', 560);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Farmácia', 'despesa', 180);