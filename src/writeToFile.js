const fs = require("fs");

const writeToFile = (htmlTemplate) => {
  try {
    fs.writeFileSync("../dist/team.html", htmlTemplate);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
