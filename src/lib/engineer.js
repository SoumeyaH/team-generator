const Employee = require("./employee");

class Engineer extends Employee {
  constructor({ _name, _id, _email, _github }) {
    // if (!new.target) throw `Engineer() must be called with new`;

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

// const Employee = require("./employee");

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email);

//     this.github = github;
//     this.role = "Engineer";
//   }

//   getGithub() {
//     return this.github;
//   }

//   getRole() {
//     return this.role;
//   }
// }

// module.exports = Engineer;
