import React from "react";
import { Link } from "react-router";

export const playlistsMock = [
  {
    _id: "playlist_1",
    name: "React Roadmap 2025",
    description: "Complete React roadmap from basics to advanced concepts.",
    createdAt: "2025-01-10T10:00:00Z",
    updatedAt: "2025-01-15T12:30:00Z",
    owner: "user_123",
    videos: [
      {
        _id: "video_1",
        title: "How to learn React | A React Roadmap",
        thumbnail:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        duration: "12:45",
      },
      {
        _id: "video_2",
        title: "React Folder Structure Best Practices",
        thumbnail:
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
        duration: "09:30",
      },
    ],
  },

  {
    _id: "playlist_2",
    name: "Backend with Node.js",
    description: "Node.js, Express, MongoDB & real-world backend concepts.",
    createdAt: "2024-12-20T08:00:00Z",
    updatedAt: "2025-01-05T09:15:00Z",
    owner: "user_123",
    videos: [
      {
        _id: "video_3",
        title: "Node.js Crash Course",
        thumbnail:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        duration: "15:10",
      },
      {
        _id: "video_4",
        title: "MongoDB Aggregation Explained",
        thumbnail:
          "https://images.unsplash.com/photo-1526378722484-cc5c5103b9b0",
        duration: "18:42",
      },
      {
        _id: "video_5",
        title: "JWT Authentication in Node.js",
        thumbnail:
          "https://images.unsplash.com/photo-1537432376769-00aabc46a9c8",
        duration: "11:20",
      },
    ],
  },

  {
    _id: "playlist_3",
    name: "Frontend System Design",
    description: "Design scalable frontend applications.",
    createdAt: "2025-01-01T11:45:00Z",
    updatedAt: "2025-01-18T14:00:00Z",
    owner: "user_123",
    videos: [
      {
        _id: "video_6",
        title: "Frontend System Design Intro",
        thumbnail:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        duration: "14:05",
      },
    ],
  },

  {
    _id: "playlist_4",
    name: "JavaScript Deep Dive",
    description: "Closures, Hoisting, Event Loop, and more.",
    createdAt: "2024-11-15T09:30:00Z",
    updatedAt: "2024-12-01T10:20:00Z",
    owner: "user_123",
    videos: [
      {
        _id: "video_7",
        title: "JavaScript Event Loop Explained",
        thumbnail:
          "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
        duration: "10:55",
      },
      {
        _id: "video_8",
        title: "Closures in JavaScript",
        thumbnail:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        duration: "08:40",
      },
    ],
  },

  {
    _id: "playlist_5",
    name: "Career & Interview Prep",
    description: "DSA, interviews, resume & career guidance.",
    createdAt: "2025-01-20T07:00:00Z",
    updatedAt: "2025-01-21T09:10:00Z",
    owner: "user_123",
    videos: [
      {
        _id: "video_9",
        title: "How to crack frontend interviews",
        thumbnail:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        duration: "13:25",
      },
    ],
  },
];


const Playlist = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlistsMock.map((playlist) => {
          const cover = playlist.videos[0]?.thumbnail;

          return (
          <Link to={`/playlist/${playlist._id}`}>
              <div
              key={playlist._id}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
                {cover ? (
                  <img
                    src={cover}
                    alt={playlist.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    No videos
                  </div>
                )}

                {/* Video count */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
                  <span className="uppercase tracking-wide">Playlist</span>
                  <span>{playlist.videos.length} videos</span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="font-semibold line-clamp-2">
                  {playlist.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {playlist.description}
                </p>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
