const express = require("express");
const router = express.Router();
const Watchlist = require("../models/watchlist");
const authMiddleware = require("../middleware/authMiddleware");


// Add a watchlist 
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;     // userId from token
        const { stocks } = req.body;

        let watchlist = await Watchlist.findOne({ userId });

        if (watchlist) {
            return res.status(200).json({ message: "Watchlist already exists", watchlist });
        }

        const createNew = new Watchlist({
            userId,
            stocks
        });

        await createNew.save();

        return res.status(201).json({
            message: "New watchlist is created",
            watchlist: createNew
        });

    } catch (error) {
        console.error("Something went wrong", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
});


// Get watchlist of logged-in user
router.get("/getwatchlist", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const watchlist = await Watchlist.findOne({ userId });

        return res.status(200).json({ message: "Watchlist fetched", watchlist });

    } catch (error) {
        console.error("Something went wrong", error);
        return res.status(400).json({ message: "Something went wrong" });
    }
});


// Delete the entire watchlist document (for logged-in user)
router.delete("/deletelist", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const deleted = await Watchlist.findOneAndDelete({ userId });

        return res.status(200).json({ message: "Watchlist deleted successfully", deleted });

    } catch (error) {
        console.error("Something went wrong", error);
        return res.status(400).json({ message: "Something went wrong" });
    }
});


module.exports = router;
