// “id”, “username”, “email”, “password”, and “img”
// Mongoose provides it's set of _id field - primary key
import mongoose, { Model } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },

  {
    timestamps: true, // Creates createdAt + updatedAt fields
  }
);

export const userModel = mongoose.model("users", userSchema);