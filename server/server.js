require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectDb = require("./config/database");
const authRoutes = require("./routes/authRoutes");
// const stockRoutes = require("./routes/stockRoutes");
const watchlistRutes = require("./routes/watchlistRutes");
const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

connectDb();

app.use("/api/auth", authRoutes);
// app.use("/api/stocks", stockRoutes);
app.use("/api/watch", watchlistRutes);
app.use("/api/stocksearch", searchRoutes);

app.get("/", (req, res) => {
  res.send("This is home Page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running at", PORT);
});
