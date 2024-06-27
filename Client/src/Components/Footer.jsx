// src/Footer.jsx
import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8 w-full">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0 w-full md:w-auto">
            <h3 className="text-2xl font-bold">Blog Application</h3>
            <p className="text-gray-400 mt-3">Made by Riya Ranjan Jha</p>
          </div>
          <div className="flex-1 flex justify-center md:justify-center mb-4 md:mb-0 w-full md:w-auto">
            <a target="_blank"
              href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
              className="mx-2 text-gray-400 hover:text-blue-500 transition delay-75"
            >
              <FaLinkedin size={30} />
            </a>
            <a target="_blank"
              href="https://x.com/RiyaJha25892"
              className="mx-2 text-gray-400 hover:text-blue-800 transition delay-75"
            >
              <FaTwitter size={30} />
            </a>
            <a target="_blank"
              href="https://riyarjha.vercel.app/"
              className="mx-2 text-gray-400 hover:text-pink-400 transition delay-75"
            >
              <SiHashnode size={30} />
            </a>
          </div>
          <div className="flex-1 text-center md:text-right w-full md:w-auto">
            <a
              href="/about"
              className="text-gray-400 hover:text-white mx-2 cursor-default"
            >
              ReactJS
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white mx-2 cursor-default"
            >
              MongoDB
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white mx-2 cursor-default"
            >
              NodeJS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
