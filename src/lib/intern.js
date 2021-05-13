const Employee = require("./employee");

class Intern extends Employee {
  constructor({ _name, _id, _email, _school }) {
    super(_name, _id, _email);

    this.school = _school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;
