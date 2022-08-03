import React from "react";

import "./School.scss";
import { Images } from "../../Constants";

const School = () => {
  return (
    <div className="school app__flex-4">
      <div className="school__img">
      <img src={Images.school} alt="alt" />
      </div>
      <div className="school__content app__flex-3">
        <h1>
          Welcome to
          <br />
          the <span>park</span>
        </h1>
        <p>
          Link up with your school and
          <br />
          enoy class from anywhere.
        </p>
        <button type="button" className="btn">
          Find School
        </button>
      </div>
    </div>
  );
};

export default School;
