import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

const NavBar = () => {
    let user = "";
    return (
        <div className="flex justify-between items-center gap-3 border px-6 py-3 bg-white fixed w-full top-0 " >
            {/* logo part */}
            <div className=" flex justify-between items-center gap-x-2">
                <GiHamburgerMenu className="cursor-pointer  " size={22} />
                <img
                    className="h-10 cursor-pointer  "
                    src={logo}
                    alt="youtube logo"
                />
            </div>

            {/* search part */}
            <div className=" flex items-center px-2 gap-3">
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden  bg-white">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search"
                        className="flex-1 px-4 py-2 outline-none text-sm"
                    />
                    <button className="px-5 py-2 border-l border-gray-300 bg-gray-100 hover:bg-gray-200">
                        <CiSearch size={22} />
                    </button>
                </div>
                <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                    <FaMicrophone size={18} />
                </button>
            </div>

                {/* profile */}

            <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100 transition">
                    <CiVideoOn size={22} />
                </button>

                <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
                    <CiBellOn size={22} />
                </button>

                <div className="cursor-pointer">
                    {user?.photo ? (
                        <img
                            src={user.photo}
                            alt="profile"
                            className="w-9 h-9 rounded-full object-cover hover:ring-2 hover:ring-gray-300 transition"
                        />
                    ) : (
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-semibold">
                            M
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
