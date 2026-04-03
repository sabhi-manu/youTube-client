import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllVideoApi } from "../api/videoApi/getVideosApi";
import { SearchContext } from "../context/SearchContext";
import SearchVideoSkeleton from "../skeletons/SearchVideoSkeleton";


const Search = () => {
  // const searchQuery = ''
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchText, setSearchText } = useContext(SearchContext)
  console.log("search text in search file ==>", searchText)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getAllVideoApi();
        console.log("video response ==>", response)
        setVideos(response.data.data);
      } catch (error) {
        console.log("error fetching videos ===>", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, [])

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchText?.toLowerCase())
  );


  return (
    <div className="h-full overflow-y-auto px-6 py-4 ">
      {filteredVideos.length === 0 && (
        <p className="text-gray-400">
          {
            Array(10).fill(0).map((_,index) => <SearchVideoSkeleton key={index}/>)
          }
        </p>
      )}

      <div className="flex flex-col gap-6 h-[calc(100vh-7rem)] overflow-y-scroll overflow-x-hidden">
        {filteredVideos.map(video => (
          <Link to={`/video/${video._id}`} key={video._id} >
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
