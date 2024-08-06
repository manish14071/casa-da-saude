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
      res.status(200).json({
        success: true,
        create
    } )
  }
  } catch (error) {
    console.log(error);
  }
};


export const getMessage=async(req,res,next)=>{
  try {
const messages= await Message.find();
res.send({msg:"all messages",messages})
    
  } catch (error) {
    console.log(error);
  }
}