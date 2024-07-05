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
      return res.status(409).json("User already exists!");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.status(200).json("User creation successful!");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({
      username,
    });
    if (!user) {
      return res.status(404).json("User does not exist!");
    }
    const checkPwd = await bcrypt.compare(password, user.password);
    if (!checkPwd) {
      return res.json(401).json("Wrong username or password!");
    }
    const token = jwt.sign({ id: user._id }, process.env.jwt_secretKey, {
      expiresIn: "1d",
    });
    // , {expiresIn: '1h'} - expiration time if specified

    const { password: pwd, ...props } = user; // password stored in pwd in hashed format

    res
      .cookie("access_token", token, {
        httpOnly: true, // Cookie can be accessed only by web server & not JS Console
      })
      .status(200)
      .json({
        username: user.username
      }); // returns everything except user's password
  } catch (error) {
    return res.status(500).json(error);
  }
});

userRouter.post("/logout", (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none", // to disable cross site requests
      secure: true, // cookie to be used with HTTPS only
    })
    .status(202)
    .json("User has been logged out!");
});

export default userRouter;
