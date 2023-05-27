class Grafico {
    constructor () {
        this.element = document.createElement("div");
        this.element.className = "grafico";
        this.colors = ["blue", "green", "red"];
    }

    addBars (text, value) {
        const bar = document.createElement("div");
        bar.className = "grafico-coluna";

        const color = document.createElement("div");
        color.style.backgroundColor = this.colors.pop();
        color.style.height = `${(value * 100) / 10000}px`;

        const label = document.createElement("div");
        label.className = "grafico-coluna-texto";
        label.innerText = text;

        bar.appendChild(color);
        bar.appendChild(label);
        this.element.appendChild(bar);
    }
}