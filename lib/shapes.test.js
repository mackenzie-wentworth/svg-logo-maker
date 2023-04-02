// Jest tests for shapes (write tests first before creating shapes.js file!)
// TODO: Create a test for a render() method for EACH shape class --> test should RETURN a string for the corresponding SVG file with the given SHAPE COLOR

const Shape = require('./shapes');

// describe circle
describe('Shape', () => {
    describe('circle', () => {
        it('should render a circle', () => {
            const str = '';
            const shape = new Circle
            shape.setColor("pink");
            expect(shape.render()).toEqual('');
        });
    });
});
// describe square
describe('Shape', () => {
    describe('square', () => {
        it('should render a square', () => {
            const str = '';
            const shape = new Square
            shape.setColor("green");
            expect(shape.render()).toEqual('');
        });
    });
});

// describe triangle
describe('Shape', () => {
    describe('triangle', () => {
        it('should render a triangle', () => {
            const str = '';
            const shape = new Triangle
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});