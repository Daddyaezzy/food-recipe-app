const express = require("express");
const app = express();
const cors = require("cors");
const fetch = import("node-fetch");

const APP_ID = "11a3786e";
const APP_KEY = "67df2558fcf28d7610bc5026de58b8ae";

const API = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  fetch(API, { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      // Do something with the data
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  res.send("welcome to cors server");
});

// app.get("/cors", (req, res) => {
//   res.send("cors enabled");
// });
app.listen(8000, () => {
  console.log("listening on port 8000");
});
