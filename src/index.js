const getTeamName = require("./getTeamName");

const createManager = require("./createManager");

const init = async () => {
  const teamNameResponse = await getTeamName();

  // console.log(teamNameResponse);

  const managerResponse = await createManager();
  console.log(managerResponse);
};

init();
