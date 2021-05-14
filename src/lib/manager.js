const Employee = require("./employee");

class Manager extends Employee {
  constructor({ _name, _id, _email, _officeNumber }) {
    if (!new.target) throw `Manager() must be called with new`;
    super(_name, _id, _email);

    this.officeNumber = _officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
