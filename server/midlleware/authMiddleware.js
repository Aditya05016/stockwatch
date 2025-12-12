const jwt = require("jsonwebtoken")


const authMidlleware = async(req,resizeBy,next) => {
    try{

        const header = req.header.authorization;

        if(!header || header.startswithBearer("Bearer")){
            return res.status(400).json({message:"Token not verfied"})
        }

        const token = header.split("")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        console.error({message:"Something went wrong", error});
        return res.status(400).json({message:"Somethign went wrong"})
    }
}


module.exports = authMidlleware;