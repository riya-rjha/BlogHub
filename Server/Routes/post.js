import express from "express";
import { blogModel } from "../Model/blog.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const postRouter = express.Router();

// Post a blog
postRouter.post("/", async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: "Authenticate first!" });

  jwt.verify(token, process.env.jwt_secretKey, async (err, userData) => {
    try {
      if (err) return res.status(403).json({ error: "Invalid token" });

      const newBlog = new blogModel({
        ...req.body,
        uid: userData.id,
      });

      await newBlog.save();
      return res.status(201).json({ message: "Blog created successfully!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
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
postRouter.delete("/:id", async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: "Authenticate first!" });

  jwt.verify(token, process.env.jwt_secretKey, async (err, userData) => {
    try {
      if (err) return res.status(403).json({ error: "Token is invalid!" });

      const deletedPost = await blogModel.findOneAndDelete({
        _id: req.params.id,
        uid: userData.id,
      });
      if (!deletedPost) {
        return res.status(404).json({ error: "You can delete only your post!" });
      }
      return res.status(200).json({ message: "Post successfully deleted!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
});

// Update a blog
postRouter.put("/:id", async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: "Authenticate first!" });

  jwt.verify(token, process.env.jwt_secretKey, async (err, userData) => {
    if (err) return res.status(403).json({ error: "Token is invalid!" });

    try {
      const updatedPost = await blogModel.findOneAndUpdate(
        { _id: req.params.id, uid: userData.id },
        req.body,
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ error: "You can update only your post!" });
      }
      return res.status(200).json({ message: "Post successfully updated!", data: updatedPost });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
});

export default postRouter;
