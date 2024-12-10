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

 
exports.login = async (req,res) => {
  console.log("inside user login function");
  const{email,password}=req.body
  try {

    const existingUser  = await users.findOne({email,password})
    if(existingUser){
      const token = jwt.sign({
        userId:existingUser._id},process.env.jwt_secret)
        res.status(200).json({existingUser,token})
    }else{
      res.status(406).json("Invalid Username or password")
    }
    
  } catch (error) {
    res.status(401).json(err)
  }
}