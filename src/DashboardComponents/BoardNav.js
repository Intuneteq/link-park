import React from 'react';
import { RiBook3Fill, RiHome3Fill } from "react-icons/ri";
import { BsBook, BsFillPeopleFill, BsChatText } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

import { Images } from "../Constants";

const BoardNav = () => {
  return (
    <div className="board__nav column-flex">
          <div className="board__nav-logo">
            <RiBook3Fill />
          </div>
          <div className="board__nav-links column-flex">
            <div className="app__flex">
              <RiHome3Fill />
            </div>
            <div className="app__flex">
              <BsBook />
            </div>
            <div className="app__flex">
              <BsFillPeopleFill />
            </div>
            <div className="app__flex">
              <BsChatText />
            </div>

            {/* <div className="app__flex">
              <FiSettings />
            </div> */}
          </div>
          <div className="app__flex">
            <div className="board__nav-user app__flex">
              <img src={Images.profile} alt="profile" />
            </div>
            <section>
              <IoMdNotifications />
              <span className="app__flex">1</span>
            </section>
          </div>
        </div>
  )
}

export default BoardNav