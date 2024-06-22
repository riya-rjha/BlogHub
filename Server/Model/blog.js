// “id”, “title”, “desc”, “img”, “cat”, “date”, and “uid”

import mongoose from 'mongoose';

const {Schema} = mongoose;

const blogSchema = new Schema({
    title: {
        required: true,
        type: String,
    },
    desc:{
        required: true,
        type: String,
        maxLength: 1000
    },
    img: {
        type: String,
    },
    cat: {
        required: true, 
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
        index: true
    }
});

export const blogModel = mongoose.model("blogs", blogSchema);