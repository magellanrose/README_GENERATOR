// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'whats the title?',
},{
    type: 'input',
    name: 'description',
    message:'whats your description?'
},{
    type: 'input',
    name: 'table_of_contents',
    message:'what are your table of contents?'

},{
    type: 'input',
    name: 'usage',
    message:'what is the usage information?'
},{
    type: 'input',
    name: 'license',
    message:'what is the license?'
},{
    type: 'input',
    name: 'contributing',
    message:'who contributed?'
},{
    type: 'input',
    name: 'tests',
    message:'are there any tests?'
},{
    type: 'input',
    name: 'questions',
    message:'are there any questions?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //run a function that creates the md file with its content
}

// TODO: Create a function to initialize app
function init() {
 inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)

    //writeToFile('README.md', data) //data equals to the user inputs
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
