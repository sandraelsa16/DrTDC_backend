const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  console.log("inside jwt token");

  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
      const jwtResponse = jwt.verify(token, process.env.jwt_secret);
      req.payload = jwtResponse.userId;
      next();
    } else {
      res.status(401).json("please provide a token");
    }
  } catch {
    res.status(403).json("please login");
  }
};

module.exports = jwtMiddleware;
