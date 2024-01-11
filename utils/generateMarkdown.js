// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[License](https://img.shields.io/badge/License-MIT-blue.svg)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/mit/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Title ${answers.title}
  ## Description ${answers.description}
  ## Table of Contents ${answers.table_of_contents}
  ## Usgae ${answers.usage}
  ## License ${answers.license}
  ## Contributing ${answers.contributing}
  ## Tests ${answers.tests}
  ## Questions ${answers.questions}
`;
}

module.exports = generateMarkdown;
