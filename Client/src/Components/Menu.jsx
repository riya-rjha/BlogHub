import React, { useState, useEffect } from "react";
import { baseURL } from "./ServerURL";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({ cat, id_post }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/post/?cat=${cat}`);
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
      <h3 className="text-4xl font-bold mb-4">Other posts you may like</h3>
      {posts.map((post, index) => (
        <div className="other-post mb-6" key={index}>
          <img
            src={`../Images/${post.img}`}
            alt="post"
            className="w-full rounded shadow-lg mb-2"
          />
          <h4 className="font-bold text-2xl mb-2">{post.title}</h4>
          <Link className="link" to={`/post/${post._id}`}>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Menu;
