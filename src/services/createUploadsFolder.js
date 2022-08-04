const fs = require("fs");

const createUploadsFolder = () => {
  const dir = "./uploads";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

module.exports = createUploadsFolder;
