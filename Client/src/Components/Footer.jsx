// src/Footer.jsx
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Blog Application</h3>
            <p className="text-gray-400 mt-3">Made by Riya Ranjan Jha</p>
          </div>
          <div className="flex mb-4 md:mb-0">
            <a href="https://facebook.com" className="mx-2 text-gray-400 hover:text-blue-500 transition delay-75">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com" className="mx-2 text-gray-400 hover:text-blue-800 transition delay-75">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" className="mx-2 text-gray-400 hover:text-pink-400 transition delay-75">
              <FaInstagram size={30} />
            </a>
          </div>
          <div>
            <a href="/about" className="text-gray-400 hover:text-white mx-2 cursor-default">ReactJS</a>
            <a href="/contact" className="text-gray-400 hover:text-white mx-2 cursor-default">MongoDB</a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2 cursor-default">NodeJS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
