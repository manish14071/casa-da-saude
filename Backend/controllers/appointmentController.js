import ErrorHandler from "../Middlewares/errorMiddleware.js";
import { Appointment } from "../Model/appintmentSchema.js";
import { User } from "../Model/userSchema.js";

export const makeAppointment = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      sns,
      gender,
      dob,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      hasVisited,
      address,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !sns ||
      !gender ||
      !dob ||
      !appointment_date ||
      !department ||
      !doctor_firstName ||
      !doctor_lastName ||
      !hasVisited,
      !address
    ) {
      return next(new ErrorHandler("Please fill full details"));
    }

    const isConflict = await User.find({
      firstName: doctor_firstName,
      lastName: doctor_lastName,
      role: "Doctor",
      doctorDepartment: department,
    });

    if (isConflict.length === 0) {
      return next(new ErrorHandler("Doctor not found"));
    }

    if (isConflict.length > 1) {
      return next(new ErrorHandler("Doctor conflict please contact hospital"));
    }

    const doctorId = isConflict[0]._id;
    const patientId = req.user._id;
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      sns,
      gender,
      dob,
      appointment_date,
      department,
      doctor: {
        firstName: doctor_firstName,
        lastName: doctor_lastName,
      },
      hasVisited,
      address,
      doctorId,
      patientId,
    });

res.send({msg:"appointment created"})

  } catch (error) {
    console.log(error);
  }
};


export const getAllAppointments=async(req,res,next)=>{
  try {
    const appointments=await Appointment.find();
  res.send({msg:"all apoinmnts are here",appointments})
    
  } catch (error) {
   console.log(error); 
  }
}


export const updateAppointmentStatus=async(req,res,next)=>{


  try {
    const{id}=req.params;
    let appointment=await Appointment.findById(id)
    if(!appointment){
      return next(new ErrorHandler("Appointment not found"))
    }

    appointment=await Appointment.findByIdAndUpdate(id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false,
    });

res.send({msg:"updated successfully",appointment})


  } catch (error) {
    
  }
}

export const deleteAppointment=async(req,res,next)=>{

  try {
    const{id}=req.params;
    let appointment=await Appointment.findById(id)
    if(!appointment){
      return next(new ErrorHandler("Appointment not found"))
    }

   await Appointment.deleteOne()

res.send({msg:"appointment deleted successfully",appointment})


  } catch (error) {
    
  }
  
}