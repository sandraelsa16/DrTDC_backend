const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const AppController = require("../Controller/appointmentController")
const userController= require("../Controller/userController")

//login
router.post("/admin", adminController.login);

//addhomeAppointment
router.post("/appointment",AppController.homeAppointment)

//add doctor appointment
router.post("/drappointment",AppController.drAppointment)


//userregister
router.post("/userreg",userController.register)


module.exports = router;
