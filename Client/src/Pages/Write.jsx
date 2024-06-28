// src/Write.jsx
import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
} from "react-icons/fa";

const Write = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-2/3 p-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-4 text-2xl border rounded"
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
            <input type="file" name="img-blog" id="" className="mt-4" />
            <div className="flex mt-4">
              <button className="hover:bg-gray-700 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded">
                Save as Draft
              </button>
              <button className="hover:bg-green-700 transition delay-75 w-1/2 ml-2 py-2 bg-green-500 text-white rounded">
                Publish
              </button>
            </div>
          </div>
          <div className="category-box p-4 border rounded">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-col">
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
                Art
              </label>
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
                Science
              </label>
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
                Technology
              </label>
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
                Cinema
              </label>
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
                Design
              </label>
              <label className="mb-2">
                <input type="checkbox" className="mr-2" />
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
