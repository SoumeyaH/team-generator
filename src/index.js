const getTeamName = require("./getTeamName");
const getEntireTeam = require("./getEntireTeam");
const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");

const init = async () => {
  const teamName = await getTeamName();

  const entireTeam = await getEntireTeam();

  console.log(teamName, entireTeam);

  const htmlTemplate = generateHTML();

  writeToFile(htmlTemplate);
};

init();
