const users = require("../models/userSchema");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log("inside user reg function");
  const{firstname,lastname,phnnum,email,password}=req.body;

  try{
    const existingUser = await users.findOne({firstname,phnnum})
    if(existingUser){
        res.status(406).json("Patient already exists")
    }else{
        const newUser = new users({
            firstname,lastname,phnnum,email,password
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
  }catch(err){
    res.status(401).json(err)
  }
};

 
