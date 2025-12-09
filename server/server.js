require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/database")

app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("This is home Page");
});

// take port from env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
