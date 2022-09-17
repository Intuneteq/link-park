import React from "react";
import { Link } from "react-router-dom";
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import "./School.scss";
import MotionCard from "../../Cards/MotionCard";

const School = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const myImage = cld.image("v1662792449/link-park/schoolGirl_jpmicd.svg");

  myImage
    .format("auto")
    .quality("auto")
    .resize(
      thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
    );

  return (
    <div className="school app__flex">
      <div className="app__flex gap">
        <div id="school__img">
          <AdvancedImage
            cldImg={myImage}
            width="400px"
            height="400px"
            plugins={[
              lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 }),
              responsive({ steps: [800, 1000, 1400] }),
              accessibility({ mode: "colorblind" }),
              placeholder({ mode: "predominant-color" }),
            ]}
          />
        </div>
        <div className="school__content app__flex-3">
          <h1 className="head-text">
            Welcome to the <span>park</span>
          </h1>
          <p className="p-text">
            Link up with your school and enoy class from anywhere.
          </p>
          <div className="btn-div">
            <button type="button" className="btn-primary">
              <Link to="/selectschool">Find School</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionCard(School);
