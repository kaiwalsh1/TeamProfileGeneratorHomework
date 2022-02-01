const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

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
        console.log(answers);
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        teamMembers.push(newManager);
    })

const team = () => {
    inquirer 
    .prompt([
    {
        type: 'input',
        message: `Manager's name`,
        name: 'managerName',
    }, 
    ])
};