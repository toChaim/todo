import express from "express";
import path from "path";

var root = { root: path.dirname("app.js") };
var app = express();

app.get("/", (req, res, next) => {
  res.sendFile("index.html", root);
});

app.get("/index.js", (req, res, next) => {
  res.sendFile("index.js", root);
});

app.get("/index.css", (req, res, next) => {
  res.sendFile("index.css", root);
});

app.get("/new_route/:name", (req, res, next) => {
  console.log(req);
  res.send(`Hi ${req.params.name}`);
});

app.listen(3000, () => {
  console.log("start linstening port 3000");
});
