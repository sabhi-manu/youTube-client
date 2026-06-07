import { useSelector } from "react-redux";
import Video from "./Video";
import { useEffect, useState } from "react";
import {
  getAllVideoApi,
  getVideoById,
} from "../api/videoApi/getVideosApi.js";
import VideoSkeleton from "../skeletons/HomeSkeleton.jsx";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingVideo, setProcessingVideo] = useState(null);

  const { user } = useSelector((state) => state.auth);

  // ✅ Load videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getAllVideoApi();
        setVideos(response?.data.data);
      } catch (error) {
        console.log("error fetching videos ===>", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // ✅ Load processing video from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("processingVideo");
    if (stored) {
      setProcessingVideo(JSON.parse(stored));
    }
  }, []);

  // ✅ Polling for processing video
  useEffect(() => {
    if (!processingVideo) return;

    const interval = setInterval(async () => {
      try {
        const res = await getVideoById(processingVideo._id);
        const updated = res.data.data;

        if (updated?.status !== "processing") {
          // remove processing video
          setProcessingVideo(null);
          localStorage.removeItem("processingVideo");

          // refresh all videos
          const response = await getAllVideoApi();
          setVideos(response.data.data);
        } else {
          // keep updating status
          setProcessingVideo(updated);
        }
      } catch (err) {
        console.log("polling error", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [processingVideo]);

  // ✅ Merge processing video on top
  const allVideos = processingVideo
    ? [processingVideo, ...videos]
    : videos;

  return (
    <div className="flex mt-1">
      <div className="h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden w-full">
        
        {loading ? (
          <div className="p-5 text-center text-gray-500 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <VideoSkeleton key={index} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5">
            
            {allVideos?.map((item) => {
              // 🟡 Processing state
              if (item.status === "processing") {
                return (
                  <div key={item._id} className="relative">
                    <VideoSkeleton />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="bg-black/70 text-white text-xs px-3 py-1 rounded">
                        Processing...
                      </p>
                    </div>
                  </div>
                );
              }

              // 🔴 Failed state
              if (item.status === "failed") {
                return (
                  <div
                    key={item._id}
                    className="p-4 border rounded-lg text-red-500"
                  >
                    ❌ Upload failed
                  </div>
                );
              }

              // 🟢 Published state
              return <Video key={item._id} video={item} />;
            })}

          </div>
        )}
      </div>
    </div>
  );
};

export default Home;