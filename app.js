const inquirer = require(inquirer);
const fs = require(fs);
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = []

//create role functions

function createManager(){
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter managers name: "
        },
        {
            type: "input",
            name: "Email",
            message: "Enter managers email: "
        },
        {
            type: "input",
            name:"id",
            message:"Enter manager ID: "
        },
        {
            type:"input",
            name: "OfficerNumber",
            message:"Enter managers office Number: "
        }
    ]).then(answers => {
        new Manager (answers.name, answers.Email, answers.id, answers.OfficeNumber);
            teamArray.push(Manager);
    })
};

function createEngineer(){
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter engineers name: "
        },
        {
            type: "input",
            name: "Email",
            message: "Enter engineers email: "
        },
        {
            type: "input",
            name:"id",
            message:"Enter engineer ID: "
        },
        {
            type:"input",
            name: "Github",
            message:"Enter engineers GitHub username: "
        }
    ]).then(answers => {
        new Engineer (answers.name, answers.Email, answers.id, answers.Github);
            teamArray.push(Engineer);
    })
};

function createIntern(){
    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "Enter interns name: "
        },
        {
            type: "input",
            name: "Email",
            message: "Enter interns email: "
        },
        {
            type: "input",
            name:"id",
            message:"Enter interns ID: "
        },
        {
            type:"input",
            name: "School",
            message:"Enter interns school name: "
        }
    ]).then(answers => {
        new Intern (answers.name, answers.Email, answers.id, answers.school);
            teamArray.push(Intern);
    })
};