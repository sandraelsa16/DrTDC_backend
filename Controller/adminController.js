const admins = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  console.log("inside login function");
  const { username, password } = req.body;
  try {
    const admin = await admins.findOne({ username, password });
    if (admin) {
      // generate token
      const token = jwt.sign({ userId: admin._id }, process.env.jwt_secret);

      res.status(200).json({ username, token });
    } else {
      res.status(406).json("Invalid username/ password");
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
