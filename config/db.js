import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DATABASE CONNECTED");
    }catch(err){
        console.log("DATABASE NOT CONNECTED");
        console.log(err.message);
        process.exit(1);
    }
}
export default connectDB;