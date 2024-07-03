import express from "express";
import "dotenv/config";
import postRouter from "./Routes/post.js";
import mongoose from "mongoose";
import userRouter from "./Routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an instance of express
const app = express();

// Parse Middleware Requests
app.use(express.json());

// Use cookie parser to parse cookies from incoming requests
app.use(cookieParser());

// Setup CORS
// "proxy":http//localhost:8000/api -> Enable cors through Client/package.json
app.use(cors());

// Setting up Blog Routes
app.use("/post", postRouter);

// Setting up User authentication Route
app.use("/auth", userRouter);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.mongoDBURL);
    // Start Server
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to PORT ${process.env.PORT}`);
    });
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error.message);
    process.exit(1); // To exit ongoing Node.js process
  }
};

connectToDatabase();
