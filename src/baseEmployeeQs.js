const baseEmployeeQs = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "_name",
  },
  {
    type: "number",
    message: "What is the employee's ID number?",
    name: "_id",
    // validation is stuck on NaN
    // validate: (_id) => {
    //   if (_id) {
    //     // check if id already exists if it does
    //     return _id;
    //     // else return message `id is a repeat fix it b`
    //   } else {
    //     return `Please enter a valid number`;
    //   }
    // },
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
