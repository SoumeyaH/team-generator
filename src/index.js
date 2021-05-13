const getTeamName = require("./getTeamName");
const getEntireTeam = require("./getEntireTeam");
const generateHTML = require("./generateHTML");
const writeToFile = require("./writeToFile");

const init = async () => {
  const teamName = await getTeamName();

  const entireTeam = await getEntireTeam();

  const htmlTemplate = generateHTML(teamName, entireTeam);

  writeToFile(htmlTemplate);
};

init();
