import { NavLink } from "react-router";
import { Home, LayoutDashboard, User } from "lucide-react";

const FooterBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 md:hidden">

      <NavLink to="/" className="flex flex-col items-center text-xs">
        <Home size={20} />
        Home
      </NavLink>

      <NavLink to="/dashboard" className="flex flex-col items-center text-xs">
        <LayoutDashboard size={20} />
        Dashboard
      </NavLink>

      <NavLink to="/profile/user_123" className="flex flex-col items-center text-xs">
        <User size={20} />
        Profile
      </NavLink>

    </div>
  );
};

export default FooterBar;
