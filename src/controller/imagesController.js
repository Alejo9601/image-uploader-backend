const services = require("../services");
const { dataUri } = require("../middlewares/multer");

const uploadImage = (req, res) => {
  if (req.file) {
    const fileToUpload = dataUri(req).content;
    services
      .upload(fileToUpload)
      .then((result) => res.status(200).send(result).end());
  } else {
    res.status(500).end();
  }
};

module.exports = {
  uploadImage,
};
