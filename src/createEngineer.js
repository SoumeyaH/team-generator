const Employee = require("./lib/employee");
const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
  const engineerQuestions = [
    ...baseEmployeeQs,
    {
      type: "input",
      message: "What is the enginner's github?",
      name: "github",
    },
  ];

  const engineerAnswers = await getAnswers(engineerQuestions);

  const engineer = new Employee(engineerAnswers);

  return engineer;
};

module.exports = createEngineer;
