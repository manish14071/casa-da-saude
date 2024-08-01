import { User } from "../Model/userSchema.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken"


export const isAdminAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.adminToken;
        if(!token){
            return next(new ErrorHandler("Admin not a authenticated"))
        }

        const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=await User.findById(decoded.id);
        if(req.user.role !== "Admin"){
            return next(
                new ErrorHandler(
                    `${req.user.role} not authorized for this resources`
                )
            )
        }
        next()
        
    } catch (error) {
        
        
    }
}



export const isPatientAuthenticated=async(req,res,next)=>{
    try {
        const token=req.cookies.patientToken;
        if(!token){
            return next(new ErrorHandler("Patient not a authenticated"))
        }

        const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=await User.findById(decoded.id);
        if(req.user.role !== "Patient"){
            return next(
                new ErrorHandler(
                    `${req.user.role} not authorized for this resources`
                )
            )
        }
        next()
        
    } catch (error) {
        console.log(error);
        
    }
}