const express = require("express");
const router = express.Router();
const imgController = require("../../controller/imagesController");
const multer = require("../../middlewares/multer");

router
  .get("/:id", imgController.getImage)
  .post("/", multer.upload, imgController.uploadImage)
  .delete("/", imgController.deleteAllImages);

module.exports = router;
