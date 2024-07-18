import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const blogPosts = await axios.get(
          `${import.meta.env.VITE_baseURL}/post`
        );
        setAllBlogs(blogPosts.data);
      } catch (error) {
        console.error("Blogs could not be loaded!");
        console.error(error.message);
      }
    };
    getAllBlogs();
  }, []);

  useEffect(() => {
    const filterSearchedBlogs = () => {
      const newBlogs = allBlogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search) ||
          blog.title.toUpperCase().includes(search) ||
          blog.desc.toLowerCase().includes(search) ||
          blog.title.toUpperCase().includes(search)
      );
      setFilteredBlogs(newBlogs);
    };

    filterSearchedBlogs();
  }, [search, allBlogs]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <input
        type="text"
        className="w-full mt-7 py-2 px-4 border-2 border-gray-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:border-orange-500 focus:ring-orange-500"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
