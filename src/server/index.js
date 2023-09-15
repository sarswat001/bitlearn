const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const fileUploadRouter = require("./routes/fileUpload");
const courseRouter = require("./routes/course");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/users", userRouter)
app.use("/upload", fileUploadRouter)
app.use("/course", courseRouter)
app.get("/", (req, res) => res.json({msg: "No Such Route Found."}));

mongoose.connect(
    "mongodb+srv://sarswataryan:Sar02%40at@cluster0.mmitw8d.mongodb.net/"
);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});