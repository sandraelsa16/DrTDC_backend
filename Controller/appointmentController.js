const homeAppointments = require("../models/appointmentSchema");
const drappointments = require('../models/appdrschema')
exports.homeAppointment = async (req, res) => {
  console.log("inside home appointment function");

  const {
    initial,
    name,
    phnnum,
    age,
    gender,
    date,
    time,
    address,
    drname,
    area,
  } = req.body;
  const userId = req.payload
  try {
    // const alreadyBooked = await homeAppointments.findOne({})
    // if(alreadyBooked){
    //     res.status(406).json("Home collection for the selected time is already booked,please do book on another time")
    // }else {
    const newHomeAppointment = new homeAppointments({
      initial,
      name,
      phnnum,
      age,
      gender,
      date,
      time,
      address,
      drname,
      area,
     userId
    });
    await newHomeAppointment.save();
    res.status(200).json(newHomeAppointment);
    // }
  } catch (error) {
    res.status(401).json(error);
  }
};


exports.drAppointment = async(req,res)=>{
  console.log("inside dr appointment ");

  const {name,phnnum,age,gender,date,time}=req.body
  const {userId} = req.payload
  try {
    const existingAppointment = await drappointments.findOne({date,time})
    if(existingAppointment){
      res.status(406).json("Appointment already exist at the given slot")
    }
    else {
      const newDrAppointment = new drappointments({
        name,phnnum,age,gender,date,time,userId
      })
      await newDrAppointment.save()
      res.status(200).json(newDrAppointment)
    }

  } catch (error) {
    res.status(401).json(error);
  }
  
}