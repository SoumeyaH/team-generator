const Intern = require("./lib/intern");
const baseEmployeeQs = require("./baseEmployeeQs");
const getAnswers = require("./getAnswers");

const createIntern = async () => {
  const internQuestions = [
    ...baseEmployeeQs,
    {
      type: "input",
      message: "What school?",
      name: "_school",
    },
  ];

  const internAnswers = await getAnswers(internQuestions);

  const intern = new Intern(internAnswers);

  return intern;
};

module.exports = createIntern;
