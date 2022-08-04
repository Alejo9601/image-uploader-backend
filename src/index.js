const express = require("express");

const fs = require("fs");
const fsP = require("fs").promises;
const path = require("path");

const dir = "./uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

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

const PORT = process.env.PORT || 3001;

app.post("/upload", upload.single("myFile"), (req, res) => {
  const file = req.file;
  res.send(file);
});

app.delete("/delete", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
