const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const category = require("./data/category.json");

app.get("/news-category", (req, res) => {
  res.send(category);
});

app.get("/", (req, res) => {
  res.send("api running");
});
app.listen(port, () => {
  console.log("dragon server is running on port ", port);
});
