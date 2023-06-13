function renderLicenseBadge(license) {
  return [];
}

function renderLicenseLink(license) {
  return [];
}

function renderLicenseSection(license) {
  return [];
}

function generateMarkdown(data) {
  return `# ${data.title}
##License:
[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Contribution:
${data.contributing}
## Testing:
${data.tests}
## Contact Information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](Email me at: thecasualtheologian@gmail.com) `;
}

module.exports = generateMarkdown;
