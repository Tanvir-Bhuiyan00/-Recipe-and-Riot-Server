const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const posts = require("./data/food_posts.json");

const chef = require("./data/chef.json")

app.get("/", (req, res) => {
  res.send("Recipe & Riot site is running");
});

app.get("/posts", (req, res) => {
  res.send(posts);
});


app.get("/chef", (req, res) => {
  res.send(chef);
});


app.listen(port, () => {
  console.log(`Recipe & Riot API is running on port: ${port}`);
});
