import React from "react";
// import { Link } from "react-router-dom";

import "./Dashboard.scss";
import BoardNav from "../../DashboardComponents/BoardNav";
import BoardSubjects from "../../DashboardComponents/BoardSubjects";
import BoardActivities from "../../DashboardComponents/BoardActivities";
import BoardSchedule from "../../DashboardComponents/BoardSchedule";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { auth } = useAuth();
  const firstName = auth.user.firstName
  
  return (
    <div className="dashboard">
      <div className="board app__flex-3">
        <BoardNav />
        <div className="board__content">
          <div className="board__content-head">
            <h1>Hey {firstName},</h1>
            <p>It's sunny today and it's time to study</p>
          </div>
          <BoardSubjects />
          <BoardActivities />
        </div>
        <BoardSchedule />
      </div>
    </div>
  );
};

export default Dashboard;
