import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id_post = location.pathname.split("/")[2]; 

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [prevImg, setPrevImg] = useState(""); 

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_baseURL}/post/${id_post}`
      );
      const postData = response.data;
      setTitle(postData.title);
      setCat(postData.cat);
      setValue(postData.desc);
      setPrevImg(postData.img); 
    } catch (error) {
      console.error("Error fetching post data:", error.message);
    }
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        `${import.meta.env.VITE_baseURL}/post/upload`,
        formData,
        {
          withCredentials: true,
        }
      );
      return res.data.url; 
    } catch (error) {
      toast.error("Upload an image!");
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgUrl = prevImg; 
    if (file) {
      imgUrl = await upload(); 
    }

    try {
      if (!title) {
        toast.error("Add title of Blog");
        return;
      }
      if (!cat) {
        toast.error("Select category of Blog");
        return;
      }
      if (value.length > 7000) {
        toast.error("Blog description can be up to 7000 characters");
        return;
      }

      const res = await axios.put(
        `${import.meta.env.VITE_baseURL}/post/${id_post}`,
        {
          title,
          desc: value,
          img: imgUrl,
          cat,
        },
        {
          withCredentials: true,
        }
      );
      navigate("/");
      return res.data;
    } catch (error) {
      toast.error("Blog update failed, check all fields!");
      console.log(error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row my-8">
        <div className="left-section md:w-2/3 p-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-4 mb-4 text-3xl border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="writing-tools mb-4 border border-gray-300 rounded shadow-sm">
            <ReactQuill
              value={value}
              onChange={setValue}
              theme="snow"
              className="w-full resize-none border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="right-section md:w-1/3 p-4">
          <div className="publish-box p-6 border border-gray-300 rounded shadow-sm mb-4 bg-white">
            <h3 className="text-2xl font-bold mb-4">Publish</h3>
            <p className="mb-2">
              <span className="font-semibold">Status:</span> Draft
            </p>
            <p className="mb-4">
              <span className="font-semibold">Visibility:</span> Public
            </p>

            {prevImg && !file && (
              <div className="mt-4">
                <img
                  src={`../Images/${prevImg}`}
                  alt="Uploaded"
                  className="w-full h-auto rounded"
                />
              </div>
            )}
            {file && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded"
                  className="w-full h-auto rounded"
                />
              </div>
            )}
            <div className="flex mt-6">
              <button className="hover:bg-gray-600 transition delay-75 w-1/2 mr-2 py-2 bg-gray-500 text-white rounded shadow-sm">
                Save as Draft
              </button>
              <button
                className="hover:bg-green-600 transition delay-75 w-1/2 ml-2 py-2 bg-green-500 text-white rounded shadow-sm"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </div>
          <div className="category-box p-6 border border-gray-300 rounded shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-4">Categories</h3>
            <div className="flex flex-col">
              {["art", "science", "technology", "cinema", "fiction", "food"].map(
                (category) => (
                  <div className="mb-2 flex items-center" key={category}>
                    <input
                      type="radio"
                      id={category}
                      value={category}
                      checked={cat === category}
                      onChange={(e) => setCat(e.target.value)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="ml-2 capitalize">
                      {category}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
