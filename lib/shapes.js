
// TODO: Create PARENT shape class and use inheritance to reuse the code in child classes
// Use 'async' to take in data to generate an SVG file

class Shape {

    constructor(){
        this.color='';
    }
    setColor(color){
        this.color=(color);
    }
}

class Square extends Shape{
    render(){
        const square = `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
        return square;
    }
}

class Circle extends Shape{
    render(){
        const circle =  `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        return circle;
    }
}

class Triangle extends Shape{
    render(){
        const triangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
        return triangle;
    }
}

// Exports 'Triangle', 'Circle', and 'Square' classes
module.exports = {Square, Circle, Triangle}; 


// class Shape {
//     constructor(setText, setTextColor, setShape, setShapeColor){
//         this.setText = setText;
//         this.setTextColor = setTextColor;
//         this.setShape = setShape;
//         this.setColor(setShapeColor) = setShapeColor
//     }
// }

// class Square extends Shape{
//     constructor(setText, setTextColor, setShape, setShapeColor) {
//         render(setShape){
//             const square = `<rect x="50" width="200" height="200"  fill="${this.color}"/>`;
//             return square;
//         }
//     }
// }

// class Circle extends Shape{
//     constructor(setText, setTextColor, setShape, setShapeColor) {
//         render(setShape) => {
//             const circle =  `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
//             return circle;
//         }
//     }
// }

// class Triangle extends Shape{
//     constructor(setText, setTextColor, setShape, setShapeColor) {
//         render(setShape){
//             const triangle = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
//             return triangle;
//         } 
//     }
// }
