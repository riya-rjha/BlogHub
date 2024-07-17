import React, { useState, useEffect } from "react";
import.meta.env.VITE_baseURL;
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({ cat, id_post }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_baseURL}/post/?cat=${cat}`
        );
        const filteredPosts = res.data.filter((post) => post._id !== id_post);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [cat, id_post]);

  return (
    <>
      {posts.length ? (
        <>
          {posts.map((post, index) => (
            <div
              className="bg-[#f7f7f7] shadow-lg transform transition duration-500 hover:scale-105 rounded-md p-8 mb-6 flex flex-col"
              key={index}
            >
              <img
                src={`../Images/${post.img}`}
                alt="post"
                className="w-[315px] h-[210px] rounded shadow-lg mb-2"
              />
              <h4 className="font-semibold text-2xl my-4 flex-grow">
                {post.title}
              </h4>
              <Link className="link mt-auto" to={`/post/${post._id}`}>
                <button className="px-4 py-2 bg-orange-500 text-white rounded w-full">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <h2 className="text-xl md:text-2xl font-bold text-gray-500">
          No blogs to recommend!
        </h2>
      )}
    </>
  );
};

export default Menu;
