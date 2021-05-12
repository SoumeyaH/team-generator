const inquirer = require("inquirer");
const getTeamName = require("./getTeamName");

const init = async () => {
  const teamNameResponse = await getTeamName();

  console.log(teamNameResponse);
};

init();
