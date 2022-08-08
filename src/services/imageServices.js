const fsP = require("fs").promises;
const fs = require("fs");
const path = require("path");
const imgModel = require("../models/imageSchema");

const createImage = (fileName, fileType) => {
  var obj = {
    name: fileName,
    desc: "",
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "../../../uploads/" + fileName)
      ),
      contentType: fileType,
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    }
  });
};

const deleteAll = async () => {
  const FOLDER_TO_REMOVE = "uploads";
  fsP
    .readdir(FOLDER_TO_REMOVE)
    .then((files) => {
      const unlinkPromises = files.map((file) => {
        const filePath = path.join(FOLDER_TO_REMOVE, file);
        return fsP.unlink(filePath);
      });
      return Promise.all(unlinkPromises);
    })
    .catch((err) => {
      console.error(
        `Something wrong happened removing files of ${FOLDER_TO_REMOVE}`
      );
    });
};

module.exports = {
  deleteAll,
  createImage,
};
