// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shapes');
const {generateShape} = require('./lib/generateShape');
const Svg = require('./lib/svg');
const {Questions} = require("./lib/questions");

// Function to write to logo.svg file using 'writeToFile'
function writeToFile(fileName, data) {
    console.log("Writing " + [data] + "to" + [fileName] + "file!")

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Please see the 'logo.svg' file for the new logo shape you just created!");
     });
}

// Async function init() that returns a promise to handle user input from inquirer Questions prompts and initialize logo.svg image to app
async function init() {
    var svg_image_created = " ";
    var svg_file = "logo.svg";
    var text_input = " ";
    var font_color_input = " ";
    var shape_input = " ";
    var shape_color_input = " ";
     
    inquirer.prompt(Questions)

    .then((answers) => {
        if (answers.text.length > 0 && answers.text.length < 4) {
            text_input = answers.text;
        } else {
            console.log("Invalid input! Please enter 1-3 Characters, no more and no less");
            return;
        }
        console.log("Text input: [" + text_input + "]");

        font_color_input = answers["text-color"];
	    console.log("Font color input: [" + font_color_input + "]");

        shape_input = answers["shape-type"];
        console.log("Shape input = [" + shape_input + "]");

        shape_color_input = answers["shape-color"];
        console.log("Shape color input: [" + shape_color_input + "]");

        let userShape = generateShape(shape_input, shape_color_input);


        const svg = new Svg();
        svg.setTextElement(text_input, font_color_input);
        svg.setShapeElement(userShape)
        svg_image_created = svg.render();

        console.log("Displaying shape:\n\n" + svg_image_created);

        console.log("Logo shape generation complete!");
        console.log("Writing shape to file...");
        return writeToFile(svg_file, svg_image_created);
    })

    .catch((err) => console.log("Unable to generate logo.svg file and svg pixel image", err));
}

// Function call to initialize logo.svg app
init();
