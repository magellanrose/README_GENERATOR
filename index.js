// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'whats the title?',
}, {
    type: 'input',
    name: 'description',
    message: 'whats your description?'
}, {
    type: 'input',
    name: 'table_of_contents',
    message: 'what are your table of contents?'

}, {
    type: 'input',
    name: 'usage',
    message: 'what is the usage information?'
}, {
    type: 'list',
    name: 'license',
    message: 'please choose a license?',
    choices: ['MIT', 'Apache 2.0 License', 'Boost Software License 1.0']
}, {
    type: 'input',
    name: 'contributing',
    message: 'who contributed?'
}, {
    type: 'input',
    name: 'tests',
    message: 'are there any tests?'
}, {
    type: 'input',
    name: 'questions',
    message: 'are there any questions?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error making README.md file', err);
        } else {
            console.log('README.md file created successfully.')
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const makeReadMe = generateMarkdown(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
}

// Function call to initialize app
init();
