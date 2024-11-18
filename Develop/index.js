// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'Provide installation instructions:' },
    { type: 'input', name: 'usage', message: 'Provide usage information:' },
    { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { 
      type: 'list', 
      name: 'license', 
      message: 'Choose a license for your project:', 
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'] 
    },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(`Error writing to file: ${err}`);
        } else {
          console.log(`Success! Your README.md file has been generated.`);
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers); 
      writeToFile('./files/README.md', markdown);        
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();
