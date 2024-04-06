require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongodb is conneccted");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
