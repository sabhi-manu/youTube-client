import { useParams } from "react-router";
import EditProfileModal from "../EditProfileModal";
import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const ProfileHeader = ({ profile, isOwner }) => {
  const [activeEdit, setActiveEdit] = useState(null);
  const [editOpt, setEditOpt] = useState(false);

  return (
    <div className="w-full">
      {/* Cover */}
      <div className="h-[280px] w-full relative">
        <img
          src={profile.coverImage}
          alt="cover"
          className="h-full w-full object-cover"
        />
        {isOwner && (
          <button
            onClick={() => setActiveEdit("cover")}
            className="absolute bottom-4 right-4 flex items-center gap-1 
                 bg-black/70 text-white px-3 py-2 rounded-full
                  hover:bg-black hover:scale-105 transition"
          >
            <MdOutlineEdit size={18} />
            <span className="text-sm">Edit cover</span>
          </button>
        )}
      </div>

      {/* Info Section */}
      <div className="px-6 -mt-8">
        <div className="flex items-end gap-6 relative">
          {/* Avatar */}
          <div className="relative w-32 h-32">
            <img
              src={profile.avatar}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-black object-cover"
            />

            {isOwner && (
              <button
                onClick={() => setActiveEdit("avatar")}
                className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition"
              >
                <MdOutlineEdit size={16} />
              </button>
            )}
          </div>
          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{profile.fullName}</h1>
            <p className="text-gray-400 text-sm">@{profile.userName}</p>

            <p className="text-gray-400 mt-1">
              {profile.subscribersCount.toLocaleString()} subscribers
              <span className="mx-2">•</span>
              {profile.subscribeToCount} subscribed
            </p>
          </div>

          {/* Action */}
          <div>
            {isOwner ? (
              <div>
                <button
                  onClick={() => setEditOpt(!editOpt)}
                  className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-400"
                >
                  Edit Profile
                </button>
                {editOpt && (
                  <div className="absolute right-0 mt-2 w-48  bg-gray-400 border border-gray-700  rounded-lg shadow-lg overflow-hidden z-50">
                    <button
                      onClick={() => {
                        setActiveEdit("details");
                        setEditOpt(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-300"
                    >
                      Change details
                    </button>

                    <button
                      onClick={() => {
                        setActiveEdit("password");
                        setEditOpt(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-300"
                    >
                      Change password
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className={`px-5 py-2 rounded font-medium transition ${
                  profile.isSubscribed
                    ? "bg-gray-300 text-black hover:bg-gray-400"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
                onClick={() => {
                  // later: call subscribe / unsubscribe API
                  console.log(
                    profile.isSubscribed ? "Unsubscribe" : "Subscribe",
                  );
                }}
              >
                {profile.isSubscribe ? "Unsubscribe" : "Subscribe"}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Popup */}
      <EditProfileModal
        activeEdit={activeEdit}
        onClose={() => setActiveEdit(null)}
      />
    </div>
  );
};

export default ProfileHeader;
