const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const homeAppController = require("../Controller/homeAppController")
const userController= require("../Controller/userController")

//login
router.post("/admin", adminController.login);

//addhomeAppointment
router.post("/appointment",homeAppController.homeAppointment)


//userregister
router.post("/userreg",userController.register)


module.exports = router;
