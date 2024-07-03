import React from "react";
import { FaLock } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex text-black flex-col items-center justify-center h-screen  text-center bg-[whitesmoke]">
        <FaLock className="text-9xl mb-6" />
        <h1 className="text-6xl font-bold mb-4">403</h1>
        <p className="text-2xl mb-8">
          <span className="font-bold">Forbidden:</span> This page does not exist! Click on the button below to go back to the Home page. 
        </p>
        <a
          href="/"
          className="text-lg font-semibold bg-gray-200 text-red-500 px-6 py-3 rounded-full hover:bg-gray-300 transition delay-75"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
