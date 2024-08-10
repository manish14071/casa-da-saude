import mongoose from "mongoose";
import validator from "validator";




const appointmentSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: [3, "first name minimum contain at least 3 characters"],
    },
  
    lastName: {
      type: String,
      required: true,
      minLength: [3, "first name minimum contain at least 3 characters"],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Please provide valid email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [9, "Phone number must contain 11 digits"],
      maxLength: [9, "Phone number must contain 11 digits"],
    },
  
    sns: {
      type: String,
      required: true
  },
  gender:{
      type:String,
      required:true,
      enum:["Male","Female"],
    },
    dob:{
        type: String,
        required:true,
    
    },
appointment_date:{
    type:String,
    required:true,

},
department:{
    type:String,
    required:true,



},
doctor:{
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,

    }
},
hasVisited:{
    type:Boolean,
    default:false

},

patientId:{
    type:mongoose.Schema.ObjectId,
    required:true
},
address:{
    type:String,
    required:true
},
status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending"
}



})

export const Appointment=mongoose.model("Appointments",appointmentSchema);