// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');
const {generateShape} = require('./lib/generateShape');

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

    function writeToFile(fileName, data) {
        console.log("Writing" + data +  "to" + fileName + "file!")
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success! Please see the 'dist' folder for the logo.svg file you just created!");
        });
    }

    // function init() {
    //     inquirer.prompt(questions)
    //         .then((data) => {
    //             const filename = './dist/logo.svg';

    //             fs.writeToFile(filename, (err) =>
    //             err ? console.log(err) : console.log('Success! Please see the "dist" folder for the logo.svg file you just created!')
    //             );
    //         });
    // }

    // Function call to initialize SVG logo app
    // init();
