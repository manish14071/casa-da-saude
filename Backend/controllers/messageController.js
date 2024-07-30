import { Message } from "../Model/messageSchema.js";
import ErrorHandler from "../Middlewares/errorMiddleware.js";


export const sendMessage = async(req,res,next) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    if(!firstName||!lastName ||!email || !phone ||!message){
        return next(new ErrorHandler("please fill form",400));
    }
    
    const create = await Message.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    if (create) {
      res.send({ msg: "created success!" });
    } else {
      res.send({ msg: "error in controller" });
    }
  } catch (error) {
    console.log(error);
  }
};
