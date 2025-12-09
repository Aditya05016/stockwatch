const mongoose = require("mongoose");


const watchList = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref: "User"},
    stocks:[String],
})

module.exports = mongoose.model("Watchlist",watchList);