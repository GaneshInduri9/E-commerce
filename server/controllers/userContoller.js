import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateUserToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Handler of user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if the user is in DB
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "invalid user email" });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "invalid password" });
    }

    const token = generateUserToken(user._id);
    console.log("user login success");
    return res.json({ success: true, token });
  } catch (err) {
    console.log(console.err);
    res.json({ success: false, message: err.message });
  }
};

// Handler for user register
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking if he user is already is registered
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "user already exists" });
    }

    // check user password and mail validity and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid mail" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // save user in the DB
    const user = await newUser.save();

    // Generate a token for user authnecity
    const token = generateUserToken(user._id);

    res.json({ success: true, token });
  } catch (err) {
    console.log(console.err);
    res.json({ success: false, message: err.message });
  }
};

// Handler for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password == process.env.ADMIN_PASSWORD
    ) {
      let token = jwt.sign(email + password, process.env.JWT_SECRET);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error });
  }
};

export { loginUser, userRegister, adminLogin };
