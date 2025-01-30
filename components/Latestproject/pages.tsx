import React, { useRef, useState } from "react";
import style from "./latestproject.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import SwiperClass from "swiper/types/swiper-class";

const Latestproject = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.innersection}>
            <div className={style.box3}>
              
              <div className={style.qodefimage}>
                <Swiper
                  slidesPerView={1.5}
                  spaceBetween={30}
                  loop={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  navigation={{
                    nextEl: ".review2-swiper-button-next",
                    prevEl: ".review2-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                >
                  {latestarry?.map((items, index) => {
                    return (
                      <>
                        <SwiperSlide key={index}>
                          <div >
                            <Image
                              src={items.image}
                              width={1000}
                              height={500}
                              alt={items.name}
                              objectFit="cover"
                              className={style.img}
                            />
                          </div>
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>
                <div className={style.navarrow}>
                  <div
                    className={`${style.prevarrow} review2-swiper-button-prev`}
                  >
                    <span className="line-height-0">
                      <Image
                        src="/sliderarrow.svg"
                        width={30}
                        height={30}
                        alt="left1"
                      />
                    </span>
                  </div>
                  <div
                    className={`${style.nextarrow} review2-swiper-button-next`}
                  >
                    <span className="line-height-0">
                      <Image
                        src="/sliderarrow.svg"
                        width={30}
                        height={30}
                        alt="left1"
                        priority
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latestproject;

const latestarry = [
  {
    id: 1,
    image: "/render-image/1.png",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/render-image/2.png",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/render-image/3.png",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/render-image/4.png",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/render-image/6.JPEG",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/render-image/8.JPG",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
];
