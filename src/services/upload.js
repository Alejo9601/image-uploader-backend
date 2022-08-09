const fs = require("fs");
const path = require("path");
const Image = require("../models/imageSchema");

const upload = async (fileName, fileType) => {
  const image = new Image({
    name: fileName,
    desc: "",
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "../../../uploads/" + fileName)
      ),
      contentType: fileType,
    },
  });
  return image.save();
};

module.exports = upload;
