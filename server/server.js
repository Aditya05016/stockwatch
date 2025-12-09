require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home Page");
});

// take port from env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
