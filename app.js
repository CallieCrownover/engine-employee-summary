const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./lib/htmlRender');
const teamMembers = [];

// inquirer.prompt([
  // {
  //   type: 'input',
  //   name: 'name',
  //   message: 'Please enter the name of manager: ',
  // },
  // {
  //   // ask for the id, the email, officeNumber
  // },
// ])
  .then(function(answers) {
    // new instance of manager and push to teamMember
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    // call the employeeChoice
    employeeChoice();
  })
function employeeChoice() {
  inquirer.prompt([{
    type: 'list',
    name: 'choice',
    choices: ['Intern', 'Engineer', 'Done'],
    message: 'Please choose one of the following: ',
  }])
    .then(function(answers) {
      if (answers.choice === 'Intern') {
        createIntern();
      }
      if (answers.choice === 'Engineer') {
        createEngineer()
      }
      if (answers.choice === 'Done') {
        createHTMLFile();
      }
    })
}
function createIntern() {
  // ask for the name, id, email, and school
  // push it to teamMembers
  // call employeeChoice
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "checkbox",
      message: "What is your role?",
      choices: ["Employee", "Engineer", "Intern", "Manager"],
      name: "role"
    },
    {
      type: "input",
      message: "What is your role-specific property?",
      name: "roleSpecific",
    }
  
  ])
}


function createEngineer() {
  // ask for the name, id, email, and github
  // push it to teamMembers
  // call employeeChoice
}
function createHTMLFile() {
  fs.writeFileSync(outputPath, render(teamMembers));
}

function employeeQuestions() {

  inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "checkbox",
        message: "What is your role?",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
        name: "role"
      },
      {
        type: "input",
        message: "What is your role-specific property?",
        name: "roleSpecific",
      }
    
    ])
  }

  function internQuestions() {

    inquirer.prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is your ID?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
        },
        {
          type: "checkbox",
          message: "What is your role?",
          choices: ["Employee", "Engineer", "Intern", "Manager"],
          name: "role"
        },
        {
          type: "input",
          message: "What is your role-specific property?",
          name: "roleSpecific",
        }
      
      ])
    }

    function engineerQuestions() {

      inquirer.prompt([
          {
            type: "input",
            message: "What is your name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is your ID?",
            name: "id",
          },
          {
            type: "input",
            message: "What is your email?",
            name: "email",
          },
          {
            type: "checkbox",
            message: "What is your role?",
            choices: ["Employee", "Engineer", "Intern", "Manager"],
            name: "role"
          },
          {
            type: "input",
            message: "What is your role-specific property?",
            name: "roleSpecific",
          }
        
        ])
      }
const intern = new Intern(function () {
  function getName() {
    internName = internQuestions[0].input
  };
  function getId() {
    internId = internQuestions[1].input
  }
  function getEmail() {
    internEmail = internQuestions[2].input
  }
  function getRole() {
    internRole = internQuestions[3].checkbox
  }
  function getSchool() {
    internRoleSpecific = internQuestions[4].input
  }
})

const manager = new Manager(function () {
  function getName() {
    managerName = managerQuestions[0].input
  };
  function getId() {
    managerId = managerQuestions[1].input
  }
  function getEmail() {
    managerEmail = managerQuestions[2].input
  }
  function getRole() {
    managerRole = managerQuestions[3].checkbox
  }
  function getOfficeNumber() {
    managerRoleSpecific = managerQuestions[4].input
  }
})

const engineer = new Engineer(function () {
  function getName() {
    engineerName = engineerQuestions[0].input
  };
  function getId() {
    engineerId = engineerQuestions[1].input
  }
  function getEmail() {
    engineerEmail = engineerQuestions[2].input
  }
  function getRole() {
    engineerRole = engineerQuestions[3].checkbox
  }
  function getSchool() {
    engineerRoleSpecific = engineerQuestions[4].input
  }
})

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}
//******  teamMembers in fs.writeFileSync(outPath,render(teamMembers),"utf-8); is the array variable you are pushing team member objects to. IF your array is labeled differently make sure to change it here as well
fs.writeFileSync(outputPath, render(teamMembers), "utf-8");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
