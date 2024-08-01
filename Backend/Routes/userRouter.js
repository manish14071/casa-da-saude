import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  logOutAdmin,
  logOutPatient,
  login,
  patientRegister,
} from "../controllers/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../Middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/patient/register", patientRegister);
userRouter.post("/login", login);
userRouter.post("/admin/register", isAdminAuthenticated, addNewAdmin);
userRouter.get("/doctors", getAllDoctors);
userRouter.get("/admin/me", isAdminAuthenticated, getUserDetails);
userRouter.get("/patient/me", isPatientAuthenticated, getUserDetails);
userRouter.get("/admin/logout", isAdminAuthenticated, logOutAdmin);
userRouter.get("/patient/logout", isPatientAuthenticated, logOutPatient);
userRouter.post("/doctor/addnew", isAdminAuthenticated,addNewDoctor);

export default userRouter;
