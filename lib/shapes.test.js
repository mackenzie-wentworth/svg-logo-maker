// Jest tests for shapes (write tests first before creating shapes.js file!)
// Tests for a render() method for EACH shape class --> test should return a string for the corresponding SVG file with the given SHAPE COLOR

const { Square, Circle, Triangle } = require('./shapes');

// describe square
describe('Shape', () => {
    describe('square', () => {
        it('should render a square correctly', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="pink"/>`);
        });
    });
});
// describe circle
describe('Shape', () => {
    describe('circle', () => {
        it('should render a circle correctly', () => {
            const shape = new Circle();
            shape.setColor("orange");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="orange"/>`);
        });
    });
});

// describe triangle
describe('Shape', () => {
    describe('triangle', () => {
        it('should render a triangle correctly', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon points="10,150 290,150 150,10" fill="blue"/>`);
        });
    });
});