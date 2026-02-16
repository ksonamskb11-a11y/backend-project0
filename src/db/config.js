import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
  

const connectDB = async ()=> {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
      if (connectionInstance) {
        console.log(`MONGO DB CONNECTED \n App is running on host : ${connectionInstance.connection.host}`);
      }
    } catch (error) {
        console.log(error,"error in mongodb connection");
        process.exit(1);
    }
}

export {connectDB};