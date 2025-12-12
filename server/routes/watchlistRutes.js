const express = require("express");
const router = express.Router();
const Watchlist = require("../models/watchlist")


//add a watchlist 

router.post("/watchlist/add", async (req, res) => {
    try {
        const { userId, stocks } = req.body;

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


router.get("/getwatchlist", async (req, res) => {
    try {
        const getwatchlist = await Watchlist.find();
        return res.status(200).json({ message: "Finally get the watchlist", getwatchlist });
    } catch (error) {
        console.error({ message: "Something went wrong", error });
        return res.status(400).json({ message: "Something went wrong" });
    }
});

router.delete("/deletelist/:id", async (req, res) => {
    try {
        const id = req.params.id;  // FIXED: params spelling
        const deltelist = await Watchlist.findByIdAndDelete(id); // FIXED: returns same name
        return res.status(200).json({ message: "Deleted successfully", deltelist });
    } catch (error) {
        console.error("Something went wrong", error); // FIXED syntax
        return res.status(400).json({ message: "Something went wrong" });
    }
});

module.exports = router;
