import React from "react";

const SearchVideoSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 animate-pulse">
      
      {/* Thumbnail */}
      <div className="w-full md:w-[320px] flex-shrink-0">
        <div className="w-full h-[200px] md:h-[180px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* Video Info */}
      <div className="flex gap-3 flex-1">
        
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 mt-1"></div>

        {/* Text */}
        <div className="flex-1 space-y-2">
          {/* Title */}
          <div className="h-4 bg-gray-300 rounded w-10/12"></div>
          <div className="h-4 bg-gray-300 rounded w-8/12"></div>

          {/* Channel + views */}
          <div className="h-3 bg-gray-300 rounded w-6/12 mt-2"></div>

          {/* Description */}
          <div className="hidden md:block">
            <div className="h-3 bg-gray-300 rounded w-11/12 mt-3"></div>
            <div className="h-3 bg-gray-300 rounded w-9/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoSkeleton;