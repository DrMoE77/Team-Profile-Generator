// importing node modules 

const file = require ("fs")

const inquirer = require("inquirer")


// get team profiles
const Manager = require ("./lib/Manager")
const Engineer= require ("./lib/Engineer")
const Intern = require ("./lib/Intern") 

// create HTML page
const generateHTML = require ("./src/generateHTML") 


// creating a team
const team = []

// start of manager prompts 
const addManager = ()=> {
    return inquirer.prompt ([
    {
        type: "input", 
        name: "name",
        message: "What is the name of this team Manager?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your team Manager's name");
              return false;
            }
          }
          
    },
    {
        type: "input", 
        name: "id",
        message: "Enter Manager's ID",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("please enter your team Manager's ID.");
              return false;
            }
          }
    },

    {
        type: "input", 
        name: "email",
        message: "Enter Manager's Email",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("please enter your team Manager's email.");
              return false;
            }
          }
    },

    {
        type: "input", 
        name: "officeNumber",
        message: "Enter Manager's Office Number",
        validate: numberInput => {
            if (numberInput) {
              return true;
            } else {
              console.log("please enter your team Manager's office number.");
              return false;
            }
          }
    }
])
.then(managerQues =>{
    const { name, id, email, officerNumber 
    } = managerQues
    const manager = new Manager (name, id, email, officerNumber)
    team.push(manager)

})

};

// prompt for employee

const addEmployee = ()=> {
    return inquirer.prompt ([
    {
        type: "list", 
        name: "role",
        message: "Choose your employee's role",
        choices: ["Engineer", "Intern"] 
    },
    {
        type: "input", 
        name: "name",
        message: "Enter Employee's Name",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("please enter your employees name.");
              return false;
            }
          }
    },

    {
        type: "input", 
        name: "id",
        message: "Enter Employee's id",
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log("please enter your employee's id.");
              return false;
            }
          }
    },

    {
        type: "input", 
        name: "email",
        message: "Enter Employee's Email",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("please enter your Employee's email.");
              return false;
            }
          }
    },


    {
        type: "input", 
        name: "GitHub",
        message: "Enter your employee's GitHub user name",
        when: (input) => input.role === "Engineer",
        validate: gitInput => {
            if (gitInput) {
              return true;
            } else {
              console.log("please enter the Git Hub Username.");
              return false;
            }
          }
    },

    {
        type: "input", 
        name: "School",
        message: "Enter your intern's school name",
        when: (input) => input.role === "Intern",
        validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log("please enter intern's school name.");
              return false;
            }
          }
    },

    {
        type: "confirm", 
        name: "addMore",
        message: "Would you like to add more team members",
        default: false 
       
    }



])
.then(employeeinfo =>{
    let { name, id, email, role, github, school, addMore
    } = employeeinfo
    let emp
    if (role === "Engineer") {
        emp = new Engineer (name, id, email, github)
        
    }
    else if (role === "Intern"){
        emp = new  Intern (name, id, email, school)
    }
    team.push (emp)
    if (addMore) {
        return addEmployee(team)
    }
    else {
        return team 
    }
})

};

const writeFile = data => {
    file.writeFile("./dist/index.html", data, err =>{
   if (err) {
        console.log (err)
        return; 
   }
   else {
       console.log("your team profile is ready on index.html")
   }
})
}

addManager().then(addEmployee).then(team => {
  return generateHTML(team)
})
.then(pageHTML=> {
  return writeFile(pageHTML)})
  .catch(err => {
    console.log(err);
     });
   


