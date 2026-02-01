import { useParams } from "react-router";
import SuggestedVideo from "../../components/SuggestedVideo";


const dummySuggestedVideos = [
  {
    videoId: "a1b2c3",
    title: "React Full Course in Hindi 🔥",
    thumbnails: [{ url: "https://picsum.photos/300/200?random=2" }],
    lengthSeconds: 3600,
    author: {
      title: "Frontend Factory",
      badges: [{ type: "VERIFIED_CHANNEL" }],
    },
    stats: { views: 950000 },
    publishedTimeText: "1 month ago",
  },
  {
    videoId: "d4e5f6",
    title: "Redux Toolkit Crash Course",
    thumbnails: [{ url: "https://picsum.photos/300/200?random=3" }],
    lengthSeconds: 1800,
    author: {
      title: "JS Mastery",
      badges: [{ type: "VERIFIED_CHANNEL" }],
    },
    stats: { views: 720000 },
    publishedTimeText: "3 weeks ago",
  },
  {
    videoId: "d4e5f6",
    title: "Redux Toolkit Crash Course",
    thumbnails: [{ url: "https://picsum.photos/300/200?random=3" }],
    lengthSeconds: 1800,
    author: {
      title: "JS Mastery",
      badges: [{ type: "VERIFIED_CHANNEL" }],
    },
    stats: { views: 720000 },
    publishedTimeText: "3 weeks ago",
  },
];


const Videos = () => {
  const { userId } = useParams();
 let isLoading = false
 let isError = false



  if (isLoading) return <div className="p-4">Loading videos...</div>;
  if (isError) return <div className="p-4">Failed to load videos</div>;

  if (!dummySuggestedVideos.length ) {
    return <div className="p-4">No videos yet</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {dummySuggestedVideos.map(video => (
        <SuggestedVideo key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Videos;
