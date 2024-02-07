const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors  = require("cors");

app.use(cors(
{
<<<<<<< HEAD
<<<<<<< HEAD
  origin:[""],
=======
  origin:["https://story-spires-front.vercel.app/"],
>>>>>>> 2ffa5445fa7355838f25c626e11c472f8789d95c
  methods:["POST","GET","PUT","DELETE"],
  Credentials:true
=======
  origin:[""]
>>>>>>> 83be3f58652f6d1fc6e39113e7f3a6d91c43a586
}
));

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log(`Backend is running at ${PORT}`);
});
