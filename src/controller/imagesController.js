const services = require("../services");

const getImage = (req, res) => {};

const uploadImage = (req, res) => {
  const file = req.file;
  services.upload(file.originalname, file.mimetype).then(res.status(200).end());
};

const deleteAllImages = (req, res) => {
  services.deleteAll().then(res.status(204).end());
};

module.exports = {
  uploadImage,
  deleteAllImages,
  getImage,
};
