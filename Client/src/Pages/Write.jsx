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
        { url: "../img/art/art-1.avif" },
        { url: "../img/art/art-2.avif" },
        { url: "../img/art/art-3.avif" },
        { url: "../img/art/art-4.avif" },
        { url: "../img/art/art-5.avif" },
        { url: "../img/art/art-6.avif" },
        { url: "../img/art/art-7.avif" },
        { url: "../img/art/art-8.avif" },
        { url: "../img/art/art-9.avif" },
        { url: "../img/art/art-10.avif" },
      ],
    },
    {
      name: "science",
      images: [
        { url: "../img/science/science-1.avif" },
        { url: "../img/science/science-2.avif" },
        { url: "../img/science/science-3.avif" },
        { url: "../img/science/science-4.avif" },
        { url: "../img/science/science-5.avif" },
        { url: "../img/science/science-6.avif" },
        { url: "../img/science/science-7.avif" },
        { url: "../img/science/science-8.avif" },
        { url: "../img/science/science-9.avif" },
        { url: "../img/science/science-10.avif" },
      ],
    },
    {
      name: "technology",
      images: [
        { url: "../img/technology/technology-1.avif" },
        { url: "../img/technology/technology-2.avif" },
        { url: "../img/technology/technology-3.avif" },
        { url: "../img/technology/technology-4.avif" },
        { url: "../img/technology/technology-5.avif" },
        { url: "../img/technology/technology-6.avif" },
        { url: "../img/technology/technology-7.avif" },
        { url: "../img/technology/technology-8.avif" },
        { url: "../img/technology/technology-9.avif" },
        { url: "../img/technology/technology-10.avif" },
      ],
    },
    {
      name: "cinema",
      images: [
        { url: "../img/cinema/cinema-1.avif" },
        { url: "../img/cinema/cinema-2.avif" },
        { url: "../img/cinema/cinema-3.avif" },
        { url: "../img/cinema/cinema-4.avif" },
        { url: "../img/cinema/cinema-5.avif" },
        { url: "../img/cinema/cinema-6.avif" },
        { url: "../img/cinema/cinema-7.avif" },
        { url: "../img/cinema/cinema-8.avif" },
        { url: "../img/cinema/cinema-9.avif" },
        { url: "../img/cinema/cinema-10.avif" },
      ],
    },
    {
      name: "fiction",
      images: [
        { url: "../img/fiction/fiction-1.avif" },
        { url: "../img/fiction/fiction-2.avif" },
        { url: "../img/fiction/fiction-3.avif" },
        { url: "../img/fiction/fiction-4.avif" },
        { url: "../img/fiction/fiction-5.avif" },
        { url: "../img/fiction/fiction-6.avif" },
        { url: "../img/fiction/fiction-7.avif" },
        { url: "../img/fiction/fiction-8.avif" },
        { url: "../img/fiction/fiction-9.avif" },
        { url: "../img/fiction/fiction-10.avif" },
      ],
    },
    {
      name: "food",
      images: [
        { url: "../img/food/food-1.avif" },
        { url: "../img/food/food-2.avif" },
        { url: "../img/food/food-3.avif" },
        { url: "../img/food/food-4.avif" },
        { url: "../img/food/food-5.avif" },
        { url: "../img/food/food-6.avif" },
        { url: "../img/food/food-7.avif" },
        { url: "../img/food/food-8.avif" },
        { url: "../img/food/food-9.avif" },
        { url: "../img/food/food-10.avif" },
      ],
    },
    {
      name: "others",
      images: [
        { url: "../img/others/other-1.avif" },
        { url: "../img/others/other-2.avif" },
        { url: "../img/others/other-3.avif" },
        { url: "../img/others/other-4.avif" },
        { url: "../img/others/other-5.avif" },
        { url: "../img/others/other-6.avif" },
        { url: "../img/others/other-7.avif" },
        { url: "../img/others/other-8.avif" },
        { url: "../img/others/other-9.avif" },
        { url: "../img/others/other-10.avif" },
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
      const otherRandomNo = Math.floor(Math.random() * 20) + 1;
      // console.log(randomNumber);

      const categoryObj = array_of_img.find(
        (category) => category.name === cat
      );

      const selectedImage = categoryObj.images[randomNumber].url;

      const otherSelectedImage = categoryObj.images[otherRandomNo].url;

      const res = await axios.post(
        `${import.meta.env.VITE_baseURL}/post/`,
        {
          title,
          desc: value,
          img: cat === "others" ? otherSelectedImage : selectedImage,
          cat,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      return res.data;
    } catch (error) {
      toast("Double click to submit blog!");
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
              {[
                "art",
                "science",
                "technology",
                "cinema",
                "fiction",
                "food",
                "others",
              ].map((category) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
