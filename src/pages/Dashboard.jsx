import React, { useEffect, useState } from "react";
import { FaRegEye, FaToggleOn, FaToggleOff } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import StatCard from "./StatCard";
import { userAccountDetailsApi, userAccountVideosApi } from "../api/dashboardApi/dashboardApi";
import { Link } from "react-router";
import { deleteVideoApi, getUserVideo, toggleVideoPublishApi } from "../api/videoApi/getVideosApi";
import { toast } from "react-toastify";
import DashboardSkeleton from "../skeletons/DashboardSkeleton";
import ErrorState from "../skeletons/ErrorState";


const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  const [stats, setStats] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userVideo,setUserVideo] = useState([])
  const [error,setError] = useState(null)

  useEffect(() => {
    if (!user?._id) return;
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
      setError(null);
        const [statsRes, videosRes, userVideoRes] = await Promise.all([
          userAccountDetailsApi(user?._id),
          userAccountVideosApi(user?._id),
          getUserVideo(user?._id)
        ]);

        setStats(statsRes.data.data);
        setVideos(videosRes.data.data);
        setUserVideo(userVideoRes.data.data)
      } catch (error) {
        console.error("Dashboard fetch failed", error);
         setError("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  const handleTogglePublish = async (videoId) => {
    try {
      await toggleVideoPublishApi(videoId);
      toast.success("status change.")
      // update UI instantly (no refetch needed)
      setVideos((prev) =>
        prev.map((video) =>
          video._id === videoId
            ? { ...video, isPublished: !video.isPublished }
            : video
        )
      );
    } catch (error) {
      console.error("Toggle publish failed", error);
      toast.error("server error.")
    }
  };

  const handleDeleteVideo = async (videoId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteVideoApi(videoId);
      console.log("delete video response ==>", response)
      toast.success("video delete successfully.")
      setVideos((prev) => prev.filter((v) => v._id !== videoId));
    } catch (error) {
      console.error("Delete failed", error);
      toast.error("internal server error.")
    }
  };

console.log("videos ==>", videos)
console.log("stats ==>", stats)
console.log("user video ==>", userVideo)

 if (loading && !stats) {
  return <DashboardSkeleton />;
}

if (error) {
  return (
    <ErrorState
      message={error}
      onRetry={() => window.location.reload()}
    />
  );
}

  return (
    <div className="p-6 text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-black">
            Welcome back, {user?.fullName || "Creator"} 👋
          </h2>
          <p className="text-sm text-black">
            Track, manage and forecast your channel performance
          </p>
        </div>
       <div className="flex gap-5">
         <Link to={"/"}>
          <button className="bg-red-400 hover:bg-red-700 px-4 py-2 rounded-md">
            Home
          </button>
        </Link>
         <Link to={"/video/upload"}>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
            + Upload Video
          </button>
        </Link>
       </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<FaRegEye />}
          label="Total Views"
          value={stats?.totalViews}
        />
        <StatCard
          icon={<IoPersonOutline />}
          label="Subscribers"
          value={stats?.totalSubscribers}
        />
        <StatCard
          icon={<FaRegHeart />}
          label="Total Likes"
          value={stats?.totalLikes}
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
          {userVideo.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[80px_2fr_1fr_1fr_2fr] px-4 py-4 items-center border-b border-gray-800 hover:bg-[#1a1a1a]"
            >
              {/* STATUS */}
              <div
                className="cursor-pointer"
                onClick={() => handleTogglePublish(item._id)}
              >
                {item.isPublished ? (
                  <FaToggleOn className="text-purple-500 text-xl" />
                ) : (
                  <FaToggleOff className="text-gray-500 text-xl" />
                )}
              </div>

              {/* VIDEO */}
              <div className="flex gap-3 items-center">
                <img
                  src={item?.thumbnail}
                  className="w-16 h-10 object-cover rounded"
                  alt={item?.title}
                />
                <p className="text-sm line-clamp-2">{item.title}</p>
              </div>

              {/* VISIBILITY */}
              <div className="text-sm">
                <span
                  className={`px-2 py-1 rounded text-xs ${item.isPublished
                    ? "bg-green-600/20 text-green-400"
                    : "bg-gray-600/20 text-gray-300"
                    }`}
                >
                  {item?.isPublished ? "Published" : "Unpublished"}
                </span>
              </div>

              {/* STATS */}
              <div className="text-sm text-gray-300">
                <p>{item?.views?.toLocaleString()} views</p>
                <p>{item?.likes?.toLocaleString()} likes</p>
              </div>

              {/* DATE + ACTIONS */}
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
                <div className="flex gap-3 text-lg">
                  {/* <FiEdit2 className="hover:text-purple-400 cursor-pointer" /> */}
                  <MdDeleteOutline className="hover:text-red-500 cursor-pointer" onClick={() => handleDeleteVideo(item._id)} />
                </div>
              </div>
            </div>
          ))}

          {userVideo.length === 0 && (
            <p className="p-6 text-center text-gray-500">
              No videos uploaded yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
