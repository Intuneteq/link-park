import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Progress } from "@arco-design/web-react";

const BoardSubjects = () => {
  const progress = [
    {
      currentProgress: 50,
      totalProgress: 100,
      percentageCompleted: function() {
        return (this.currentProgress / this.totalProgress ) * 100
      },
    },
    {
      currentProgress: 40,
      totalProgress: 100,
      percentageCompleted: function() {
        return (this.currentProgress / this.totalProgress ) * 100
      },
    },
    {
      currentProgress: 35,
      totalProgress: 100,
      percentageCompleted: function() {
        return (this.currentProgress / this.totalProgress ) * 100
      },
    },
    {
      currentProgress: 75,
      totalProgress: 100,
      percentageCompleted: function() {
        return (this.currentProgress / this.totalProgress ) * 100
      },
    },
  ];

  return (
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
        {progress.map((item, index) => (
          <div className="column-flex" key={index}>
            <article>
              <h6>
                {item.currentProgress}/<span>{item.totalProgress}</span>
              </h6>
              <span>Completed Tasks</span>
            </article>
            <article className="app__flex-2">
            <p className="column-flex">
            {item.percentageCompleted()} <span>% Completed</span>
            </p>
            <span className="emoji">📘</span>
          </article>
          <Progress
            percent={item.percentageCompleted()}
            width="50%"
            color="#C9CDD4"
            size="small"
            type="line"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardSubjects;
