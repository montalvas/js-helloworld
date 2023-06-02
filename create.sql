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
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Salário', 'receita', 4000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Conta de luz', 'despesa', 280);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Conta de água', 'despesa', 110);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Roupas', 'despesa', 560);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('março', 'Farmácia', 'despesa', 180);