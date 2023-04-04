// Parent shape class and use inheritance to reuse the code in child classes

class Shape {

    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);
    }
}

class Square extends Shape {
    render() {
        const square = `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
        return square;
    }
}

class Circle extends Shape {
    render() {
        const circle = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        return circle;
    }
}

class Triangle extends Shape {
    render() {
        const triangle = `<polygon points="10,150 290,150 150,10" fill="${this.color}"/>`;
        return triangle;
    }
}

// Exports 'Triangle', 'Circle', and 'Square' classes
module.exports = { Square, Circle, Triangle }; 
