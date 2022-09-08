import React from 'react';
import { BsSearch } from "react-icons/bs";

const BoardActivities = () => {
  return (
    <div className="board__content-activity app__flex-2">
            <div className="activity-activity activity">
              <div className="app__flex-2">
                <h4 className="app__flex">
                  Activity <span className="app__flex">4</span>
                </h4>
                <span className="material-symbols-outlined">tune</span>
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
                <span className="material-symbols-outlined">tune</span>
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
  )
}

export default BoardActivities