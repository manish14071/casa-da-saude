import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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

  message: {
    type: String,
    required: true,
    minLength: [5, "Message   must contain 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
