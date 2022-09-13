import React from "react";
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import MotionCard from "../../Cards/MotionCard";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import "./Header.scss";

const Header = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const myImage = cld.image("v1662792449/link-park/headerphoto_y3x9qz.svg");

  myImage
    .format("auto")
    .quality("auto")
    .resize(
      thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
    );

  return (
    <div className="header app__flex-2">
      <div className="header__content app__flex-3">
        <h1 className="head-text">
          Simplifying <span>Education</span> for you
        </h1>
        <p className="p-text">
          Bringing school to you anywhere and anytime, using resources provided
          by teachers and permitting parents follow up.
        </p>
        <div className="app__flex-3">
          <button type="button" className="btn-primary">
            Get Started
          </button>
          <button type="button" className="btn-secondary">
            {" "}
            Find School
          </button>
        </div>
      </div>
      <div className="header__img">
        <div className="header__img-blob"></div>
        <div className="header__img-img">
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
      </div>
    </div>
  );
};

export default MotionCard(Header);
