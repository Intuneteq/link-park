import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const BoardSubjects = () => {
  return (
    <div className="board__content-subject">
      <div className="subject-head app__flex-2">
        <h4 className="app__flex">
          My Progress <span className="app__flex">4</span>
        </h4>
        <div className="app__flex-2">
          <span className="app__flex">
            <HiChevronLeft />
          </span>
          <span className="app__flex">
            <HiChevronRight />
          </span>
        </div>
      </div>
      <div className="subject-board">
        <div className="app__flex">
          <p>200/300</p>
        </div>
        <div className="app__flex">
          <p>200/300</p>
        </div>
        <div className="app__flex">
          <p>200/300</p>
        </div>
        <div className="app__flex">
          <p>200/300</p>
        </div>
      </div>
    </div>
  );
};

export default BoardSubjects;
