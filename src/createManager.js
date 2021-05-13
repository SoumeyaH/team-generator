const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");
const Manager = require("./lib/manager");

const createManager = async () => {
  const managerQuestions = [
    ...baseEmployeeQs,
    {
      type: "number",
      message: "What is the manager's office number?",
      name: "_officeNumber",
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);
  console.log(manager, "manager");

  return manager;
};

module.exports = createManager;
