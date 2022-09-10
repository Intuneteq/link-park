import React from "react";

import "./School.scss";
import { Images } from "../../Constants";

const School = () => {
  return (
    <div className="school">
      <div className="app__flex gap">
        <div className="school__img">
          <img src={Images.schoolGirl} alt="alt" />
        </div>
        <div className="school__content app__flex-3">
          <h1 className="head-text">
            Welcome to
            the <span>park</span>
          </h1>
          <p className="p-text">
            Link up with your school and
            enoy class from anywhere.
          </p>
          <div className="btn-div">
          <button type="button" className="btn-primary">
            Find School
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
