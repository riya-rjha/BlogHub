// src/Single.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Single = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-1/2 p-4">
          <img src="https://via.placeholder.com/400" alt="blog" className="w-full rounded shadow-lg mb-4" />
          <div className="user-info flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="user" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Username</p>
              <p className="text-gray-600">Written on June 23, 2024</p>
            </div>
            <div className="ml-auto flex items-center">
              <FaEdit className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer" />
              <FaTrash className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Blog Title</h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="right-section md:w-1/2 p-4">
          <h3 className="text-4xl font-bold mb-4">Other posts you may like</h3>
          <div className="other-post mb-6">
            <img src="https://via.placeholder.com/200" alt="post" className="w-full rounded shadow-lg mb-2" />
            <h4 className="font-bold text-lg mb-2">Post Title</h4>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">Read More</button>
          </div>
          <div className="other-post">
            <img src="https://via.placeholder.com/200" alt="post" className="w-full rounded shadow-lg mb-2" />
            <h4 className="font-bold text-lg mb-2">Post Title</h4>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
