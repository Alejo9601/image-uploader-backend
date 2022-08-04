const express = require("express");
const router = express.Router();
const imgController = require("../../controller/imagesController");

router
  .post("/", imgController.upload, imgController.uploadImage)
  .delete("/delete", imgController.deleteAllImages);

module.exports = router;
