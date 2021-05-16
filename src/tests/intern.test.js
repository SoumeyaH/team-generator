const Intern = require("../lib/intern");

describe("Intern", () => {
  const internAnswers = {
    _name: "r",
    _id: "3",
    _email: "g@g.com",
    _school: "g",
  };
  // put in mock answers
  describe("constructor tests", () => {
    test("should construct intern object with with name, id, email, school name and role", () => {
      const intern = new Intern(internAnswers);
      expect(intern).toEqual({
        role: "Intern",
        name: "r",
        id: "3",
        email: "g@g.com",
        school: "g",
      });
    });
  });
  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const intern = new Intern(internAnswers);

      expect(intern.getRole()).toEqual("Intern");
    });
    test("should return school when getGithub is called", () => {
      const intern = new Intern(internAnswers);

      expect(intern.getSchool()).toEqual("g");
    });
  });
});
