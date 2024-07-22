import express from "express";
import { blogModel } from "../Model/blog.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) return res.status(401).json("Not authenticated");

  try {
    const userData = jwt.verify(token, process.env.jwt_secretKey);
    req.userData = userData;
    next();
  } catch (error) {
    return res.status(403).json("Token is not valid");
  }
};

const postRouter = express.Router();

// Post a blog
postRouter.post("/", async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: "Not authenticated" });
  try {
    const userData = jwt.verify(token, process.env.jwt_secretKey);
    const newBlog = new blogModel({
      ...req.body,
      img: req.body.img,
      uid: userData.id,
    });
    await newBlog.save();
    return res.status(201).json({ message: "Blog created successfully!" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Get all blogs
postRouter.get("/", async (req, res) => {
  try {
    const category = req.query.cat;
    const data = category
      ? await blogModel.find({ cat: category })
      : await blogModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get single blog
postRouter.get("/:id", async (req, res) => {
  try {
    const getSinglePost = await blogModel.findById(req.params.id);
    if (!getSinglePost) {
      return res.status(404).json({ error: "Post not found!" });
    }
    return res.status(200).json(getSinglePost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete a blog
postRouter.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deletedPost = await blogModel.findOneAndDelete({
      _id: req.params.id,
      uid: req.userData.id,
    });
    if (!deletedPost) {
      return res.status(404).json({ error: "You can delete only your post!" });
    }
    return res.status(200).json({ message: "Post successfully deleted!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update a blog
postRouter.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedPost = await blogModel.findOneAndUpdate(
      { _id: req.params.id, uid: req.userData.id },
      req.body,
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "You can update only your post!" });
    }
    return res
      .status(200)
      .json({ message: "Post successfully updated!", data: updatedPost });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default postRouter;
