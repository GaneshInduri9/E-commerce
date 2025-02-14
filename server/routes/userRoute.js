import express from "express";
import {
  loginUser,
  userRegister,
  adminLogin,
} from "../controllers/userContoller.js";

const userRouter = express.Router();
userRouter.post("/register", userRegister);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
