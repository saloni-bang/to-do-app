const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded());
app.get("/", function (req, res) {
  const homepage = fs.readFileSync("./index.html", { encoding: "utf-8" });
  res.send(homepage);
});

app.get("/abc.jpg", function (req, res) {
  const homepage = fs.readFileSync("./abc.jpg");
  res.send(homepage);
});
app.post("/read-task", function (req, res) {
  const data = fs.readFileSync("./task.json", { encoding: "utf-8" });

  res.send(data);
});

app.post("/update-task", function (req, res) {
  const data = fs.writeFileSync("./task.json", JSON.stringify(req.body));

  res.send(JSON.stringify(data));
});
app.listen(3008, function () {
  console.log("my app is ready");
});
