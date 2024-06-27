// src/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../Components/ServerURL";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const blogPosts = await axios.get(`${baseURL}/post/`);
      setBlogs(blogPosts.data);
    };
    getAllBlogs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {blogs.map((blog, index) => (
        <div
          key={blog._id}
          className={`blog-container shadow-lg flex flex-col md:flex-row items-center my-8 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.desc.slice(0, 250)} <span className="font-bold">. . . .</span></p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-2 bg-orange-500 text-[18px] hover:bg-orange-600 transition-all delay-75 text-white rounded">
                Read More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <img
              src={
                blog.img ||
                "https://img.freepik.com/free-photo/social-media-networking-online-communication-connect-concept_53876-124862.jpg?ga=GA1.1.224769648.1717002388&semt=sph"
              }
              alt={blog.title} 
              className="w-full md:mx-auto rounded shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
