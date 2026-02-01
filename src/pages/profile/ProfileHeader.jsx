import { useParams } from "react-router";

export const profile = {
  _id: "user_123",
  name: "Yash Mittal",
  username: "YashMittal",
  avatar: "https://i.pravatar.cc/300?img=12",
  coverImage:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  subscribersCount: 600000,
  subscribedCount: 220,
};

const ProfileHeader = () => {
  const { userId } = useParams();

  const isOwner = userId === profile._id;

  return (
    <div className="w-full">
      
      {/* Cover */}
      <div className="h-[280px] w-full">
        <img
          src={profile.coverImage}
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="px-6 -mt-8">
        <div className="flex items-end gap-6">

          {/* Avatar */}
          <img
            src={profile.avatar}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-black"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{profile.name}</h1>
            <p className="text-gray-400 text-sm">@{profile.username}</p>

            <p className="text-gray-400 mt-1">
              {profile.subscribersCount.toLocaleString()} subscribers
              <span className="mx-2">•</span>
              {profile.subscribedCount} subscribed
            </p>
          </div>

          {/* Action */}
          <div>
            {isOwner ? (
              <button
                onClick={() => console.log("Edit profile")}
                className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800"
              >
                Edit Profile
              </button>
            ) : (
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
