import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { AiTwotoneSchedule } from "react-icons/ai";

import "./Calender.scss";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calen">
        
      <div className="calendar-container">
      <section>
            <h4>Schedule</h4>
          </section>
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <div className="text-center">
      Selected date: {date.toDateString()}
             </div> */}

      <section className="calen__upcoming">
        <h4>Upcoming</h4>
        <div className="app__flex-3">
          <div className="calen__upcoming-time column-flex">
            <p>09:00</p>
            <p>10:00</p>
          </div>
          <div className="calen__upcoming-body app__flex">
            <div className="app__flex">
              <AiTwotoneSchedule />
            </div>
            <div>
              <p>Course Name: Lesson</p>
              <p>Jan2, 12:30pm</p>
            </div>
          </div>
        </div>
        <div className="app__flex-3">
          <div className="calen__upcoming-time column-flex">
            <p>09:00</p>
            <p>10:00</p>
          </div>
          <div className="calen__upcoming-body app__flex">
            <div className="app__flex">
              <AiTwotoneSchedule />
            </div>
            <div>
              <p>Course Name: Lesson</p>
              <p>Jan2, 12:30pm</p>
            </div>
          </div>
        </div>
        <div className="app__flex-3">
          <div className="calen__upcoming-time column-flex">
            <p>09:00</p>
            <p>10:00</p>
          </div>
          <div className="calen__upcoming-body app__flex">
            <div className="app__flex">
              <AiTwotoneSchedule />
            </div>
            <div>
              <p>Course Name: Lesson</p>
              <p>Jan2, 12:30pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calender;
