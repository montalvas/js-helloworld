class Tabela {
    constructor (classname) {
        this.element = document.createElement("table");
        this.element.className = classname;
    }

    addRow (type, values) {
        const linha = document.createElement("tr");

        for (const value of values) {
            const coluna = document.createElement(type);
            coluna.innerText = value;
            linha.appendChild(coluna);
        }

        this.element.appendChild(linha);
    }
}
