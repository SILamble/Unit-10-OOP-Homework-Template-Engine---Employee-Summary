const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./generatehtml");

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
            name: "OfficeNumber",
            message:"Enter managers office Number: "
        }
    ]).then(answers => {
        const manager = new Manager (answers.Name, answers.Email, answers.id, answers.OfficeNumber);
            teamArray.push(manager);
            addMembers();
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
        const engineer = new Engineer (answers.Name, answers.Email, answers.id, answers.Github);
            teamArray.push(engineer);
            addMembers();
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
        const intern = new Intern (answers.Name, answers.Email, answers.id, answers.School);
            teamArray.push(intern);
            addMembers();
    })
};

// Inquirer functions

function addMembers(){
    inquirer.prompt([
        {
            type: "list",
            message: "Add a team member?",
            name: "teamMember",
            choices: [
              "Manager",
              "Engineer",
              "Intern",
              "Team complete, no one else to add."
            ]
        }
    ]).then(answers => {
        console.log(answers.teamMember)
        //based on answer, create relavent team member (see create role functions)
        switch(answers.teamMember){
            case "Manager": 
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern()
                break;
            default:
                // fs.writeFile("output.html", generateHTML(), function(err) {
                //     if (err) {
                //       throw err;
                //     }})
                console.log(teamArray);
        }
    })
};

addMembers();

