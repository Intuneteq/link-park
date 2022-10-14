import React from "react";
import { Outlet } from "react-router-dom";

import BoardNav from "./Home/BoardNav";
import useAppProvider from "../../hooks/useAppProvider";

const DashboardLayout = () => {
const { userProfile } = useAppProvider();

  return (
    <div className="dashboard app__flex-3">
      {userProfile && (
        <>
          <BoardNav />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
