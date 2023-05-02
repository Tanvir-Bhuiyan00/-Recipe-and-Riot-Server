const express = require("express");
const app = express();

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("Recipe & Riot site is running");
});


app.listen(port, () => {
  console.log(`Recipe & Riot API is running on port: ${port}`);
});
