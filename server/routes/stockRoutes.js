const express = require("express");
const router = express.Router();
const Stock = require("../models/stock");


router.post("/addStock", async(req,res) => {
    try{

        const {symbol,name,price,lastUpdated,category} = req.body;
        const addStock = new Stock({
            symbol,
            name,
            price,
            lastUpdated,
            category
        });
        await addStock.save();
        return res.status(200).json({message:"Sotck added sucesffuly", addStock})
    }catch(error){
        console.error({message:"Somthin went wrong", error});
        return res.status(400).json({message:"Somthing went wrong"});
    }
})

router.get("/getStocks", async(req,res) => {
    try{
        const getstock = await Stock.find({});
        return res.status(200).json({message:"Stock get sucessfuly", getstock})
    }catch(error){
        console.error("Somethign went wrong", error);
        return res.status(400).json({message:"Smething went wrong"})
    }
})


router.delete("/delete/:id", async(req,res) => {
    try{
        const id = req.params.id;
        const deltestock = await Stock.findByIdAndDelete(id);
        return res.status(200).json({message:"Delted sucessfully", deltestock})
    }catch(error){
        console.log("Something went wrong", error);
        return res.status(400).json({message:"Somethig went wrong"})
    }
})

module.exports = router;