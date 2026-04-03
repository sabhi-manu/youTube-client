

const VideoSkeleton = () => {
    
  return (
    <div className="animate-pulse">
      {/* Thumbnail */}
      <div className="h-48 md:h-56 w-full rounded-xl bg-gray-300"></div>

      {/* Title */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-11/12"></div>
        <div className="h-4 bg-gray-300 rounded w-8/12"></div>
      </div>

      {/* Channel row */}
      <div className="flex mt-3 space-x-2">
        {/* Avatar */}
        <div className="h-9 w-9 rounded-full bg-gray-300"></div>

        {/* Meta */}
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-6/12"></div>
          <div className="h-3 bg-gray-300 rounded w-4/12"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;