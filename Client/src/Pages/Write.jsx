import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../Components/ServerURL";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("cat", cat);
    formData.append("img", image);

    try {
      await axios.post(`${baseURL}/post`, formData, {
        withCredentials: true, // Send cookies with the request if using cookies for authentication
      });
      console.log("Blog submitted successfully!");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 text-2xl border rounded"
        />
        <textarea
          placeholder="Write your blog here..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full resize-none p-2 border rounded"
        ></textarea>
        <input
          type="file"
          name="img-blog"
          onChange={handleImageChange}
          className="mt-4"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="p-2 border rounded mr-4"
        >
          <option value="">Select Category</option>
          <option value="Art">Art</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Cinema">Cinema</option>
          <option value="Design">Design</option>
          <option value="Food">Food</option>
        </select>
        <button
          type="submit"
          className="hover:bg-green-700 transition delay-75 w-full mt-4 py-2 bg-green-500 text-white rounded"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
