import mongoose from "mongoose";

export const dbConnection=async ()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URI)
    if(connection){
        console.log("database is connected");
    }
    
    } catch (error) {
        console.log(error)
        
    }
}