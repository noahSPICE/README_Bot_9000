// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your application's title name?",
        name: 'title',
        default: 'App Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please input a proper app title");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Make sure you have node.js installed -- Version 16. Make sure VS Code is also installed",
        name: 'installation'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
