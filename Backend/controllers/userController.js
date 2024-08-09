import ErrorHandler from "../Middlewares/errorMiddleware.js";
import { User } from "../Model/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";
 import catchAsyncErrors  from "../Middlewares/catchAsyncErrors.js"

export const patientRegister = async(req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !sns ||
      !dob ||
      !gender ||
      !password
    ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    let isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return new ErrorHandler("user already registered");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role: "Patient",
    });
    generateToken(user, "user Registered", 200, res);
    res.send({ msg: "user created!!" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password, confirmPassword, role } = req.body;
    if (!email || !password || !confirmPassword || !role) {
      return next(new ErrorHandler("fill all details"));
    }
    if (password !== confirmPassword) {
      return next(new ErrorHandler("password don't match"));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid password or email"));
    }

    const isPassword = await user.comparePassword(password);
    if (!isPassword) {
      return next(new ErrorHandler("Invalid password or email"));
    }
    if (role !== user.role) {
      return next(new ErrorHandler("User with role not found"));
    }

    generateToken(user, " Login successfully", 200, res);
  } catch (error) {
    console.log(error);
  }
};

export const addNewAdmin = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !dob ||
      !gender ||
      !password
    ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return new ErrorHandler(
        ` ${isRegistered.role}Admin with email   already exist!!`
      );
    }
    const admin = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role: "Admin",
    });

    res.send({ msg: "Admin registered" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await User.find({ role: "Doctor" });
    res.send({ msg: "doctors here", doctors });
  } catch (error) {}
};

export const getUserDetails = async (req, res, next) => {
  const user = req.user;
  res.send({ msg: "working", user });
};

export const logOutAdmin = (req, res, next) => {
  try {
    res
      .status(201)
      .cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Admin logged out Successfully",
      });
  } catch (error) {
    console.log(error);
  }
};

export const logOutPatient = (req, res, next) => {
  try {
    res
      .status(200)
      .cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "  Logged out Successfully",
      });
  } catch (error) {
    console.log(error);
  }
};

export const addNewDoctor = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next(new ErrorHandler("Doctor Avatar Required"));
    }
    const { docAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

    if (!allowedFormats.includes(docAvatar.mimetype)) {
      return next(new ErrorHandler("file format not supported"));
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role,
      doctorDepartment,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !gender ||
      !dob ||
      !sns ||
      !doctorDepartment
    ) {
      return next(new ErrorHandler("Please provide details"));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return next(
        new ErrorHandler(`${isRegistered.role}already exists with this email`)
      );
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
      docAvatar.tempFilePath
    );

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error(
        "cloudinary Error",
        cloudinaryResponse.error || "unknown cloudinary Error"
      );
    }

    const doctor = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      dob,
      sns,
      role,
      doctorDepartment,
      role: "Doctor",
      docAvatar: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });
    res.send({ msg: "new dr added", doctor });
  } catch (error) {
    console.log(error);
  }
};
