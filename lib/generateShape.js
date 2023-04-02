const Shape = require("./shapes");

function generateShape(shape_input, shape_color_input ) {
	let user_shape;


	if (shape_input === "Square" || shape_input === "square") {
		user_shape = new Square();
		console.log("Inputted Square shape");
	}
	else if (shape_input === "Circle" || shape_input === "circle") {
		user_shape = new Circle();
		console.log("Inputted Circle shape");
	}
	else if (shape_input === "Triangle" || shape_input === "triangle") {
		user_shape = new Triangle();
		console.log("Inputted Triangle shape");
	}
	user_shape.setColor(shape_color_input);

	return user_shape;
}

module.exports = {generateShape};