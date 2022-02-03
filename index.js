const inquirer = require('inquirer');
const fs = require('fs');
const htmlHelper = require('./src/Team.js');

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
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        teamMembers.push(newManager);
        team();
    })

const team = () => {
    inquirer 
    .prompt([
    {
        type: 'list',
        message: `Who would you like to add to your team?`,
        choices: ['Engineer', 'Intern', 'No more team members'],
        name: 'addTeamMember',
    }, 
    ])
    .then(answers => {
        if (answers.addTeamMember === 'Engineer') {
            newEngineer();
        } else if (answers.addTeamMember === 'Intern') {
            newIntern();
        } else if (answers.addTeamMember === 'No more team members') {
            completeTeam();
        }
    })
};

const newEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: `Engineer's name`,
            name: 'engineerName',
        },
        {
            type: 'input',
            message: `Engineer's id`,
            name: 'engineerId',
        },
        {
            type: 'input',
            message: `Engineer's email`,
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: `Engineer's github username`,
            name: 'engineerGithub',
        },
    ])
    .then(answers => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(newEngineer);
        team();
    });
};

const newIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: `Intern's name`,
            name: 'internName',
        },
        {
            type: 'input',
            message: `Intern's id`,
            name: 'internId',
        },
        {
            type: 'input',
            message: `Intern's email`,
            name: 'internEmail',
        },
        {
            type: 'input',
            message: `Intern's school`,
            name: 'internSchool',
        },
    ])
    .then(answers => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(newIntern);
        team();
    });
};

const completeTeam = () => {
    console.log(teamMembers);
    let htmlFinish = htmlHelper(teamMembers);
    console.log(htmlFinish);
    fs.writeFile('./dist/index.html', htmlFinish, (e) => {
        if (e)
            console.log(e);
        else {
            console.log('index file created successfully');
        }
    });
}

