const Employee = require("./lib/employee");
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

  const intern = new Employee(internAnswers);

  return intern;
};

module.exports = createIntern;
