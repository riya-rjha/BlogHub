import express from "express";
import { blogModel } from "../Model/blog.js";
import jwt from "jsonwebtoken";
import "dotenv/config";


const postRouter = express.Router();

const filestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: filestorage })

// Post a blog
postRouter.post("/", upload.single('img-blog'),async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.json("Authenticate first!");
  jwt.verify(token, process.env.jwt_secretKey, async (err, userData) => {
    try {
      if (err) return res.json("Invalid token");
      const newBlog = new blogModel({
        ...req.body,
        uid: userData.id,
        
      });
      newBlog.save();
      return res.status(202).json("Blog created successfully!");
    } catch (error) {
      return res.status(500).json(error);
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
    return res.status(500).json(error);
  }
});

// Get single blog
postRouter.get("/:id", () => {});

// Delete a blog
postRouter.delete("/:id", () => {});

// Update a blog
postRouter.put("/:id", () => {});

export default postRouter;
