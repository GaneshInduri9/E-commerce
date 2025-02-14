import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDB = async () => {
  /**Event that get's emitted when we are connected to mogodb */
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(process.env.MONGODB_URL);
};

export default connectToDB;
