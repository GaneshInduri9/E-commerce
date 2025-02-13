import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });
  await mongoose.connect(process.env.MONGODB_URL);
};

export default connectToDB;
