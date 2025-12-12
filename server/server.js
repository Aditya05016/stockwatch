require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/database")
const authRoutes = require("./routes/authRoutes");
const stockRoutes = require("./routes/stockRoutes");
const watchlistRutes = require("./routes/watchlistRutes");

app.use(express.json());
connectDb();

app.use("/api/auth",authRoutes);
app.use("/api/stocks", stockRoutes);
app.use("/api/watch", watchlistRutes);

app.get("/", (req, res) => {
  res.send("This is home Page");
});

// take port from env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
