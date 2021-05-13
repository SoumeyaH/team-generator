const Employee = require("./lib/employee");
const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");

console.log("Employee", Employee);

const createManager = async () => {
  const managerQuestions = [
    ...baseEmployeeQs,
    {
      type: "number",
      message: "What is the manager's office number?",
      name: "officeNum",
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  const manager = new Employee(managerAnswers);

  return manager;
};

module.exports = createManager;
