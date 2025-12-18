const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
      console.log("FINNHUB KEY:", process.env.FINNHUB_API_KEY); //
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

    return res.json(response.data.result);

  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MSG:", error.message);

    return res.status(500).json({
      message: "Stock search failed",
    });
  }
});

module.exports = router;
