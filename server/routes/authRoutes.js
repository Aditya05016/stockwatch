const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");


//register route

router.post("/register", async(req,res) => {
    try{
        const{name,email,password} = req.body;
        const existedUser = await User.findOne({email});
            if(existedUser){
                return res.status(400).json({message:"User already exist"})
            }

            //hash a pasword
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            // now create new user

            const newUser = new User({
                name,
                email,
                password:hashedPassword,
            })

            await newUser.save();
            return res.status(201).json({message:"User registerd sucessfully"});

    }catch(error){
        console.log("Something went wrong", error);
        return res.status(500).json({ message: "Server error" });

    }
})

router.post("/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });

    if (!existedUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const match = bcrypt.compareSync(password, existedUser.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existedUser._id },
      JWTSECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "User login successfully",
      token
    });

  } catch (error) {
    console.error("Something went wrong", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
});


router.post("/logout", async(req,res) => {
    try{
        return res.status(200).json({message:"Logged out sucesfully"})
    }catch(error){
        cosnole.error({message:"Something went wrong", error})
    }
})

module.exports = router;