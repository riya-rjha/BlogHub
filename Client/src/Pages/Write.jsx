import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Write = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [value, setValue] = useState("");

  const array_of_img = [
    {
      name: "art",
      images: [
        { url: "../img/art-1.avif" },
        { url: "../img/art-2.avif" },
        { url: "../img/art-3.avif" },
        { url: "../img/art-4.avif" },
        { url: "../img/art-5.avif" },
        { url: "../img/art-6.avif" },
        { url: "../img/art-7.avif" },
        { url: "../img/art-8.avif" },
        { url: "../img/art-9.avif" },
        { url: "../img/art-10.avif" },
      ],
    },
    {
      name: "science",
      images: [
        { url: "../img/science-1.avif" },
        { url: "../img/science-2.avif" },
        { url: "../img/science-3.avif" },
        { url: "../img/science-4.avif" },
        { url: "../img/science-5.avif" },
        { url: "../img/science-6.avif" },
        { url: "../img/science-7.avif" },
        { url: "../img/science-8.avif" },
        { url: "../img/science-9.avif" },
        { url: "../img/science-10.avif" },
      ],
    },
    {
      name: "technology",
      images: [
        { url: "../img/technology-1.avif" },
        { url: "../img/technology-2.avif" },
        { url: "../img/technology-3.avif" },
        { url: "../img/technology-4.avif" },
        { url: "../img/technology-5.avif" },
        { url: "../img/technology-6.avif" },
        { url: "../img/technology-7.avif" },
        { url: "../img/technology-8.avif" },
        { url: "../img/technology-9.avif" },
        { url: "../img/technology-10.avif" },
      ],
    },
    {
      name: "cinema",
      images: [
        { url: "../img/cinema-1.avif" },
        { url: "../img/cinema-2.avif" },
        { url: "../img/cinema-3.avif" },
        { url: "../img/cinema-4.avif" },
        { url: "../img/cinema-5.avif" },
        { url: "../img/cinema-6.avif" },
        { url: "../img/cinema-7.avif" },
        { url: "../img/cinema-8.avif" },
        { url: "../img/cinema-9.avif" },
        { url: "../img/cinema-10.avif" },
      ],
    },
    {
      name: "design",
      images: [
        { url: "../img/design-1.avif" },
        { url: "../img/design-2.avif" },
        { url: "../img/design-3.avif" },
        { url: "../img/design-4.avif" },
        { url: "../img/design-5.avif" },
        { url: "../img/design-6.avif" },
        { url: "../img/design-7.avif" },
        { url: "../img/design-8.avif" },
        { url: "../img/design-9.avif" },
        { url: "../img/design-10.avif" },
      ],
    },
    {
      name: "food",
      images: [
        { url: "../img/food-1.avif" },
        { url: "../img/food-2.avif" },
        { url: "../img/food-3.avif" },
        { url: "../img/food-4.avif" },
        { url: "../img/food-5.avif" },
        { url: "../img/food-6.avif" },
        { url: "../img/food-7.avif" },
        { url: "../img/food-8.avif" },
        { url: "../img/food-9.avif" },
        { url: "../img/food-10.avif" },
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title) {
        toast.error("Add title of Blog");
        return;
      }
      if (!cat) {
        toast.error("Select category of Blog");
        return;
      }
      if (value.length > 7000) {
        toast.error("Blog description can be up to 7000 characters");
        return;
      }
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(randomNumber);

      const categoryObj = array_of_img.find(
        (category) => category.name === cat
      );
      console.log(categoryObj);
      const selectedImage = categoryObj.images[randomNumber].url;

      const res = await axios.post(
        `${import.meta.env.VITE_baseURL}/post/`,
        {
          title,
          desc: value,
          img: selectedImage,
          cat,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      return res.data;
    } catch (error) {
      toast.error("Blog could not be uploaded, check all fields!");
      console.error(error.message);
    }
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
          <div className="writing-tools mb-4 border border-gray-300 rounded shadow-sm">
            <ReactQuill
              value={value}
              onChange={setValue}
              theme="snow"
              className="w-full resize-none border border-gray-300 rounded"
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

            <div className="flex flex-col mt-6 w-full">
              <button
                className="hover:bg-green-600 transition delay-75 w-full py-2 bg-green-500 text-white rounded shadow-sm"
                onClick={handleSubmit}
              >
                Publish
              </button>
              <h1 className="mt-4 text-green-900">
                Your image will be chosen at random according to the category
                you choose.
              </h1>
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
                      name="same"
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
