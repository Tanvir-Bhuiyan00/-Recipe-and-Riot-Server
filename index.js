const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const posts = require("./data/food_posts.json");

app.get("/", (req, res) => {
  res.send("Recipe & Riot site is running");
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Recipe & Riot API is running on port: ${port}`);
});
