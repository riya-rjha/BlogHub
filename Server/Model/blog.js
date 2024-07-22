// “id”, “title”, “desc”, “img”, “cat”, “date”, and “uid”

import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    desc: {
      required: true,
      type: String,
      maxLength: 7000,
    },
    cat: {
      required: true,
      type: String,
    },
    img: {
      type: String,
    },
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const blogModel = mongoose.model("blogs", blogSchema);
