const express = require("express");
const router = express.Router();
const imgController = require("../../controller/imagesController");
const multerUploads = require("../../middlewares/multer");

router
  .post("/", multerUploads, imgController.uploadImage)
  .delete("/", imgController.deleteAllImages);

module.exports = router;
