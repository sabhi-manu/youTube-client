import { useSelector } from "react-redux";
import Video from "./Video";
import youtubeDummyData from "./dummyData.js";
import { useEffect, useState } from "react";
import { getAllVideoApi } from "../api/videoApi/getVideosApi.js";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  console.log("user data ==>", user);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getAllVideoApi();
        setVideos(response.data.data);
      } catch (error) {
        console.log("error fetching videos ===>", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);
  return (
    <div className=" flex mt-1 ">
      <div className="h-[calc(100vh-6rem)] overflow-y-scroll overflow-x-hidden">
        {loading ? (
          <div className="p-5 text-center text-gray-500">Loading videos...</div>
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-5  p-5 ">
           {videos?.map((item) => (
              <Video key={item._id} video={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
