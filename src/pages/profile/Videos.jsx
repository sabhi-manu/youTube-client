import { useParams } from "react-router";
import SuggestedVideo from "../../components/SuggestedVideo";
import { useEffect, useState } from "react";
import { getUserVideo } from "../../api/videoApi/getVideosApi";

const Videos = () => {
  const { userId } = useParams();

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUserVideo = async () => {
      try {
        setIsLoading(true);
        const response = await getUserVideo(userId);
        setVideos(response.data.data);
      } catch (error) {
        console.log("error to get the response", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserVideo();
  }, [userId]);

  if (isLoading) return <div className="p-4">Loading videos...</div>;
  if (isError) return <div className="p-4">Failed to load videos</div>;

  if (!videos.length) {
    return <div className="p-4">No videos yet</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {videos.map(video => (
        <SuggestedVideo key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Videos;
