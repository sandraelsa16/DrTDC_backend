const express = require("express");
const router = express.Router();
const adminController = require("../Controller/adminController");
const AppController = require("../Controller/appointmentController")
const userController= require("../Controller/userController")
const jwtMiddleware = require("../Middleware/jwtMiddleware")
//login
router.post("/admin", adminController.login);

//userregister
router.post("/userreg",userController.register)

//userlogin
router.post("/userlogin",userController.login)

//addhomeAppointment
router.post("/appointment",jwtMiddleware,AppController.homeAppointment)

//add doctor appointment
router.post("/drappointment",jwtMiddleware,AppController.drAppointment)




module.exports = router;
