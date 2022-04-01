// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = userData => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter a description of your project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
          }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license(s) did you use with this project? (Check all that apply)',
            choices: ['MIT','ISC','GPL','APACHE2.0', 'PRIVATE', 'Other']
          },
        {
            type: 'input',
            name: 'intallInstruc',
            message: 'Enter detailed installation instructions for the user (Required)',
            validate: intallInstrucInput => {
              if (intallInstrucInput) {
                return true;
              } else {
                console.log('Please enter install instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Enter additional usage information (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('Please enter usage information!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines? (Required)',
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else {
                console.log('Please enter contribution guidelines!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'test',
            message: 'Please enter test instructions (Required)',
            validate: testInput => {
              if (testInput) {
                return true;
              } else {
                console.log('Please enter test instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your emailed address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username(Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
          }
      ]);
    };
    
    
    
    promptUser()
    .then(data =>{
        console.log(data);
        const contentFile = `
# ${data.title}
## ${data.description}
### Table of Contents
* [installation](#installation)
* [license](#license)
* [usage](#usage)
* [contribution](#contribution)
* [test](#test)
* [email](#email)
* [github](#github)


#### Installation
${data.installInstruc}

#### License
![License] (https://img.shields.io/badge/license-${data.license}-green.svg)

#### Usage
${data.usage}

#### Contribution
${data.contribution}

#### Test
${data.test}

#### Email
${data.email}
<${data.email}>

#### Github
${data.github}
[Github](https://github.com/${data.github})

        `
        return contentFile;
    })
    .then(pageHTML => {
        console.log(pageHTML);
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      
    })
    .catch(err => {
      console.log(err);
    });


