import { userModel } from "../Model/user.js";
import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (user) {
      return res.status(409).json({ error: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(200).json({ message: "User creation successful!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({
      username,
    });
    if (!user) {
      return res.status(404).json({ error: "User does not exist!" });
    }
    const checkPwd = await bcrypt.compare(password, user.password);
    if (!checkPwd) {
      return res.status(401).json({ error: "Wrong username or password!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.jwt_secretKey, {
      expiresIn: "1h",
    });
    res.cookie("access_token", token, {
      httpOnly: true,
      maxAge: 3600000,
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({
      username: user.username,
      token: token,
      userId: user._id,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("access_token");
    return res.status(202).json({ message: "User has been logged out!" });
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
});

// Get single user
userRouter.get("/:id", async (req, res) => {
  try {
    const getSingleUser = await userModel.findById(req.params.id);
    if (!getSingleUser) {
      return res.status(404).json({ error: "User not found!" });
    }
    return res.status(200).json(getSingleUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default userRouter;
