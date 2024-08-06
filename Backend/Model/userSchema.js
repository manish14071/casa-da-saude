import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
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
    minLength: [11, "Phone number must contain 11 digits"],
    maxLength: [11, "Phone number must contain 11 digits"],
  },

  sns: {
    type: String,
    required: true,
    minLength: [9, "Sns number must contain 9 digits"],
    maxLength: [9, "Sns number must contain 9 digits"],
  },
dob:{
    type: String,
    required:true,

},
gender:{
    type:String,
    required:true,
    enum:["Male","Female"],
},
password:{
    type:String,
    minLength:[8],
    required:true,
    select:false

},
role:{
    type:String,
    required:true,
    enum:["Admin","Patient","Doctor"],
},
doctorDepartment:{
    type:String
},
docAvatar:{
    public_id:String,
    url:String,

},


});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)

};

userSchema.methods.generateJsonWebToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    });
};

export const User = mongoose.model("User", userSchema);
