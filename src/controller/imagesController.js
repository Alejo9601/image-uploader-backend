const services = require("../services");

const getImage = (req, res) => {
  const id = String(req.params.id);
  services.getImage(id).then((result) => {
    res.send(result);
  });
};

const uploadImage = (req, res) => {
  const file = req.file;
  services.upload(file).then((result) => res.status(200).send(result));
};

const deleteAllImages = (req, res) => {
  services.deleteAll().then(res.status(204).end());
};

module.exports = {
  uploadImage,
  deleteAllImages,
  getImage,
};
