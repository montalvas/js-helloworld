class Title {
    constructor (type, text) {
        this.element = document.createElement(type);
        this.element.innerText = text;
    }
}