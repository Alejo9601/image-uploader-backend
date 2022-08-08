const services = require("../services/imageServices");

const uploadImage = (req, res) => {
  const file = req.file;
  services.createImage(file.originalname, file.mimetype);
  res.send(file);
};

const deleteAllImages = (req, res) => {
  services.deleteAll().then(res.status(204).end());
};

module.exports = {
  uploadImage,
  deleteAllImages,
};
