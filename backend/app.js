import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

const APP_ID = "e7f254bb";
const APP_KEY = "8f77f934fa3e05cea1b548ef85e5077a";

app.use(cors());

app.get("/", (req, res) => {
  //   res.set("Access-Control-Allow-Origin", "*");
  const query = req.query.q;

  const API = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
  // res.send("welcome to cors server");
});

// app.get("/cors", (req, res) => {
//   res.send("cors enabled");
// });
app.listen(8000, () => {
  console.log("listening on port 8000");
});
