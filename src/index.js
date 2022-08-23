const express = require("express");
const cors = require("cors");
const v1Router = require("./v1/routes/imagesRoutes");
require("./utils/createUploadsFolder");
require("./database/connectDatabase");
const { cloudinaryConfig } = require("./middlewares/cloudinary");

const app = express();
app.use(cors());
app.use(express.static("uploads"));
app.use("*", cloudinaryConfig);
app.use("/api/v1/images", v1Router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
