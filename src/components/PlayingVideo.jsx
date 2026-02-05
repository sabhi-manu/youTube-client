import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ReactPlayer from "react-player";
import SuggestedVideo from "./SuggestedVideo";
import Comment from "./Comment";
import { getAllVideoApi, getVideoById } from "../api/videoApi/getVideosApi";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import {
  createCommentApi,
  getCommentApi,
} from "../api/commentApi/getCommentApi";

const PlayingVideo = () => {
  const { videoId } = useParams();
  const [showComment, setShowComment] = useState(false);
  const [video, setVideo] = useState();
  const [suggestedVideo, setSuggestedVideo] = useState([]);
  const [comment, setComment] = useState([]);

  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("this is video id in playing video component ==>", videoId);

  useEffect(() => {
    const fetchVideoId = async () => {
      const response = await getVideoById(videoId);
      console.log("response data video by id ==>", response);
      setVideo(response.data.data);
    };
    const fetchComment = async () => {
      const response = await getCommentApi(videoId);
      console.log("video comment ===>", response);
      setComment(response.data.data);
    };
    const fetchVideos = async () => {
      const response = await getAllVideoApi();
      setSuggestedVideo(response.data.data);
    };
    fetchVideoId();
    fetchComment();
    fetchVideos();
  }, [videoId]);

  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      setLoading(true);
      const response = await createCommentApi(videoId, commentText);
      setComment((prev) => [response.data.data, ...prev]);
      setCommentText("");
    } catch (error) {
      console.log("add comment error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-8 flex-col lg:flex-row">
      {/* LEFT */}
      <div className="w-full max-w-[1000px] px-4">
        <div className="h-[200px] md:h-[400px]">
          <ReactPlayer
            url={video?.videoFile}
            height="100%"
            width="100%"
            controls
            playing
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">{video?.views} views</p>

        <h1 className="text-lg font-semibold mt-2">{video?.title}</h1>

        <Link to={`/profile/${video?.user.userName}/${video?.user._id}`}>
          <div className="flex gap-4 items-center mt-4 rounded-2xl px-2 py-1 hover:bg-gray-300">
            <img
              src={video?.user?.avatar}
              alt="channel"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{video?.user.fullName}</p>
            </div>
          </div>
        </Link>

        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-700">
          <button className="flex items-center gap-1 px-3 py-1 rounded-full hover:bg-gray-200 transition">
            {video?.isLikedByCurrentUser ? (
              <AiFillLike className="text-blue-600 text-lg" />
            ) : (
              <AiOutlineLike className="text-lg" />
            )}
            <span>{video?.likesCount}</span>
          </button>
        </div>
        <div>
          <div
            className="mt-3 border  rounded-2xl bg-gray-300 py-3 px-5 "
            onClick={() => setShowComment(!showComment)}
          >
            comment {comment.length}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-[350px] xl:w-[400px] px-2 py-2 overflow-y-scroll relative">
        {showComment ? (
          <div className="relative h-[500px] overflow-y-scroll px-2">
            {/* COMMENTS LIST */}
            {comment.map((item) => (
              <Comment key={item._id} comment={item} />
            ))}

            {/* ADD COMMENT INPUT */}
            <div className="sticky bottom-0 bg-gray-100 border-t px-3 py-4 flex gap-2">
              <input
                className="w-full border rounded-2xl px-4 py-2 text-sm"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button
                onClick={handleAddComment}
                disabled={loading}
                className="px-4 py-2 rounded-2xl bg-gray-200 font-semibold disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add"}
              </button>
            </div>
          </div>
        ) : (
          suggestedVideo.map((item, index) => (
            <SuggestedVideo key={index} video={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default PlayingVideo;
