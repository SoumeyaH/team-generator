const getTeamName = require("./getTeamName");

const createManager = require("./createManager");
const getEntireTeam = require("./getEntireTeam");

const init = async () => {
  const teamNameResponse = await getTeamName();

  // console.log(teamNameResponse);

  const entireTeam = getEntireTeam();

  // const managerResponse = await createManager();
  // console.log(managerResponse);
};

init();
