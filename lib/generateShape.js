const { Square, Circle, Triangle } = require("./shapes");

function generateShape(shape_input, shape_color_input) {
	let userShape;

	if (shape_input === "Square" || shape_input === "square") {
		userShape = new Square();
		console.log("Inputted Square shape");
	}
	else if (shape_input === "Circle" || shape_input === "circle") {
		userShape = new Circle();
		console.log("Inputted Circle shape");
	}
	else if (shape_input === "Triangle" || shape_input === "triangle") {
		userShape = new Triangle();
		console.log("Inputted Triangle shape");
	}
	userShape.setColor(shape_color_input);

	return userShape;
}

module.exports = { generateShape };