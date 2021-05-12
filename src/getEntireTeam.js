const inquirer = require("inquirer");
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

  const managerInfo = await createManager();

  entireTeam.push(managerInfo);

  console.log("manager info", managerInfo);
  console.log("team array", entireTeam);

  const restOfTeamInfo = await getRestOfTeamInfo();

  console.log(restOfTeamInfo);

  const teamSelectionInProgress = true;

  while (teamSelectionInProgress) {
    switch (restOfTeamInfo.employeeType) {
      case "exit":
        teamSelectionInProgress = false;
        break;

      case "engineer":
        console.log(restOfTeamInfo.employeeType);
        break;

      case "intern":
        console.log(restOfTeamInfo.employeeType);
        break;
    }
  }
};

module.exports = getEntireTeam;
