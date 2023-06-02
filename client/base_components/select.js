class Select {
    constructor (id) {
        this.element = document.createElement("select");
        this.element.id = id;
    }

    addOption(text) {
        const option = document.createElement("option");
        option.innerText = text;
        this.element.appendChild(option);
    }

    getValue() {
        return this.element.value;
    }
}