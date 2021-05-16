const Manager = require("../lib/manager");

describe("Manager", () => {
  const managerAnswers = {
    _name: "r",
    _id: "3",
    _email: "g@g.com",
    _officeNumber: "g",
  };

  describe("constructor tests", () => {
    test("should construct manager object with with name, id, email, officeNumber and role", () => {
      const manager = new Manager(managerAnswers);
      expect(manager).toEqual({
        role: "Manager",
        name: "r",
        id: "3",
        email: "g@g.com",
        officeNumber: "g",
      });
    });
  });
  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const manager = new Manager(managerAnswers);

      expect(manager.getRole()).toEqual("Manager");
    });
    test("should return officeNumber when getGithub is called", () => {
      const manager = new Manager(managerAnswers);

      expect(manager.getOfficeNumber()).toEqual("g");
    });
  });
});
