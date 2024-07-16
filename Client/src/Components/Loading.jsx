import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div class="flex flex-col items-center justify-center">
          <div class="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin"></div>
          <p class="mt-4 text-lg text-gray-200">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
