const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const posts = require("./data/food_posts.json");

const chef = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Recipe & Riot site is running");
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chef.find((c) => c.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Recipe & Riot API is running on port: ${port}`);
});
