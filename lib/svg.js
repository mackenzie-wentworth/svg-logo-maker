class Svg {

    openSvgTag = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">`;

    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        var svgObject = this.openSvgTag + this.shapeElement + this.textElement + `</svg>`;
        return svgObject;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }

}

module.exports = Svg;