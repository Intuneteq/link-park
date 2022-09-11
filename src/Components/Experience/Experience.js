import React from "react";

import "./Experience.scss";
import { Images } from "../../Constants";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="head-text">Digitalizing Schooling Experience</h1>
      <div className="app__flex-4">
        <div className="experience__body app__flex">
          <div>
            <img src={Images.improving} alt="alt" />
          </div>
          <p className="p-text">Improving Schooling Experience</p>
        </div>
        <div className="experience__body app__flex">
          <div>
            <img src={Images.easy} alt="alt" />
          </div>
          <p className="p-text">Easy to use and understand</p>
        </div>
        <div className="experience__body app__flex">
          <div>
            <img src={Images.enjoy} alt="alt" />
          </div>
          <p className="p-text">Enjoy class anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
