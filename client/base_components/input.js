class Input {
    constructor (type, id, placeholder) {
        this.element = document.createElement("input");
        this.element.type = type;
        this.element.id = id;
        this.element.placeholder = placeholder;
    }

    getValue() {
        if (this.element.type === "number") return this.element.valueAsNumber;
        return this.element.value;
    }
}