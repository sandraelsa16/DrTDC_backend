const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    initial:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    phnnum:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    drname:{
        type:String,
        require:true
    },
    area:{
        type:String,
        require:true
    },
    captcha:{
        type:String,
        require:true
    },
})

const homeappointments = mongoose.model("homeappointments",appointmentSchema)

module.exports=homeappointments