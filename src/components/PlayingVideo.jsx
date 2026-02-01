import React, { useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import SuggestedVideo from "./SuggestedVideo";
import Comment from "./Comment";

const dummyVideo = {
  title: "React Full Course Tutorial 🔥 | Build YouTube Clone",
  description:
    "In this video, we build a complete YouTube clone using React, Tailwind CSS, and RapidAPI.",
  author: {
    title: "Code With Manu",
    avatar: [
      {
        url: "https://i.pravatar.cc/150?img=12",
      },
    ],
    stats: {
      subscribersText: "120K subscribers",
    },
  },
  stats: {
    likes: 24500,
    views: 980000,
    comments: 1320,
  },
};

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

const PlayingVideo = () => {
  const { videoId } = useParams();
  const [showComment, setShowComment] = useState(false);
  return (
    <div className="flex justify-center mt-8 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full max-w-[1000px] px-4">
        <div className="h-[200px] md:h-[400px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            height="100%"
            width="100%"
            controls
            playing
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          {dummyVideo.stats.views} views
        </p>

        <h1 className="text-lg font-semibold mt-2">{dummyVideo.title}</h1>

        <div className="flex gap-4 items-center mt-4">
          <img
            src={dummyVideo.author.avatar[0].url}
            alt="channel"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{dummyVideo.author.title}</p>
            <p className="text-sm text-gray-500">
              {dummyVideo.author.stats.subscribersText}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p>👍 {dummyVideo.stats.likes} Likes</p>
        </div>
        <div>
          <div
            className="mt-3 border  rounded-2xl bg-gray-300 py-3 px-5 "
            onClick={() => setShowComment(!showComment)}
          >
            comment {dummyVideo.stats.comments}K
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-[350px] xl:w-[400px] px-2 py-2 overflow-y-scroll relative">
        {showComment ? (
          <Comment />
        ) : (
          dummySuggestedVideos.map((item, index) => (
            <SuggestedVideo key={index} video={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default PlayingVideo;
