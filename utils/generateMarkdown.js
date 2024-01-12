// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license == 'Apache 2.0 License'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(license =='Boost Software License 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else {
    console.log('no license selected');
  
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT'){
  return '(https://opensource.org/licenses/MIT)'
}else if (license == 'Apache 2.0 License'){
  return '(https://opensource.org/licenses/Apache-2.0)'
}else if(license == 'Boost Software License 1.0'){
  return '(https://www.boost.org/LICENSE_1_0.txt)'
}else{
  console.log('no license selected')
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# Title 
${answers.title}
## Description  
${answers.description}
## Table of Contents  
${answers.table_of_contents}
## Usgae  
${answers.usage}
## License 
${renderLicenseBadge(answers.license)}
${renderLicenseLink(answers.license)}
${renderLicenseSection(answers.license)}
## Contributing 
${answers.contributing}
## Tests 
${answers.tests}
## Questions 
${answers.questions}
`;
}

module.exports = generateMarkdown;
