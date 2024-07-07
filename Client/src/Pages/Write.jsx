import React, { useState } from "react";
import axiosInstance from "../Components/axiosInstance";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import { baseURL } from "../Components/ServerURL";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // State variable for category
  const [file, setFile] = useState(null); // State variable for file upload
  const [imgUrl, setImgUrl] = useState(""); // State variable for image URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadedImgUrl = await uploadImage();
      setImgUrl(uploadedImgUrl); // Store the uploaded image URL

      const response = await axiosInstance.post(`/post/`, {
        title,
        desc: description,
        cat: category,
        img: uploadedImgUrl, // Assuming img is the field name on the server for image upload
      });

      console.log(response.data); // Log the response

      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setCategory("");
      setFile(null);
    } catch (error) {
      console.error("Error:", error); // Handle errors
    }
  };

  const uploadImage = async (formData) => {
    try {
      const response = await axios.post(`/upload`, imgUrl);
      return response.data; // Assuming server returns the image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      return ""; // Return empty string or handle error appropriately
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
            <input
              style={{ display: "none" }}
              type="file"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="fileUpload"
              className="hover:bg-blue-700 transition delay-75 w-full mt-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              Upload Image
            </label>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="mt-4 mb-2 rounded"
                style={{ maxWidth: "100%" }}
              />
            )}
            {imgUrl && (
              <img
                src={`${baseURL}/Client/public/Images/${imgUrl}`}
                alt="Uploaded"
                className="mt-4 mb-2 rounded"
                style={{ maxWidth: "100%" }}
              />
            )}

            <div className="flex mt-4">
              <button className="hover:bg-gray-700 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded">
                Save as Draft
              </button>
              <button
                className="hover:bg-green-700 transition delay-75 w-1/2 ml-2 py-2 bg-green-500 text-white rounded"
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
                  checked={category === "art"}
                  onChange={() => setCategory("art")}
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
                  checked={category === "science"}
                  onChange={() => setCategory("science")}
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
                  checked={category === "technology"}
                  onChange={() => setCategory("technology")}
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
                  checked={category === "cinema"}
                  onChange={() => setCategory("cinema")}
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
                  checked={category === "design"}
                  onChange={() => setCategory("design")}
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
                  checked={category === "food"}
                  onChange={() => setCategory("food")}
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
