const Engineer = require("./lib/engineer");
const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
  const engineerQuestions = [
    ...baseEmployeeQs,
    {
      type: "input",
      message: "What is the Enginner's github?",
      name: "_github",
    },
  ];

  const engineerAnswers = await getAnswers(engineerQuestions);

  // destructor answeres here then pass into to function
  console.log(engineerAnswers);
  const engineer = new Engineer(engineerAnswers);

  return engineer;
};

module.exports = createEngineer;
