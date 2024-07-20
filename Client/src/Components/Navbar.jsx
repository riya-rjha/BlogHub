// src/Navbar.js
import React from "react";
import logo from "../img/RRJ-logo.png";
import { AuthorizationContext } from "../Context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthorizationContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className=" shadow-lg sticky bg-white z-[1000] top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative  flex items-center justify-between h-24">
          {/* Left side logo */}
          <div className="flex items-center">
            <Link to="/">
              <img className="h-16 rounded-full logo" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Center links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                <Link
                  to="/?cat=art"
                  className="bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-bold hover:underline"
                >
                  Art
                </Link>
                <Link
                  to="/?cat=science"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline text-[#17002A]"
                >
                  Science
                </Link>
                <Link
                  to="/?cat=technology"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline text-[#17002A]"
                >
                  Technology
                </Link>
                <Link
                  to="/?cat=cinema"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hide-links"
                >
                  Cinema
                </Link>
                <Link
                  to="/?cat=design"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline   hide-links    "
                >
                  Design
                </Link>
                <Link
                  to="/?cat=food"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hide-links"
                >
                  Food
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center">
              {currentUser ? (
                <div className="flex items-center">
                  <div className="flex gap-2 items-center justify-center mr-4 acc">
                    <div className="bg-gray-300 rounded-full p-1">
                      <MdAccountCircle className="text-gray-800 text-2xl" />
                    </div>
                    {currentUser.username ? (
                      <h1>{currentUser.username.split(' ')[0].toUpperCase()}</h1>
                    ) : (
                      <h1>User</h1>
                    )}
                  </div>
                  <button
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-bold  hover:bg-gray-700 transition delay-75"
                    onClick={logoutNavbar}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-bold  hover:bg-gray-700 transition delay-75">
                    Login
                  </button>
                </Link>
              )}
            </div>
            {currentUser ? (
              <Link
                to="/write"
                className="ml-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-lg font-bold hover:bg-indigo-700 transition delay-75"
              >
                Write
              </Link>
            ) : (
              <Link to="/register">
                <button className="ml-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-lg font-bold hover:bg-indigo-700 transition delay-75">
                  {" "}
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
