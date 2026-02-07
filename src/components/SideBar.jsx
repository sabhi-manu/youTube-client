import { NavLink, useNavigate } from "react-router";
import { GoHome } from "react-icons/go";
import { MdDashboard, MdHistory } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiUserSquareThin } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FiInfo, FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../api/auth.api";
import { toast } from "react-toastify";
import { logoutUser } from "../features/authSlice";

const SideBar = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("check the user in side bar ==>", user)
  const navItemClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-2 rounded-xl transition
     ${isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutApi(); 
      toast.success("user logout successfully.")
    } catch (err) {
      console.log("logout api failed");
    } finally {
      dispatch(logoutUser());
      navigate("/login");
    }
  };


  return (
    <div className="w-64 h-screen px-2 py-4 overflow-y-auto">

      {/* MAIN */}
      <NavLink to="/" className={navItemClass}>
        <GoHome size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/dashboard" className={navItemClass}>
        <MdDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/search" className={navItemClass}>
        <IoSearchOutline size={20} />
        <span>Search</span>
      </NavLink>

      <hr className="my-3" />

      {/* YOU */}
      <h4 className="text-sm font-semibold ml-4 mb-1">You</h4>

      {user && (
        <NavLink
          to={`/profile/${user?.userName}/${user._id}`}
          className={navItemClass}
        >
          <PiUserSquareThin size={20} />
          <span>Your Channel</span>
        </NavLink>
      )}

      <NavLink to="/history" className={navItemClass}>
        <MdHistory size={20} />
        <span>History</span>
      </NavLink>

      <NavLink to="/like/video" className={navItemClass}>
        <AiOutlineLike size={20} />
        <span>Liked Videos</span>
      </NavLink>

      <hr className="my-3" />

      {/* INFO */}
      <NavLink to="/about" className={navItemClass}>
        <FiInfo size={20} />
        <span>About</span>
      </NavLink>


      <p className="text-xs text-gray-500 mt-6 ml-4">
        © 2026 Sabhimanu Coding
      </p>
      <hr className="my-3" />

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-4 py-2 w-full rounded-xl hover:bg-red-100 text-red-600 transition"
      >
        <FiLogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default SideBar;
