import express from "express"
import { deleteAppointment, getAllAppointments, makeAppointment, updateAppointmentStatus } from "../controllers/appointmentController.js";
import { isPatientAuthenticated,isAdminAuthenticated } from "../Middlewares/auth.js";
const appointmentRouter=express.Router()


appointmentRouter.post("/post",isPatientAuthenticated ,makeAppointment)
appointmentRouter.get("/getall",isAdminAuthenticated ,getAllAppointments)
appointmentRouter.put("/update/:id",isAdminAuthenticated ,updateAppointmentStatus)
appointmentRouter.delete("/delete/:id",isAdminAuthenticated ,deleteAppointment)


export default appointmentRouter;