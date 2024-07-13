import React, { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import.meta.env.VITE_baseURL;
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Menu from "../Components/Menu";
import { AuthorizationContext } from "../Context/authContext";

const Single = () => {
  const [post, setPost] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { currentUser } = useContext(AuthorizationContext);

  const navigate = useNavigate();
  const location = useLocation();

  const id_post = location.pathname.split("/")[2]; // returns the id of blog

  useEffect(() => {
    const genBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_baseURL}/post/${id_post}`,
          {
            withCredentials: true,
          }
        );
        setPost(res.data);
      } catch (error) {
        console.log("Post could not be fetched");
      }
    };
    genBlogs();
  }, [id_post]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_baseURL}/post/${id_post}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      toast.error("You can delete only your blog!");
    }
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalConfirm = () => {
    handleDelete();
    setShowModal(false);
  };

  const registeredUserName = post.uid;
  console.log(registeredUserName);

  return (
    <div className="container mx-auto p-6 relative">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-1/2 p-4">
          <img
            src={
              post.img !== undefined
                ? `../Images/${post.img}`
                : "https://img.freepik.com/free-photo/social-media-networking-online-communication-connect-concept_53876-124862.jpg?ga=GA1.1.224769648.1717002388&semt=sph"
            }
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
                <span className="font-bold text-l">Date:</span>{" "}
                {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <Link to="/edit">
                <FaEdit className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7" />
              </Link>
              <FaTrash
                className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7"
                onClick={() => setShowModal(true)}
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Delete Blog</h2>
            <p className="mb-4">Do you really want to delete the blog?</p>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-700"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleModalConfirm}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Single;
