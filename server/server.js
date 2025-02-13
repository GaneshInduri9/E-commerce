import express from "express";
import cors from "cors";
import connectToDB from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;
connectToDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("BACKEND RESPONSE");
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}!`);
});
