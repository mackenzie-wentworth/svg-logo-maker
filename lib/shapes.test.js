// Jest tests for shapes (write tests first before creating shapes.js file!)
// TODO: Create a test for a render() method for EACH shape class --> test should RETURN a string for the corresponding SVG file with the given SHAPE COLOR

const {Square, Circle, Triangle} = require('./shapes');

// describe square
describe('Shape', () => {
    describe('square', () => {
        it('should render a square', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="pink"/>`);
        });
    });
});
// describe circle
describe('Shape', () => {
    describe('circle', () => {
        it('should render a circle', () => {
            const shape = new Circle();
            shape.setColor("orange");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="orange"/>`);
        });
    });
});

// describe triangle
describe('Shape', () => {
    describe('triangle', () => {
        it('should render a triangle', () => {
            const shape = new Triangle();
            // var color = "";
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
        });
    });
});