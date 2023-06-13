// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown= require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your application's title name?",
    name: "title",
    validate: your_input => {
      if (your_input) {
        return true;
      }else{
        console.log("Please input a proper app title");
        return false;
      }
      
    },
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    validate: your_description => {
      if (your_description) {
        return true;
      } else {
        console.log("A valid project description is required.");
        return false;
      }
      
    },
  },
  {
    type: "input",
    message:
      "This is how you install. Type 'npm install'",
    name: "installation",
    validate: your_installation => {
        if (your_installation) {
            return true;
        } else {
            console.log('Make sure you have node.js installed -- Version 16. Make sure VS Code is also installed.');
            return false;
        }
    }
  },
  {
    type: "input",
    message:
      "How do you plan on using/testing this file?",
    name: "usage",
    validate: your_usage => {
        if (your_usage) {
            return true;
        } else {
            console.log('Please describe your usage!');
            return false;
        }
    }
  },
  {
    type: "checkbox",
    message: "CHOOSE YOUR LISCENCE, PADAWAN",
    name: "license",
    choices: [
      "GNU",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "The Unlicense",
    ],
validate: your_license => {
    if (your_license) {
        return true;
    } else {
        console.log("Please choose a license!");
        return false;
    }
}
  },
  {
    type: "input",
    message: "How could you contribute to this project?",
    name: "contributing",
    validate: your_contribution => {
        if (your_contribution) {
            return true;
        } else {
            console.log("Please provide a description of how you would contribute.");
            return false;
        }
    }
  },
  {
    type: "input",
    message: "How does a user test/run this project?",
    name: "tests",
    validate: (your_test) => {
        if (your_test) {
            return true;
        } else {
            console.log("Plesase explain how you test this project!");
            return false;
        }
    }
  },
  {
    type: "input",
    message:
      "Enter Github username. :)",
    name: "username",
    validate: github_input => {
        if (github_input) {
            return true;
        } else {
            console.log("Please enter your Github username... NOW!");
            return false;
        }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Ah, the smell of victory! Your README file has been created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
