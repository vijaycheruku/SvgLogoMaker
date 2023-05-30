//inquirer package used for questions prompting
const inquirer = require('inquirer');
//fs package to create new file with data
const fs = require('fs');
//importing shape classes
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');

//Array of questions that needs to be prompted for readme file creation.
const questions = [
    {
        type: "input",
        name: "text",
        message: "What text should be displayed in logo(Enter up to three characters)",
        validate: validateText => {
            if (validateText && validateText.length <= 3) {
                return true;
            } else {
                console.log('Please provide a text upto three characters!');
                return false;
            }
        }    
    },
    {
        type: "input",
        name: "textcolor",
        message: "What color is above text displayed?",  
        validate: validateColor => {
            if (validateColor) {
                return true;
            } else {
                console.log('Please provide a color for the text!');
                return false;
            }
        }  
    },
    {
        type: "list",
        name: "shape",
        message: "what is the shape of your required logo? ",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color is the required logo?",
        validate: validateShapeColor => {
            if (validateShapeColor) {
                return true;
            } else {
                console.log('Please provide a color for the shape!');
                return false;
            }
        } 
    }
];

//hardcoded file name as per requirement
const fileName = 'logo';

// writetofile function that created new logo.svg file
function writeToFile(data) {
    fs.writeFile(`${fileName}.svg`, data, 
    (err) => err ? console.error(err) : console.log('Generated logo.svg'))
}

//FUNCTION that creates the svg required
function createshape(userProvidedInputs) {
    let finalSvg;
    if (userProvidedInputs.shape === "triangle") {
        finalSvg = new Triangle(userProvidedInputs.text, userProvidedInputs.textcolor, userProvidedInputs.shapecolor);
    } else if (userProvidedInputs.shape === "square") {
        finalSvg = new Square(userProvidedInputs.text, userProvidedInputs.textcolor, userProvidedInputs.shapecolor);
    } else {
        finalSvg = new Circle(userProvidedInputs.text, userProvidedInputs.textcolor, userProvidedInputs.shapecolor);
    }
    //calling writetofile function
    writeToFile(finalSvg.render());
}


//function getting called on init which is prompting questions to user 
function init() {
   inquirer.prompt(questions).then(userProvidedInputs => {
       //call createshape function
        createshape(userProvidedInputs);
   })
}

// Function call to initialize app
init();
