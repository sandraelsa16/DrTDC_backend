// const admins = require('../models/userSchema');
const jwt = require("jsonwebtoken"); 
exports.login = async(req,res)=>{
    console.log('inside login function');
    const {username,password}=req.body;
    try{
       if(username==='drtc' && password==='3353'){
            // generate token
            const token = jwt.sign(
              { username: 'drtc' },
              process.env.jwt_secret
            );
            res.status(200).json({ username,token });
          } else {
            res.status(406).json("Invalid username/ password");
          }
    }catch(err){
        res.status(401).json(err);
    }
}

