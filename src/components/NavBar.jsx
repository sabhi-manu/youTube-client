import React, { useContext, useState } from "react";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { FiLogOut, FiUser } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../context/SearchContext";
import { NavLink, useNavigate } from "react-router";
import { logoutUser } from "../features/authSlice";
import { logoutApi } from "../api/auth.api";
import { toast } from "react-toastify";


const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { searchText, setSearchText } = useContext(SearchContext);

  const [open, setOpen] = useState(false);

  const firstLetter = user?.userName?.charAt(0)?.toUpperCase();

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
     <div className="flex justify-between items-center gap-3  px-6 py-3 bg-white fixed w-full top-0 relative z-10 " >
        

      {/* LOGO */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img src={logo} alt="logo" className="h-9" />
      </div>

      {/* SEARCH (desktop only) */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => navigate("/search")}
            className="px-4 py-2 outline-none text-sm w-64"
          />
          <button className="px-4 bg-gray-100 hover:bg-gray-200">
            <CiSearch size={22} />
          </button>
        </div>
      </div>

      {/* USER (mobile + desktop) */}
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        >
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-semibold">
              {firstLetter}
            </div>
          )}
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-md ">
            <NavLink
              to={`/profile/${user?.userName}/${user?._id}`}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm"
              onClick={() => setOpen(false)}
            >
              <FiUser />
              Profile
            </NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 w-full hover:bg-red-50 text-red-600 text-sm"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
