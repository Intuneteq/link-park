import React, { useState, useRef } from "react";
import DateTimePicker from "react-datetime-picker";

const Event = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [startValue, startOnChange] = useState(new Date());
  const [endValue, endOnChange] = useState(new Date());

  const menuRef = useRef();
  const handleShowEvent = () => {
    setShowEventModal(!showEventModal)
  }

  


  return (
    <section className="event column-flex">
      <button onClick={handleShowEvent}>Add Event</button>
      {showEventModal && (
        <div className="event-container column-flex">
          <div id='modal' ref={menuRef} className="event-modal column-flex" onClick=''>
            <article className=" app__flex-2">
              <p className="p-text">Start: </p>
              <DateTimePicker onChange={startOnChange} value={startValue} />
            </article>
            <article className="app__flex-2">
              <p className="p-text">End: </p>
              <DateTimePicker onChange={endOnChange} value={endValue} />
            </article>
            <button>Add Event</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Event;
