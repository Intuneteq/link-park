import React from "react";
// import { Link } from "react-router-dom";
import { RiBook3Fill, RiHome3Fill } from "react-icons/ri";
import { BsBook, BsSearch, BsFillPeopleFill, BsChatText } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";

import "./Dashboard.scss";
import { Images } from "../../Constants";
import Calender from "../../Components/Calender/Calender";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="board app__flex-3">
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
        <div className="board__content">
          <div className="board__content-head">
            <h1>Hey Tobi,</h1>
            <p>It's sunny today and it's time to study</p>
          </div>
          <div className="board__content-subject">
            <div className="subject-head app__flex-2">
              <h4 className="app__flex">
                My Progress <span className="app__flex">4</span>
              </h4>
              <div className="app__flex-2">
                <span className="app__flex">
                  <HiChevronLeft />
                </span>
                <span className="app__flex">
                  <HiChevronRight />
                </span>
              </div>
            </div>
            <div className="subject-board">
              <div className="app__flex">
                <p>200/300</p>
              </div>
              <div className="app__flex">
                <p>200/300</p>
              </div>
              <div className="app__flex">
                <p>200/300</p>
              </div>
              <div className="app__flex">
                <p>200/300</p>
              </div>
            </div>
          </div>
          <div className="board__content-activity app__flex-2">
            <div className="activity-activity activity">
              <div className="app__flex-2">
                <h4 className="app__flex">
                  Activity <span className="app__flex">4</span>
                </h4>
                <span class="material-symbols-outlined">tune</span>
              </div>
              <section>
                <div>
                  <span className="app__flex">
                    <BsSearch />
                    <input type="text" placeholder="Search Activity" />
                  </span>
                </div>
                <div>something</div>
                <div>something</div>
              </section>
            </div>
            <div className="activity-subjects activity">
              <div className="app__flex-2">
                <h4 className="app__flex">
                  Subjects <span className="app__flex">4</span>
                </h4>
                <span class="material-symbols-outlined">tune</span>
              </div>
              <section>
                <div>
                  <span className="app__flex">
                    <BsSearch />
                    <input type="text" placeholder="Search Subject" />
                  </span>
                  <div>something</div>
                </div>
                <div>something</div>
              </section>
            </div>
          </div>
        </div>
        <div className="board__schedule column-flex">
          <section>
            <IoMdNotifications />
            <span className="app__flex">1</span>
          </section>
          <div>
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
