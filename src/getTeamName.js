const inquirer = require("inquirer");

const teamNameQuestion = [
  {
    type: "input",
    message: "What is your team's name?",
    name: "title",
    default: "My Team",
  },
];

const getTeamName = async () => {
  return await inquirer.prompt(teamNameQuestion);
};

module.exports = getTeamName;
