const express = require("express");
const app = express();
const router = require("./api/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgon = require("morgan");
const mongoose = require("mongoose");

const userData = {
  userId: "789789",
  password: "123456",
  name: "Clue Mediator",
  username: "cluemediator",
  isAdmin: true,
};

const PORT = process.env.PORT || 8009;

mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost:27017/kkfin" , {
  useNewUrlParser: true,
});

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send();
// });

app.use(morgon("dev"));

app.use("/api", router);

app.use(function (err, req, res, next) {
  res.status(err.status || 404).send("route doesn't exist");
});

app.listen(PORT, () => {
  console.log("i am listing on port", PORT);
});