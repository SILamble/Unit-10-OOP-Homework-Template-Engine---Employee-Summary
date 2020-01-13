# Unit-10-OOP-Homework-Template-Engine---Employee-Summary

## Building a Node CLi (command line input) that:
* takes in infomation about employees
* generates a HTML page
* built using test driven development methodology

## User story
As a manager, I want to generate a WEBPAGE that DISPLAYS my teams basic info so I have access to their EMAILS, GITHUB REPOS and other info such as JOB ROLE

## How
* Inquirer module to prompt for user info
** name
** email
** id
** job role
* use JEST module for testing

## Directory structure
* lib - for classes
* output - rendered HTML output
* templates - HTML templates
* test - JEST tests for each employee class
** Employee
** Manager (subclass)
** Engineer (subclass)
** Intern (subclass)
* app.js - CLIP app to run code

## Classes
### Employee
* name property
* id property
* title property
* * getname() method
* * getID() method
* * getEmail() method
* * getRole() method // should return employee
### Manager subclass
* office number property
* * getRole() method // should return manager
### Engineer subclass
* github repro property
* * getGitub() method
* * getRole() method // should return engineer
### Intern subclass
* school property
* * getSchool() property
* * getRole() method // should return intern

## Output
* Generate a HTML page in the Output directory that displays, for each employee
* * Name
* * Role
* * ID
* * Role specific info

## 
GIThub Repo: https://github.com/SILamble/Unit-10-OOP-Homework-Template-Engine---Employee-Summary
