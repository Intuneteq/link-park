import React from "react";
import "./Experience.scss";
import {
  AdvancedImage,
  lazyload,
  responsive,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import MotionCard from "../../Cards/MotionCard";

const Experience = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const studyImage = cld.image("v1663075209/link-park/enjoy_l99zyh.webp").format("auto").quality("auto");
  const easyImage = cld.image("v1663075209/link-park/easy_dr94up.webp").format("auto").quality("auto");
  const improveImage = cld.image("v1663396267/link-park/improvingschool_rjdezc.webp").format("auto").quality("auto");
  return (
    <div className="experience">
      <h1 className="head-text">Digitalizing Schooling Experience</h1>
      <div className="app__flex-4">
        <div className="experience__body app__flex">
          <div>
          <AdvancedImage
            cldImg={improveImage}
            width="2000px"
            height="2000px"
            plugins={[
              lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 }),
              responsive({ steps: [800, 1000, 1400] }),
            ]}
          />
          </div>
          <p className="p-text">Improving Schooling Experience</p>
        </div>
        <div className="experience__body app__flex">
          <div>
            <AdvancedImage
            cldImg={easyImage}
            width="2000px"
            height="2000px"
            plugins={[
              lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 }),
              responsive({ steps: [800, 1000, 1400] }),
            ]}
          />
          </div>
          <p className="p-text">Easy to use and understand</p>
        </div>
        <div className="experience__body app__flex">
          <div>
          <AdvancedImage
            cldImg={studyImage}
            width="2000px"
            height="2000px"
            plugins={[
              lazyload({ rootMargin: "10px 20px 10px 30px", threshold: 0.25 }),
              responsive({ steps: [800, 1000, 1400] }),
            ]}
          />
          </div>
          <p className="p-text">Enjoy class anywhere</p>
        </div>
      </div>
    </div>
  );
};

export default MotionCard(Experience);
