import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import StatCard from "./StatCard";

export const channelStatsMock = {
    channelId: "user_123",
    totalVideos: 128,
    totalViews: 221234,
    totalLikes: 63021,
    totalSubscribers: 4053,
    updatedAt: "2026-02-01T10:30:00Z",
};

export const channelVideosMock = [
    {
        _id: "video_01",
        title: "Card UI + VFX | Magic The Station",
        thumbnail: "https://picsum.photos/200/120?random=1",
        status: "Published", // Published | Draft
        visibility: "Public", // Public | Private | Unlisted
        views: 98765,
        likes: 3210,
        uploadedAt: "2025-12-10T09:30:00Z",
        duration: 215,
    },
    {
        _id: "video_02",
        title: "H.E.R – Damage (Official Video)",
        thumbnail: "https://picsum.photos/200/120?random=2",
        status: "Published",
        visibility: "Public",
        views: 120567,
        likes: 4578,
        uploadedAt: "2025-11-28T14:20:00Z",
        duration: 198,
    },
    {
        _id: "video_03",
        title: "Queen – Bohemian Rhapsody (Remastered)",
        thumbnail: "https://picsum.photos/200/120?random=3",
        status: "Draft",
        visibility: "Private",
        views: 0,
        likes: 0,
        uploadedAt: "2026-01-02T18:45:00Z",
        duration: 354,
    },
    {
        _id: "video_04",
        title: "BRBNS – Midsummer Madness",
        thumbnail: "https://picsum.photos/200/120?random=4",
        status: "Published",
        visibility: "Public",
        views: 45789,
        likes: 2104,
        uploadedAt: "2025-10-15T11:00:00Z",
        duration: 276,
    },
    {
        _id: "video_05",
        title: "Ariana Grande – positions",
        thumbnail: "https://picsum.photos/200/120?random=5",
        status: "Published",
        visibility: "Unlisted",
        views: 87543,
        likes: 3890,
        uploadedAt: "2025-09-05T08:10:00Z",
        duration: 202,
    },
];

const Dashboard = () => {
    return (
      <div className="p-6 text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-black">Welcome back, Manu 👋</h2>
          <p className="text-sm text-black">
            Track, manage and forecast your channel performance
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
          + Upload Video
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<FaRegEye />}
          label="Total Views"
          value={channelStatsMock.totalViews}
        />
        <StatCard
          icon={<IoPersonOutline />}
          label="Subscribers"
          value={channelStatsMock.totalSubscribers}
        />
        <StatCard
          icon={<FaRegHeart />}
          label="Total Likes"
          value={channelStatsMock.totalLikes}
        />
      </div>

      {/* VIDEOS TABLE */}
      <div className="bg-[#111] rounded-lg overflow-hidden">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[80px_2fr_1fr_1fr_2fr] px-4 py-3 text-sm text-gray-400 border-b border-gray-700">
          <div>Status</div>
          <div>Video</div>
          <div>Visibility</div>
          <div>Stats</div>
          <div>Uploaded</div>
        </div>

        {/* TABLE BODY */}
        <div className="max-h-[420px] overflow-y-auto">
          {channelVideosMock.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[80px_2fr_1fr_1fr_2fr] px-4 py-4 items-center border-b border-gray-800 hover:bg-[#1a1a1a]"
            >
              {/* TOGGLE */}
              <div>
                {item.visibility === "Public" ? (
                  <FaToggleOn className="text-purple-500 text-xl" />
                ) : (
                  <FaToggleOff className="text-gray-500 text-xl" />
                )}
              </div>

              {/* VIDEO */}
              <div className="flex gap-3 items-center">
                <img
                  src={item.thumbnail}
                  className="w-16 h-10 object-cover rounded"
                  alt=""
                />
                <p className="text-sm line-clamp-2">{item.title}</p>
              </div>

              {/* VISIBILITY */}
              <div className="text-sm">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    item.visibility === "Public"
                      ? "bg-green-600/20 text-green-400"
                      : "bg-gray-600/20 text-gray-300"
                  }`}
                >
                  {item.visibility}
                </span>
              </div>

              {/* STATS */}
              <div className="text-sm text-gray-300">
                <p>{item.views.toLocaleString()} views</p>
                <p>{item.likes.toLocaleString()} likes</p>
              </div>

              {/* DATE + ACTIONS */}
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>
                  {new Date(item.uploadedAt).toLocaleDateString()}
                </span>
                <div className="flex gap-3 text-lg">
                  <FiEdit2 className="hover:text-purple-400 cursor-pointer" />
                  <MdDeleteOutline className="hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Dashboard;
