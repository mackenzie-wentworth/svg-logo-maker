// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');

inquirer
    .prompt([
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

    ])
    .then((response) =>
        console.log('Success!') 
    );