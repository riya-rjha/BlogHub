import express from "express";
import "dotenv/config";
import postRouter from "./Routes/post.js";

// Create an instance of express
const app = express();

// Parse Middleware Requests
app.use(express.json());

// Setting up User Routes
app.use("/post", postRouter);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`App is listening to PORT ${process.env.PORT}`);
});
