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
    const imgUrl = await upload();
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
            <ReactQuill
              value={value}
              onChange={setValue}
              className="w-full resize-none p-2 border rounded"
            />
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
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name=""
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="file"
              className="hover:bg-blue-700 transition delay-75 w-full mt-4 py-2 bg-blue-500 text-white rounded cursor-pointer file"
            >
              Upload Image
            </label>
            <div className="flex mt-4">
              <button className="hover:bg-gray-700 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded">
                Save as Draft
              </button>
              <button
                className="hover:bg-green-700 transition delay-75 w-1/2 ml-2 py-2
               bg-green-500 text-white rounded"
                onClick={handleSubmit}
              >
                Publish
              </button>
            </div>
          </div>
          <div className="category-box p-4 border rounded">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-col">
              <div className="mb-2">
                <input
                  type="radio"
                  id="art"
                  value="art"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="art" className="ml-2">
                  Art
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="science"
                  value="science"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="science" className="ml-2">
                  Science
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="technology"
                  value="technology"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="technology" className="ml-2">
                  Technology
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="cinema"
                  value="cinema"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="cinema" className="ml-2">
                  Cinema
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="design"
                  value="design"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="design" className="ml-2">
                  Design
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="food"
                  value="food"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="food" className="ml-2">
                  Food
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
