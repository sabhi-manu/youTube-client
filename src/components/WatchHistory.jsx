import { useEffect, useState } from "react";
import { watchHistoryApi } from "../api/user.api";

export default function WatchHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await watchHistoryApi()
        setHistory(res.data.data);
      } catch (error) {
        console.error("Failed to fetch watch history", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading watch history...</p>;
  }

  if (!history.length) {
    return <p className="text-center mt-10 text-gray-500">No watch history found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {history.map((video) => (
        <div
          key={video._id}
          className="flex gap-4 border-b pb-4"
        >
          {/* Left: Thumbnail */}
          <div className="w-64 flex-shrink-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-36 object-cover rounded"
            />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold line-clamp-2">
                {video.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {video.description}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={video.owner.avatar}
                  alt={video.owner.fullName}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-700">
                  {video.owner.fullName}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 mt-2">
              {video.views} views • {Math.floor(video.duration)} sec
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
