// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes');
const {generateShape} = require('./lib/generateShape');
const Svg = require('./lib/svg');
const {Questions} = require("./lib/questions");

// TODO: Create function to write to logo.svg file using 'writeToFile'
function writeToFile(fileName, data) {
    console.log("Writing" + data +  "to" + fileName + "file!")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Please see the 'dist' folder for the logo.svg file you just created!");
     });
}

// TODO: Create a function that returns a promise to asynchronously handle user input from QUESTIONS prompt
// Include function to initialize app by generating logo.svg file under 'dist' folder using 'init()'
// Include function to generate NEW SVG pixel image with template literals
// Include function that generates NEW SVG pixel image to url in browser
async function init() {
    var svg_image_created = " ";
    var svg_file = "logo.svg";
    var text_input = " ";
    var font_color_input = " ";
    var shape_input = " ";
    var shape_color_input = " ";
    
    return new Promise ((resolve, reject) => {
        console.log("Beginning init process");
        
        const answers = inquirer.prompt(Questions);
        return writeToFile(svg_file, svg_image_created); 
    })
    
    .then((res) => {
        if (answers.text.length > 0 && answers.text.length < 4) {
            text_input = answers.text;
        } else {
            console.log("Invalid input! Please enter 1-3 Characters, no more and no less");
            return;
        }
        console.log("Text input: [" + text_input + "]");
    })
    .then((res) => {
        font_color_input = answers["text-color"];
	    console.log("Font color input: [" + font_color_input + "]");
    })
    .then((res) => {
        shape_input = answers["shape-type"];
        console.log("Shape input = [" + shape_input + "]");
    })
    .then((res) => {
        shape_color_input = answers.shape;
        console.log("Shape color input: [" + shape_color_input + "]");
    })
    .then((res) => {
        let userShape = generateShape(shape_input, shape_color_input);

        const print = new Svg(
            svg.setTextElement(text_input, font_color_input),
            svg.setShapeElement(userShape),
        );
        svg_image_created = svg.render();

        console.log("Displaying shape:\n\n" + svg_image_created);

        console.log("Shape generation complete!");
        console.log("Writing shape to file...");
    })
    
    .catch((err) => console.log("Unable to generate logo.svg file and svg pixel image"));
}


// TODO: Function CALL to initialize logo.svg app to browser
init();
