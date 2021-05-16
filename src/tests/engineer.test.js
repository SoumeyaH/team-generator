const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  const engineerAnswers = {
    _name: "r",
    _id: "3",
    _email: "g@g.com",
    _github: "g",
  };

  describe("constructor tests", () => {
    test("should construct engineer object with with name, id, email, github account and role", () => {
      const engineer = new Engineer(engineerAnswers);
      expect(engineer).toEqual({
        role: "Engineer",
        name: "r",
        id: "3",
        email: "g@g.com",
        github: "g",
      });
    });
  });
  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const engineer = new Engineer(engineerAnswers);

      expect(engineer.getRole()).toEqual("Engineer");
    });
    test("should return github when getGithub is called", () => {
      const engineer = new Engineer(engineerAnswers);

      expect(engineer.getGithub()).toEqual("g");
    });
  });
});
