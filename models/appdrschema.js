const mongoose = require("mongoose")

const drappointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    phnnum:{
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
    userId:{
        type:String,
        require:true
    }
    
})

const drappointments = mongoose.model("drappointments",drappointmentSchema)

module.exports=drappointments