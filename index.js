// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');
const {generateShape} = require('./lib/generateShape');
const Svg = require('./lib/svg');
const { inherits } = require('util');

// Array of question prompts that run in the terminal using inquirer for the user to respond to and generate logo data
const questions = [
        {
            type: 'input',
            message: 'LOGO TEXT: Please enter up to (3) characters to be displayed on your logo:',
            name: 'text',
        },
        {
            type: "input",
            name: "text-color",
            message: "TEXT COLOR: Please enter a text color keyword (OR a hexadecimal number):",
        },
        {
            type: 'list',
            message: 'LOGO SHAPE: Please choose which shape you would like to use for your logo:',
            name: 'shape-type',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: "input",
            name: "shape-color",
            message: "SHAPE COLOR: Please enter a shape color keyword (OR a hexadecimal number):",
        },

    ];

// TODO: Create function to write to logo.svg file using 'writeToFile'
// TODO: Create function to initialize app by generating logo.svg file under 'dist' folder using 'init()'
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
// Include function to generate NEW SVG pixel image with template literals
// Include function that generates NEW SVG pixel image to url in browser
async function init() {
    return new Promise ((resolve, reject) => {
        console.log("Beginning init process");
        const answers = inquirer.prompt(questions);

        if (answers.text.length > 0 && answers.text.length < 4) {
            text_input = answers.text;
        } else {
            console.log("Invalid input text field detected! Please enter 1-3 Characters, no more and no less");
            return;
        }
    })
}

// TODO: Function CALL to initialize logo.svg app to browser
init();
