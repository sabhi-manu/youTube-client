
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const AppLayout = () => {
  return (
    <div className="flex">
     
      <SideBar />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
