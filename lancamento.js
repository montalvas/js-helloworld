class Lancamento {

    constructor (categoria, tipo, valor) {
        if(categoria === "") throw new Error("Lançamento inválido: Categoria é obrigatória!");

        if(tipo !== "receita" && tipo !== "despesa") throw new Error("Lançamento inválido: Tipo deve ser receita ou despesa");

        if(valor <= 0) throw new Error ("Lançamento inválido: Valor deve ser maior que zero.");

        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;
    }
}