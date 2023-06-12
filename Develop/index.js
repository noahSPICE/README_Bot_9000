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
        message: "Make sure you have node.js installed -- Version 16. Make sure VS Code is also installed.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "This is a versitile application that anyone can use. You can usee it for personal or corporate projects/ applications. It is designed to help you for an effective and eloquent README file for your project.",
        name: 'usage'
    },
    {
        type: 'list',
        message: "CHOOSE YOUR LISCENCE, PADAWAN",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "At th moment, this project is not open to any contributions.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "You can test this application by...",
        name: 'tests'
    },
    {
        type: 'input',
        message: "Feel free to contact me on my GitHub @noahSPICE or by email @ thecasualtheologian@gmail.com",
        name: 'questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
