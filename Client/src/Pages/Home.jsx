// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center my-8">
        <div className="text-section md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquam
            quibusdam ipsam facere aperiam at. Ea dolorem ratione sit debitis deserunt repellendus numquam ab
            vel perspiciatis corporis!
          </p>
          <button className="px-6 py-2 bg-orange-500 text-white rounded">Read More</button>
        </div>
        <div className="image-section md:w-1/2 p-4">
          <img src="https://via.placeholder.com/400" alt="placeholder" className="w-full rounded shadow-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center my-8">
        <div className="text-section md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquam
            quibusdam ipsam facere aperiam at. Ea dolorem ratione sit debitis deserunt repellendus numquam ab
            vel perspiciatis corporis!
          </p>
          <button className="px-6 py-2 bg-orange-500 text-white rounded">Read More</button>
        </div>
        <div className="image-section md:w-1/2 p-4">
          <img src="https://via.placeholder.com/400" alt="placeholder" className="w-full rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
