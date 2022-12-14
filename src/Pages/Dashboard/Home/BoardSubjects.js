import React, { useState, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Progress } from "@arco-design/web-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const BoardSubjects = () => {
  const [swiperRef, setSwiperRef] = useState();

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  const progress = [
    {
      backgroundColor: "#b1b1d8",
      currentProgress: 50,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
      },
    },
    {
      backgroundColor: "rgb(76, 58, 105)",
      currentProgress: 40,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
      },
    },
    {
      backgroundColor: "rgba(119, 64, 105, 0.9)",
      currentProgress: 35,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
      },
    },
    {
      backgroundColor: "hsl(314, 22%, 42%)",
      currentProgress: 75,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
      },
    },
    {
      currentProgress: 75,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
      },
    },
    {
      currentProgress: 75,
      totalProgress: 100,
      percentageCompleted: function () {
        return (this.currentProgress / this.totalProgress) * 100;
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
          <span className="app__flex" onClick={handleLeftClick}>
            <HiChevronLeft />
          </span>
          <span className="app__flex" onClick={handleRightClick}>
            <HiChevronRight />
          </span>
        </div>
      </div>
      <div className="subject-board">
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween="20"
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onSwiper={setSwiperRef}
        >
          {progress.map((item, index) => (
            <SwiperSlide key={index}>
              <div style={{backgroundColor: item.backgroundColor}} className="column-flex" >
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
                  <span className="emoji">????</span>
                </article>
                <Progress
                  percent={item.percentageCompleted()}
                  width="50%"
                  color="#C9CDD4"
                  size="small"
                  type="line"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BoardSubjects;
