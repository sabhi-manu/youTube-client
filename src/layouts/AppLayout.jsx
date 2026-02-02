
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      <FooterBar/>
    </div>
  );
};

export default AppLayout;

