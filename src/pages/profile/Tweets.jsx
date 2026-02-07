import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { getUserTweetsApi, createTweetApi, tweetToggleApi } from "../../api/tweetsApi/tweetsApi";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Tweets = () => {
  const { userId } = useParams();
const loggedInUserId = useSelector(
  (state) => state.auth.user?._id
);

const isOwnProfile = loggedInUserId === userId;
console.log('check the owner profile==>',isOwnProfile)
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [isError, setIsError] = useState(false);

 
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getUserTweetsApi(userId);
        setTweets(response.data.data || []);
      } catch (error) {
        console.error("Error fetching tweets:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) fetchTweets();
  }, [userId]);

  // 🔹 Create tweet
  const handleAddTweet = async () => {
    if (!content.trim()) return;

    try {
      setIsPosting(true);

      const response = await createTweetApi({ content });

      // Optimistic UI update
      setTweets((prev) => [response.data.data, ...prev]);
      setContent("");

      toast.success("Tweet posted");
    } catch (error) {
      console.error("Error creating tweet:", error);
      toast.error("Failed to post tweet");
    } finally {
      setIsPosting(false);
    }
  };

  const tweetToggleHandler = async (tweetId)=>{
    try {
      const response = await tweetToggleApi(tweetId);

    const isLiked = response.data.liked;

    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet._id === tweetId
          ? {
              ...tweet,
              isLiked,
              likeCount: isLiked
                ? tweet.likeCount + 1
                : tweet.likeCount - 1,
            }
          : tweet
      )
    );
    } catch (error) {
      console.log("server error.")
    }
  }
console.log("tweet array ==>",tweets)
  // 🔹 States
  if (isLoading) {
    return <div className="p-4 text-center">Loading tweets...</div>;
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load tweets
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Add Tweet */}
      {
        isOwnProfile &&
        <div className="border rounded-lg p-4 mb-6">
        <textarea
          className="w-full border rounded px-3 py-2 mb-2 resize-none"
          placeholder="What’s happening?"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleAddTweet}
          disabled={isPosting || !content.trim()}
          className="px-4 py-1 bg-black text-white rounded disabled:opacity-50"
        >
          {isPosting ? "Posting..." : "Add"}
        </button>
      </div>
      }

      {/* Tweets List */}
      {!tweets.length ? (
        <div className="p-4 text-center text-gray-400">
          No tweets yet
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {tweets.map((tweet) => (
            <div key={tweet._id} className="flex gap-4 border-b pb-4">
              {/* Avatar */}
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={tweet.owner?.avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">
                    {tweet.owner?.userName}
                  </span>
                  <span className="text-gray-500">
                    {new Date(tweet.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="mt-1 text-gray-800">{tweet.content}</p>

                {/* Likes (UI only for now) */}
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600"
                onClick={()=>tweetToggleHandler(tweet._id)}
                >
                  {tweet.isLiked ? (
                    <AiFillLike />
                  ) : (
                    <AiOutlineLike />
                  )}
                  <span>{tweet.likeCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tweets;
