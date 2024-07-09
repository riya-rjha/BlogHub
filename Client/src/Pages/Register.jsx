// src/Register.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../Components/ServerURL";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputs = {
    username,
    email,
    password,
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/auth/register`, inputs, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {
      toast.error("User already exists!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border 
            border-gray-300 placeholder-gray-500 text-gray-900 
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="appearance-none relative block w-full px-3 py-2 border
            border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
             focus:z-10 sm:text-sm mt-3"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            required
            className="appearance-none relative block w-full px-3 py-2 border
             border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              focus:z-10 sm:text-sm mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 
              border border-transparent text-sm font-medium rounded-md 
              text-white bg-indigo-600 hover:bg-indigo-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
