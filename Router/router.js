const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
//login
router.post("/login", adminController.login);

module.exports = router;
