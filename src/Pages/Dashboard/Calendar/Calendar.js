import React from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
// import "@fullcalendar/core/main.css"
// import "@fullcalendar/timegrid/main.css";

import "./Calendar.scss";
import Event from "./Event";

const Calendar = () => {
  // var calendar = new Calendar(calendarEl, {
  //   events: [
  //     // my event data
  //   ],
  //   eventColor: '#ddddd'
  // });
  const events = [
    {
      title: "Meeting",
      start: "2022-10-12T14:30:00",
      end: "2022-10-12T15:30:00",
      extendedProps: {
        status: "done",
      },
    },
    {
      title: "Birthday Party",
      start: "2022-10-13T07:00:00",
      backgroundColor: "red",
      borderColor: "green",
    },
  ];

  return (
    <div className="column-flex" id="calendar">
      <h1 className="head-text">Link-Park Calendar</h1>
      <Event />
      <FullCalendar
        // defaultView="dayGridMonth"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay"
        // }}
        // plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
        displayEventEnd
        // eventTimeFormat={}
        eventColor="red"
        eventTextColor="blue"
        editable={true}
        // displayEventTime={false}
        headerToolbar={{
          left: "prev,next today,",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        // initialView="listWeek"
        // header={{
        //   left: "prev,next today",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        // }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
      />
    </div>
  );
};

export default Calendar;
