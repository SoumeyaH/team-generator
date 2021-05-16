const fs = require("fs");

const writeToFile = (htmlTemplate) => {
  try {
    fs.writeFileSync("dist/team-profile.html", htmlTemplate);
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
