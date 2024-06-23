import { userModel } from "../Model/user.js";
import bcrypt from "bcryptjs";
import express from "express";

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

userRouter.post('/login', ()=> {

});

userRouter.post('/logout', ()=> {

});

export default userRouter;
