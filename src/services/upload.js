const Image = require("../models/imageSchema");

const upload = async (file) => {
  const image = new Image({
    name: file.originalname,
    url: file.path,
  });
  return image
    .save()
    .catch((err) => console.log("An error ocurred uploading file"));
};

module.exports = upload;
