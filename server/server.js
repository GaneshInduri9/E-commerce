import express from "express";
import cors from "cors";
import connectToDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectToDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Api endpoints
app.use("/api/user/", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("BACKEND RESPONSE");
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}!`);
});
