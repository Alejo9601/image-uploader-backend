const Image = require("../models/imageSchema");
const { uploader } = require("../middlewares/cloudinary");

const upload = async (file) => {
  return uploader
    .upload(file)
    .then((result) => {
      const image = new Image({
        name: result.original_filename,
        url: result.url,
      });
      image.save();
      return result;
    })
    .catch((err) => console.log("An error ocurred uploading file"));
};

module.exports = upload;
