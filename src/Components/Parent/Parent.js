import React from "react";

import { Images } from "../../Constants";
import MotionCard from "../../Cards/MotionCard";
import "./Parent.scss";

const Parent = () => {

  return (
    <div className="app__flex-4 parent">
      <div className="parent__img">
        <div>
          <img src={Images.Parent} alt="alt" />
        </div>
      </div>
      <div className="parent__content">
        <h1 className="head-text">
          Effectively <span>Track</span> your wards learning Process
        </h1>
        <p className="p-text">
          With simplified medium, upload learning resources and track all of
          your students learning process.
        </p>
        <button type="button" className="btn-primary">
          Start
        </button>
      </div>
    </div>
  );
};

export default MotionCard(Parent);
