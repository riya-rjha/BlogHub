// src/Write.jsx
import React, { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import axios from "axios";
import { baseURL } from "../Components/ServerURL";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const inputs = {
    title,
    description,
    category,
  };

  const handleSubmit = async () => {
    const response = await axios.post(`${baseURL}/post/`, inputs);
    setTitle(response.data.title);
    setCategory(response.data.category);
    setDescription(response.data.description);
    console.log(response);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-2/3 p-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-4 text-2xl border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="writing-tools mb-4 p-2 border rounded">
            <div className="flex items-center mb-2">
              <select className="p-2 border rounded mr-4">
                <option>Normal</option>
                <option>Cursive</option>
                <option>Decorative</option>
              </select>
              <FaBold className="mx-2 cursor-pointer " />
              <FaItalic className="mx-2 cursor-pointer" />
              <FaUnderline className="mx-2 cursor-pointer" />
              <FaListUl className="mx-2 cursor-pointer" />
              <FaListOl className="mx-2 cursor-pointer" />
            </div>
            <textarea
              placeholder="Write your blog here..."
              className="w-full resize-none p-2 border  rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="right-section md:w-1/3 p-4">
          <div className="publish-box p-4 border rounded mb-4">
            <h3 className="text-xl font-bold mb-4">Publish</h3>
            <p>
              <span className=" font-bold">Status:</span> Draft
            </p>
            <p>
              <span className=" font-bold">Visibility:</span> Public
            </p>
            <button className="hover:bg-blue-700 transition delay-75 w-full mt-4 py-2 bg-blue-500 text-white rounded">
              Upload Image
            </button>
            <div className="flex mt-4">
              <button className="hover:bg-gray-700 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded">
                Save as Draft
              </button>
              <button className="hover:bg-green-700 transition delay-75 w-1/2 ml-2 py-2 bg-green-500 text-white rounded" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </div>
          <div className="category-box p-4 border rounded">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-col">
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Art
              </label>
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Science
              </label>
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Technology
              </label>
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Cinema
              </label>
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Design
              </label>
              <label className="mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                Food
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
