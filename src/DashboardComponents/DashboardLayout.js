import { Outlet } from "react-router-dom";
import BoardNav from "./BoardNav";

const DashboardLayout = () => {
  return (
    <div className="dashboard app__flex-3">
      <BoardNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
