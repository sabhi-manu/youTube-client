import React from 'react'


export const followingMock = [
  {
    id: "sub_1",
    channel: {
      id: "user_201",
      userName: "yashmittal",
      fullName: "Yash Mittal",
      avatar: "https://i.pravatar.cc/150?img=12",
      followersCount: 11700,
      isSubscribed: true,
    },
  },
  {
    id: "sub_2",
    channel: {
      id: "user_202",
      userName: "anya_rose",
      fullName: "Anya Rose",
      avatar: "https://i.pravatar.cc/150?img=32",
      followersCount: 110500,
      isSubscribed: false,
    },
  },
  {
    id: "sub_3",
    channel: {
      id: "user_203",
      userName: "david_lee",
      fullName: "David Lee",
      avatar: "https://i.pravatar.cc/150?img=45",
      followersCount: 120100,
      isSubscribed: false,
    },
  },
  {
    id: "sub_4",
    channel: {
      id: "user_204",
      userName: "finn_williams",
      fullName: "Finn Williams",
      avatar: "https://i.pravatar.cc/150?img=56",
      followersCount: 148000,
      isSubscribed: false,
    },
  },
  {
    id: "sub_5",
    channel: {
      id: "user_205",
      userName: "gabriel_rodriguez",
      fullName: "Gabriel Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=64",
      followersCount: 11700,
      isSubscribed: true,
    },
  },
];


const Following = () => {
  return (
    <div>
      {followingMock.map(({ id, channel }) => (
  <div key={id} className="flex items-center justify-between py-4">
    <div className="flex items-center gap-4">
      <img
        src={channel.avatar}
        alt={channel.userName}
        className="w-12 h-12 rounded-full"
      />

      <div>
        <p className="font-medium">{channel.fullName}</p>
        <p className="text-sm text-gray-400">
          {channel.followersCount.toLocaleString()} followers
        </p>
      </div>
    </div>

    <button
      className={`px-4 py-2 rounded ${
        channel.isSubscribed
          ? "border border-gray-500 text-gray-300"
          : "bg-purple-600 text-white"
      }`}
    >
      {channel.isSubscribed ? "Subscribed" : "Subscribe"}
    </button>
  </div>
))}

    </div>
  )
}

export default Following