const Employee = require("./employee");

class Engineer extends Employee {
  constructor({ _name, _id, _email, _github }) {
    super(_name, _id, _email);

    this.github = _github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
