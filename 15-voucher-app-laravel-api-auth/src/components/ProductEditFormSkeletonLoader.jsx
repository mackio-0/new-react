import React from "react";

const ProductEditFormSkeletonLoader = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <div className="animate-pulse h-4 bg-gray-300 rounded-full w-1/4"></div>
        </div>
        <div className="animate-pulse h-8 bg-gray-300 rounded-lg w-full"></div>
      </div>

      <div className="mb-8">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <div className="animate-pulse h-4 bg-gray-300 rounded-full w-1/4"></div>
        </div>
        <div className="animate-pulse h-8 bg-gray-300 rounded-lg w-full"></div>
      </div>

      <div className="mb-3">
        <div className="flex items-center w-1/2">
          <div className="animate-pulse h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="animate-pulse h-4 bg-gray-300 rounded-lg w-full ml-2"></div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center w-1/2">
          <div className="animate-pulse h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="animate-pulse h-4 bg-gray-300 rounded-lg w-full ml-2"></div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="animate-pulse h-8 bg-gray-300 rounded-lg w-full"></div>
        <div className="animate-pulse h-8 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default ProductEditFormSkeletonLoader;
