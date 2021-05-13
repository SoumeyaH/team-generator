const Engineer = require("./lib/engineer");
const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
  const engineerQuestions = [
    ...baseEmployeeQs,
    {
      type: "input",
      message: "What is the enginner's github?",
      name: "_github",
    },
  ];

  const engineerAnswers = await getAnswers(engineerQuestions);

  const engineer = new Engineer(engineerAnswers);

  return engineer;
};

module.exports = createEngineer;
