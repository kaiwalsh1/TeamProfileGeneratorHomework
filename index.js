const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer 
    .prompt([
    {
        type: 'input',
        message: `Manager's name`,
        name: 'managerName',
    },
    {
        type: 'input',
        message: `Manager's Employee ID`,
        name: 'managerId',
    },
    {
        type: 'input',
        message: `Manager's email address`,
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: `Manager's office number`,
        name: 'managerNumber',
    },    
    ])
    .then(answers => {
        
    })