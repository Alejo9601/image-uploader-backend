const Image = require("../models/imageSchema");

const getImg = async (id) => {
  return Image.find({ _id: id });
};

module.exports = getImg;
