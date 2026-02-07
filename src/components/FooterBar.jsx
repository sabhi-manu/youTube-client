import { NavLink } from "react-router";
import { Home, LayoutDashboard, History } from "lucide-react";
import { useSelector } from "react-redux";
import { AiOutlineLike } from "react-icons/ai";

const FooterBar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const navClass = ({ isActive }) =>
    `flex flex-col items-center text-xs transition
     ${isActive ? "text-blue-600 font-semibold" : "text-gray-600"}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 md:hidden">

      <NavLink to="/" className={navClass}>
        <Home size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/dashboard" className={navClass}>
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      {isAuthenticated && user && (
        <NavLink
          to={`/like/video`}
          className={navClass}
        >
          <AiOutlineLike size={20} />
          <span>Profile</span>
        </NavLink>
      )}

      <NavLink to="/history" className={navClass}>
        <History size={20} />
        <span>History</span>
      </NavLink>

    </div>
  );
};

export default FooterBar;
