import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../Components/ServerURL";

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${baseURL}/post/upload`, formData, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = file ? await upload() : "";
    try {
      const res = await axios.post(
        `${baseURL}/post/`,
        {
          title,
          desc: value,
          img: imgUrl,
          cat,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-2/3 p-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-4 mb-4 text-3xl border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="writing-tools mb-4 p-4 border border-gray-300 rounded shadow-sm">
            <ReactQuill
              value={value}
              onChange={setValue}
              className="w-full resize-none p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="right-section md:w-1/3 p-4">
          <div className="publish-box p-6 border border-gray-300 rounded shadow-sm mb-4 bg-white">
            <h3 className="text-2xl font-bold mb-4">Publish</h3>
            <p className="mb-2">
              <span className="font-semibold">Status:</span> Draft
            </p>
            <p className="mb-4">
              <span className="font-semibold">Visibility:</span> Public
            </p>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name=""
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="hover:bg-blue-600 transition delay-75 w-full mt-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-center"
            >
              Upload Image
            </label>
            {file && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded"
                  className="w-full h-auto rounded"
                />
              </div>
            )}
            <div className="flex mt-6">
              <button className="hover:bg-gray-600 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded shadow-sm">
                Save as Draft
              </button>
              <button
                className="hover:bg-green-600 transition delay-75 w-1/2 ml-2 py-2 bg-green-500 text-white rounded shadow-sm"
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
          </div>
          <div className="category-box p-6 border border-gray-300 rounded shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            <div className="flex flex-col">
              {["art", "science", "technology", "cinema", "design", "food"].map(
                (category) => (
                  <div className="mb-2 flex items-center" key={category}>
                    <input
                      type="radio"
                      id={category}
                      value={category}
                      onChange={(e) => setCat(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="ml-2 capitalize">
                      {category}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
