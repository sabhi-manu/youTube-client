import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const dummyComments = [
  {
    id: "cmt_001",
    author: {
      channelId: "UC111",
      name: "Rahul Sharma",
      avatar: "https://i.pravatar.cc/150?img=32",
      badges: [{ type: "VERIFIED_CHANNEL" }],
    },
    text: "Amazing tutorial! Everything is explained very clearly. Helped me a lot 👍",
    publishedTimeText: "2 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
  {
    id: "cmt_002",
    author: {
      channelId: "UC222",
      name: "Anjali Verma",
      avatar: "https://i.pravatar.cc/150?img=45",
      badges: [],
    },
    text: "Finally understood how a YouTube clone works. Waiting for the backend part 🔥",
    publishedTimeText: "5 days ago",
  },
];

const Comment = () => {
  return (
    <div className="relative w-full  h-[500px]  overflow-y-scroll rounded-lg  ">
      {/* COMMENTS LIST */}
      {dummyComments.map((comment) => (
        <div key={comment.id} className="flex gap-3 mt-4">
          <img
            src={comment.author.avatar}
            className="w-9 h-9 rounded-full"
            alt="user"
          />

          <div>
            <div className="flex items-center gap-1 text-sm font-semibold">
              {comment.author.name}
              {comment.author.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-xs text-gray-500" />
              )}
              <span className="text-xs text-gray-400 ml-2">
                {comment.publishedTimeText}
              </span>
            </div>

            <p className="text-sm mt-1">{comment.text}</p>
          </div>
        </div>
      ))}

      {/* ADD COMMENT (DUMMY) */}
      <div className="sticky bottom-0 left-0 w-full bg-gray-100 border-t px-3 py-2 flex gap-2 z-10">
        <input
          className="w-full border rounded-2xl px-4 py-2 text-sm focus:outline-none"
          type="text"
          placeholder="Add a comment..."
        />
        <button className="px-4 py-2 rounded-2xl bg-gray-200 text-sm font-semibold">
          Add
        </button>
      </div>
    </div>
  );
};

export default Comment;
