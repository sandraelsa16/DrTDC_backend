const homeAppointments = require("../models/appointmentSchema");
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
    drname,
    area,
    captcha,
  } = req.body;
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
      drname,
      area,
      captcha,
    });
    await newHomeAppointment.save();
    res.status(200).json(newHomeAppointment);
    // }
  } catch (error) {
    res.status(401).json(error);
  }
};
