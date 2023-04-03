// Array of question prompts that run in the terminal using inquirer for the user to respond to and generate logo data
const Questions = [
    {
        type: "input",
        message: "LOGO TEXT: Please enter up to (3) characters to be displayed on your logo:",
        name: "text",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Please enter a text color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        message: "LOGO SHAPE: Please choose which shape you would like to use for your logo:",
        name: "shape-type",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "SHAPE COLOR: Please enter a shape color keyword (OR a hexadecimal number):",
    },

];

module.exports = {Questions};