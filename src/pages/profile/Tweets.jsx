import React from 'react'


export const tweetsMock = [
  {
    id: "tweet_1",
    owner: {
      userName: "manu_dev",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    content: "Just finished building Profile Tabs with React Router. Layouts are 🔥",
    likes: 128,
    createdAt: "2025-01-20T10:15:00Z",
  },
  {
    id: "tweet_2",
    owner: {
      userName: "js_mastery",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    content: "Redux Toolkit > plain Redux. Cleaner code, less pain.",
    likes: 542,
    createdAt: "2025-01-18T14:40:00Z",
  },
  {
    id: "tweet_3",
    owner: {
      userName: "react_daily",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    content: "If you’re not using layouts in React Router, you’re missing out.",
    likes: 311,
    createdAt: "2025-01-16T09:05:00Z",
  },
  {
    id: "tweet_4",
    owner: {
      userName: "frontend_freak",
      avatar: "https://i.pravatar.cc/150?img=56",
    },
    content: "Tailwind + React = productivity on steroids 🚀",
    likes: 879,
    createdAt: "2025-01-14T18:22:00Z",
  },
  {
    id: "tweet_5",
    owner: {
      userName: "code_with_fun",
      avatar: "https://i.pravatar.cc/150?img=64",
    },
    content: "Debugging UI issues at 2 AM hits different 😵‍💫",
    likes: 96,
    createdAt: "2025-01-12T23:10:00Z",
  },
];



const Tweets = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Add Tweet Box */}
      <div className="border rounded-lg p-4 mb-6">
        <input
          className="w-full border rounded px-3 py-2 mb-2"
          type="text"
          placeholder="Add tweet..."
        />
        <button className="px-4 py-1 bg-black text-white rounded">
          Add
        </button>
      </div>

      {/* Tweets List */}
      <div className="flex flex-col gap-5">
        {tweetsMock.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b pb-4"
          >
            {/* Avatar */}
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.owner.avatar}
                alt="avatar"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">
                  {item.owner.userName}
                </span>
                <span className="text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="mt-1 text-gray-800">
                {item.content}
              </p>

              <div className="mt-2 text-sm text-gray-500">
                 {item.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Tweets