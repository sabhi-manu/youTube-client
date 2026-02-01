import React from "react";
import { Link } from "react-router";

export const videosMock = [
  {
    _id: "video_1",
    title: "React Roadmap 2025 – Beginner to Advanced",
    description: "Complete React learning roadmap with projects.",
    videoFile: "https://example.com/videos/react-roadmap.mp4",
    thumbnail: "https://picsum.photos/400/225?random=1",
    duration: 1820, // seconds
    views: 845000,
    isPublished: true,
    createdAt: "2025-01-10T10:00:00Z",
    owner: {
      _id: "user_101",
      userName: "yashmittal",
      fullName: "Yash Mittal",
      avatar: "https://i.pravatar.cc/150?img=12",
      isVerified: true,
    },
  },
  {
    _id: "video_2",
    title: "Redux Toolkit Crash Course",
    description: "Learn Redux Toolkit with real-world examples.",
    videoFile: "https://example.com/videos/redux-toolkit.mp4",
    thumbnail: "https://picsum.photos/400/225?random=2",
    duration: 1540,
    views: 720000,
    isPublished: true,
    createdAt: "2025-01-12T14:30:00Z",
    owner: {
      _id: "user_102",
      userName: "js_mastery",
      fullName: "JS Mastery",
      avatar: "https://i.pravatar.cc/150?img=32",
      isVerified: true,
    },
  },
  {
    _id: "video_3",
    title: "Build YouTube Clone with MERN Stack",
    description: "Step-by-step YouTube clone using React & Node.",
    videoFile: "https://example.com/videos/youtube-clone.mp4",
    thumbnail: "https://picsum.photos/400/225?random=3",
    duration: 2480,
    views: 1200000,
    isPublished: true,
    createdAt: "2025-01-15T09:15:00Z",
    owner: {
      _id: "user_103",
      userName: "frontend_freak",
      fullName: "Frontend Freak",
      avatar: "https://i.pravatar.cc/150?img=45",
      isVerified: false,
    },
  },
  {
    _id: "video_4",
    title: "Tailwind CSS Tips & Tricks",
    description: "Write cleaner UI with Tailwind CSS.",
    videoFile: "https://example.com/videos/tailwind-tips.mp4",
    thumbnail: "https://picsum.photos/400/225?random=4",
    duration: 980,
    views: 315000,
    isPublished: true,
    createdAt: "2025-01-18T18:45:00Z",
    owner: {
      _id: "user_104",
      userName: "css_ninja",
      fullName: "CSS Ninja",
      avatar: "https://i.pravatar.cc/150?img=56",
      isVerified: false,
    },
  },
  {
    _id: "video_5",
    title: "React Router Layouts Explained",
    description: "Master nested routes and layouts in React Router.",
    videoFile: "https://example.com/videos/react-router-layouts.mp4",
    thumbnail: "https://picsum.photos/400/225?random=5",
    duration: 1320,
    views: 489000,
    isPublished: true,
    createdAt: "2025-01-20T11:00:00Z",
    owner: {
      _id: "user_105",
      userName: "react_daily",
      fullName: "React Daily",
      avatar: "https://i.pravatar.cc/150?img=64",
      isVerified: true,
    },
  },
];

const Search = () => {
  const searchQuery = ''

  const filteredVideos = videosMock.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto px-6 py-4 ">
      {filteredVideos.length === 0 && (
        <p className="text-gray-400">No results found</p>
      )}

      <div className="flex flex-col gap-6 h-[calc(100vh-7rem)] overflow-y-scroll overflow-x-hidden">
        {filteredVideos.map(video => (
          <Link to={`/video/${video._id}`}>
            <div
            key={video._id}
            className="flex flex-wrap gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
          >
            {/* Thumbnail */}
            <div className="relative w-[320px] flex-shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[180px] object-cover rounded-lg"
              />
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {(video.duration)}
              </span>
            </div>

            {/* Video Info */}
            <div className="flex gap-3 flex-1">
              {/* Avatar */}
              <img
                src={video.owner.avatar}
                alt={video.owner.userName}
                className="w-10 h-10 rounded-full mt-1"
              />

              {/* Text */}
              <div>
                <h2 className="font-medium text-lg line-clamp-2">
                  {video.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {video.owner.fullName} •{" "}
                  {video.views.toLocaleString()} views
                </p>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
