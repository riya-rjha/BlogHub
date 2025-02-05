import React, { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import.meta.env.VITE_baseURL;
import { toast } from "react-toastify";
import axios from "axios";
import Menu from "../Components/Menu";
import { AuthorizationContext } from "../Context/authContext";
import parse from "html-react-parser";
import Loading from "../Components/Loading";

const Single = () => {
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [writer, setWriter] = useState("");
  const [imgReceived, setImgReceived] = useState("");

  const { userId, currentUser } = useContext(AuthorizationContext);

  const navigate = useNavigate();
  const location = useLocation();

  const id_post = location.pathname.split("/")[2]; // returns the id of blog

  useEffect(() => {
    const genBlogs = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_baseURL}/post/${id_post}`,
          {
            withCredentials: true,
          }
        );
        setPost(res.data);
        setImgReceived(res.data.img);
        console.log(imgReceived);
      } catch (error) {
        console.log("Post could not be fetched");
      } finally {
        setIsLoading(false);
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

  const getWriter = async () => {
    try {
      const postUserID = post.uid;
      const userData = await axios.get(
        `${import.meta.env.VITE_baseURL}/auth/${postUserID}`
      );
      setWriter(userData.data.username.toUpperCase());
    } catch (error) {
      console.log(error.message);
    }
  };

  getWriter();

  return (
    <>
      {isLoading && <Loading />}
      <div className="container mx-auto p-6 relative">
        <div className="my-8">
          <div className="p-4">
            <img
              src={imgReceived}
              alt="blog"
              className="w-full rounded shadow-lg mb-4"
            />
            <div className="flex items-center mb-4">
              <img
                src={
                  "https://cdn-icons-png.freepik.com/256/7977/7977760.png?ga=GA1.1.448448890.1721050418&semt=ais_hybrid"
                }
                alt="user"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-black text-xl">
                  Written by <span className="font-bold">{writer}</span>
                </p>
                <p className="text-gray-600 capitalize">
                  <span className="font-bold text-l">Date:</span>{" "}
                  {new Date(post.createdAt).toString() === "Invalid Date"
                    ? new Date().toDateString()
                    : new Date(post.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                </p>
              </div>
              {userId === post.uid && currentUser ? (
                <div className="ml-auto flex items-center">
                  <Link to={`/edit/${post._id}`}>
                    <FaEdit className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7" />
                  </Link>
                  <FaTrash
                    className="text-gray-600 hover:text-gray-800 mx-2 cursor-pointer h-7 w-7"
                    onClick={() => setShowModal(true)}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-4">
              {parse(post.desc ? post.desc.toString() : "")}
            </p>
          </div>
          {/* Recommended Posts */}

          <div className="mt-2 p-4">
            <h2 className="text-4xl font-bold mb-10">Recommended Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Menu cat={post.cat} id_post={id_post} />
            </div>
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
    </>
  );
};

export default Single;
