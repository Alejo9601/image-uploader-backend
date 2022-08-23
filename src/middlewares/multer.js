const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");
const { parse } = require("path");

const storage = multer.memoryStorage();

const multerUploads = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("File should be JPG, JPEG or PNG"));
    }
  },
}).single("myFile");

const parser = new DatauriParser();

const dataUri = (req) =>
  parser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );

module.exports = { multerUploads, dataUri };
