const express = require("express");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.static("uploads"));

const PORT = 3001;

app.post("/upload", upload.single("myFile"), (req, res) => {
  const file = req.file;
  res.send(file);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
