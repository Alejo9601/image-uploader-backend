const express = require("express");
const cors = require("cors");
const v1Router = require("./routes/v1/imagesRoutes");
require("./utils/createUploadsFolder");
require("./database/connectDatabase");

const app = express();
app.use(cors());
app.use(express.static("uploads"));
app.use("/api/v1/images", v1Router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
