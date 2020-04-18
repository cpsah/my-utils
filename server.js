const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const FileWrite = require("./src/FileWrite");

const PORT = 4000;
const landingPage = "index.html";

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/${landingPage}`);
});

app.post("/log", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  let response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  FileWrite.append('logs/details.log', JSON.stringify(response));
  res.end("File saved successfully.");
});

var server = app.listen(PORT, function () {
  console.log("Server Started Successfully...");
  console.log(`Listening on port ${PORT}`);
});
