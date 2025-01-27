import Style from "./testimonials.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="      ' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section className={`${Style.testimonialsbox} testimonialsbox`}>
      <div>
        <Swiper
          loop={true}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testimonialsarry?.map((item, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className={Style.testimonials} key={index}>
                    <h4 className={Style.title}>{item.title}</h4>
                    <p className={Style.author}>
                      {item.authorname} / {item.authorjob}
                    </p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
const testimonialsarry = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorname: "KATJA ANDERSON, CEO",
    authorjob: " GREEN PROJECTS",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorname: "KATJA ANDERSON, CEO",
    authorjob: " GREEN PROJECTS",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorname: "KATJA ANDERSON, CEO",
    authorjob: " GREEN PROJECTS",
  },
];
