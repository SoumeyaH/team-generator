const inquirer = require("inquirer");

const getTeamName = async () => {
  const teamNameQuestion = [
    {
      type: "input",
      message: "What is your team's name?",
      name: "teamName",
      default: "My Team",
    },
  ];

  return await inquirer.prompt(teamNameQuestion);
};

module.exports = getTeamName;
