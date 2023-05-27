class Div {
    constructor (classname) {
        this.element = document.createElement("div");
        this.element.className = classname;
    }

    addChild (child) {
        this.element.appendChild(child);
    }
}