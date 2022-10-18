import React from "react";

import "../Dashboard.scss";
import BoardSubjects from "./BoardSubjects";
import BoardActivities from "./BoardActivities";
import BoardSchedule from "./BoardSchedule";
import useGetUser from "../../../hooks/useGetUser";
import BoardNotes from "./BoardNotes";
import Loading from "../../../Constants/Loading";

const Dashboard = () => {
  const { userProfile } = useGetUser();

  return (
    <>
      {userProfile ? (
        <div className="board app__flex-3">
          <div className="board__content">
            <div className="board__content-head app__flex-2">
              <article className="heading">
                <h1 className="head-text">{`Hey ${userProfile.firstName}, `}</h1>
                <p>It's sunny today and it's time to study</p>
              </article>
              <article className="board-notes-mobile">
                <BoardNotes />
              </article>
            </div>
            <BoardSubjects />
            <BoardActivities />
          </div>
          <div className="board-schedule">
            <BoardSchedule />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;
