// src/Single.jsx
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Components/ServerURL";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Menu from "../Components/Menu";

const Single = () => {
  const [post, setPost] = useState({}); // used {} as we are talking about every single blog post that has multiple fields

  const navigate = useNavigate();
  const location = useLocation();

  const id_post = location.pathname.split("/")[2]; // returns the id of blog

  useEffect(() => {
    const genBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/post/${id_post}`, {
          withCredentials: true,
        });
        setPost(res.data);
      } catch (error) {
        console.log("Post could not be fetched");
      }
    };
    genBlogs();
  }, [id_post]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/post/${id_post}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      toast.error("You can delete only your blog!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-1/2 p-4">
          <img
            src={post.img}
            alt="blog"
            className="w-full rounded shadow-lg mb-4"
          />
          <div className="user-info flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="user"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-black text-xl">Writer</p>
              <p className="text-gray-600 capitalize">
                <span className="font-bold">Date:</span>{" "}
                {moment(post.date).fromNow()}
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <Link to="/edit">
                <FaEdit className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7" />
              </Link>
              <FaTrash
                className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7"
                onClick={handleDelete}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.desc}</p>
        </div>
        {/* Recommended Posts */}
        <div className="right-section md:w-1/2 p-4">
          <Menu cat={post.cat} id_post={id_post} />
        </div>
      </div>
    </div>
  );
};

export default Single;
