const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const response = await axios.get(
      "https://finnhub.io/api/v1/search",
      {
        params: {
          q: query,
          token: process.env.FINNHUB_API_KEY,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Stock search error:", error.message);
    return res.status(500).json({ message: "Failed to fetch stocks" });
  }
});

module.exports = router;
