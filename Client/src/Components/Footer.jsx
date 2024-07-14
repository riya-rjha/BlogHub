import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container p-4  mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold">Blog Application</h3>
            <p className="mt-2">
              Made by <span className="text-white font-semibold"> Riya Ranjan Jha</span>
            </p>
          </div>
          <div className="flex items-center mb-4 lg:mb-0">
            <a
              href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://x.com/RiyaJha25892"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://riyarjha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-400 hover:text-pink-400 transition duration-300 ease-in-out"
            >
              <SiHashnode size={30} />
            </a>
          </div>
          <div className="mt-8 lg:mt-0">
            <nav className="flex flex-wrap justify-center lg:justify-end -mx-2">
              <a
                href="/about"
                className="mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-default"
              >
                ReactJS
              </a>
              <a
                href="/contact"
                className="mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-default"
              >
                MongoDB
              </a>
              <a
                href="/privacy"
                className="mx-2 text-gray-400 hover:text-white transition duration-300 ease-in-out cursor-default"
              >
                NodeJS
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
