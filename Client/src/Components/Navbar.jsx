// src/Navbar.js
import React from "react";
import logo from "../Images/RRJ-logo.png";

const Navbar = () => {
  return (
    <nav className=" shadow-lg sticky bg-white z-10 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative  flex items-center justify-between h-24">
          {/* Left side logo */}
          <div className="flex items-center">
            <img className="h-16 rounded-full logo" src={logo} alt="Logo" />
          </div>

          {/* Center links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                <a
                  href="#"
                  className="bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-bold hover:underline"
                >
                  Art
                </a>
                <a
                  href="#"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline text-[#17002A]"
                >
                  Science
                </a>
                <a
                  href="#"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline text-[#17002A]"
                >
                  Technology
                </a>
                <a
                  href="#"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hide-links"
                >
                  Cinema
                </a>
                <a
                  href="#"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline   hide-links    "
                >
                  Design
                </a>
                <a
                  href="#"
                  className="text-[#17002A] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hide-links"
                >
                  Food
                </a>
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hover:bg-gray-700">
              Logout
            </button>
            <a
              href="#"
              className="ml-4 bg-indigo-600 text-white px-3 py-2 rounded-md text-lg font-bold hover:underline hover:bg-indigo-700"
            >
              Write
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
