const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile( __dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("Your age in Dog years is : " + age + "dog years.");
});

app.listen(port);
