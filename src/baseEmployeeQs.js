const baseEmployeeQs = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "_name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "_id",

    validate: (_id) => {
      return /^[0-9]+$/.test(_id) || `error`;
    },
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "_email",
    validate: (_email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(_email);
    },
  },
];

module.exports = baseEmployeeQs;
