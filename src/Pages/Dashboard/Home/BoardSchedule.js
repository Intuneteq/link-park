import React from "react";

import Calender from "./Calender/Calender";
import BoardNotes from "./BoardNotes";

const BoardSchedule = () => {
  return (
    <div className="board__schedule column-flex">
      <section>
        <BoardNotes />
      </section>
      <div>
        <Calender />
      </div>
    </div>
  );
};

export default BoardSchedule;
