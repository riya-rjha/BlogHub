import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import { AuthorizationContext } from "../Context/authContext";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const cat = useLocation().search;

  const { filterSearchedBlogs } = useContext(AuthorizationContext);

  useEffect(
    () => {
      const filteredResults = filterSearchedBlogs(search, allBlogs);
      setFilteredBlogs(filteredResults);

      filteredResults.map((_) => {
        const searchedTitleKeyword = document.getElementById("titleBlog");
        console.log(searchedTitleKeyword);
        // searchedTitleKeyword.classList.add("red");
      });
    },
    [search],
    [allBlogs]
  );

  useEffect(() => {
    const getBlogs = async () => {
      setIsLoading(true);
      try {
        const blogPosts = await axios.get(
          `${import.meta.env.VITE_baseURL}/post${cat}`
        );
        setBlogs(blogPosts.data);
      } catch (error) {
        toast.error("Blogs could not be loaded!");
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBlogs();
  }, [cat]);

  useEffect(() => {
    const getAllBlogs = async () => {
      setIsLoading(true);
      try {
        const blogPosts = await axios.get(
          `${import.meta.env.VITE_baseURL}/post`
        );
        setAllBlogs(blogPosts.data);
      } catch (error) {
        toast.error("Blogs could not be loaded!");
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllBlogs();
  }, []);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6); // Increase visible blogs by 6
  };

  const blogsToShow = cat
    ? blogs.slice(0, visibleBlogs)
    : allBlogs.slice(0, visibleBlogs);

  return (
    <div className="container mx-auto p-6">
      {!cat ? (
        <div className="relative mx-auto max-w-3xl">
          <input
            type="text"
            className="w-full mt-7 py-2 px-4 border-2 border-gray-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:border-orange-500 focus:ring-orange-500"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      ) : (
        <></>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {search ? (
            <>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                  <div
                    key={blog._id}
                    className={`blog-container shadow-lg flex flex-col md:flex-row items-center my-8 transform transition duration-500 hover:scale-105 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2 p-4 order-2 md:order-1 ">
                      <h2
                        className="md:text-4xl text-2xl font-bold mb-4 text-center md:text-left"
                        id="titleBlog"
                      >
                        {blog.title}
                      </h2>
                      <p
                        className={`text-gray-700 mb-4 md:text-justify text-center`}
                        id="desc-blog"
                      >
                        {parse(blog.desc.slice(0, 250))}{" "}
                        <span className="font-bold">. . . .</span>
                      </p>
                      <div className="flex justify-center md:justify-start">
                        <Link to={`/post/${blog._id}`}>
                          <button className="px-6 py-2 bg-orange-500 text-[18px] hover:bg-orange-600 transition-all delay-75 text-white rounded">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-4 order-1 md:order-2">
                      {(immm = blog.img)}
                      <img
                        src="../Images/immm"
                        alt={blog.title}
                        className="w-full md:mx-auto rounded shadow-lg"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-screen">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-500">
                    No blogs to display
                  </h2>
                </div>
              )}
            </>
          ) : (
            <>
              {blogsToShow.length > 0 ? (
                blogsToShow.map((blog, index) => (
                  <div
                    key={blog._id}
                    className={`blog-container shadow-lg flex flex-col md:flex-row items-center my-8 transform transition duration-500 hover:scale-105 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2 p-4 order-2 md:order-1 ">
                      <h2 className="md:text-4xl text-2xl font-bold mb-4 text-center md:text-left">
                        {blog.title}
                      </h2>
                      <p
                        className={`text-gray-700 mb-4 md:text-justify text-center`}
                      >
                        {parse(blog.desc.slice(0, 250))}{" "}
                        <span className="font-bold">. . . .</span>
                      </p>
                      <div className="flex justify-center md:justify-start">
                        <Link to={`/post/${blog._id}`}>
                          <button className="px-6 py-2 bg-orange-500 text-[18px] hover:bg-orange-600 transition-all delay-75 text-white rounded">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-4 order-1 md:order-2">
                      <img
                        src={
                          blog.img !== undefined
                            ? `../Images/${blog.img}`
                            : "https://img.freepik.com/free-photo/social-media-networking-online-communication-connect-concept_53876-124862.jpg?ga=GA1.1.224769648.1717002388&semt=sph"
                        }
                        alt={blog.title}
                        className="w-full md:mx-auto rounded shadow-lg"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-screen">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-500">
                    No blogs to display
                  </h2>
                </div>
              )}

              {blogsToShow.length < (cat ? blogs.length : allBlogs.length) && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-2 bg-blue-500 text-[18px] hover:bg-blue-600 text-white rounded"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
