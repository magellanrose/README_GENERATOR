// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
  return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`} else {
    return '';
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/license/mit/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License ${data.license}
  ${renderLicenseBadge(data.license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  // # Title ${answers.title}
  ## Description ${answers.description}
  ## Table of Contents ${answers.table_of_contents}
  ## Usgae ${answers.usage}
  ## License ${renderLicenseSection()}
  // ## License ${answers.license}
  // ${renderLicenseBadge(answers.license)}
  ## Contributing ${answers.contributing}
  ## Tests ${answers.tests}
  ## Questions ${answers.questions}
`;
}

module.exports = generateMarkdown;
