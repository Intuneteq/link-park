import React from "react";
import { IoMdNotifications } from "react-icons/io";
import Calender from "../Components/Calender/Calender";

const BoardSchedule = () => {
  return (
    <div className="board__schedule column-flex">
      <section>
        <IoMdNotifications />
        <span className="app__flex">1</span>
      </section>
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default BoardSchedule;
