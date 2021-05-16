const inquirer = require("inquirer");

const createEngineer = require("./createEngineer");
const createIntern = require("./createIntern");
const createManager = require("./createManager");

const getRestOfTeamInfo = async () => {
  const restOfTeamQuestions = [
    {
      type: "list",
      message: "What type of employees would you like on your team?",
      name: "employeeType",
      choices: [
        {
          name: "Engineer",
          value: "engineer",
        },
        {
          name: "Intern",
          value: "intern",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ];

  return await inquirer.prompt(restOfTeamQuestions);
};

const getEntireTeam = async () => {
  const entireTeam = [];
  //to do
  // use entireteam as "cache"
  // map through and check ids already exist
  const managerInfo = await createManager();

  entireTeam.push(managerInfo);

  let teamSelectionInProgress = true;

  while (teamSelectionInProgress) {
    const restOfTeamInfo = await getRestOfTeamInfo();

    // to do
    // destructor rest of team so
    //restOfTeamInfo.employeeType -> employeeType

    switch (restOfTeamInfo.employeeType) {
      case "exit":
        teamSelectionInProgress = false;
        break;

      case "engineer":
        const engineerInfo = await createEngineer();
        entireTeam.push(engineerInfo);
        break;

      case "intern":
        const internInfo = await createIntern();
        entireTeam.push(internInfo);
        break;
    }
  }

  return entireTeam;
};

module.exports = getEntireTeam;
