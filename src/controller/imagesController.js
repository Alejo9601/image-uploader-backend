const fsP = require("fs").promises;
const path = require("path");

const uploadImage = (req, res) => {
  const file = req.file;
  res.send(file);
};

const deleteAllImages = (req, res) => {
  const FOLDER_TO_REMOVE = "uploads";

  fsP
    .readdir(FOLDER_TO_REMOVE)
    .then((files) => {
      const unlinkPromises = files.map((file) => {
        const filePath = path.join(FOLDER_TO_REMOVE, file);
        return fsP.unlink(filePath);
      });
      return Promise.all(unlinkPromises).then(res.status(204).end());
    })
    .catch((err) => {
      console.error(
        `Something wrong happened removing files of ${FOLDER_TO_REMOVE}`
      );
    });
};

module.exports = {
  uploadImage,
  deleteAllImages,
};
