import { NavLink } from "react-router";


const tabs = [
  { label: "Videos", path: "" },
  { label: "Playlist", path: "playlist" },
  { label: "Tweet", path: "tweet" },
  { label: "Following", path: "following" },
];

const ProfileTabs = () => {
 

  return (
    <div className="flex  gap-6 border-b px-4 mt-5 ">
      {tabs.map(tab => (
        <NavLink
          key={tab.label}
          to={tab.path} 
          end={tab.path === ""}
          className={({ isActive }) =>
            `pb-3 text-sm font-medium text-center mb-1 px-4 py-2 w-[15%] ${
              isActive
                ? "border border-black text-black  bg-gray-500 "
                : "text-gray-500"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default ProfileTabs;
