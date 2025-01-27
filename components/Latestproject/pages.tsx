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
              <div className={style.qodefinfo}>
                <div className={style.topsc}>
                  <span>LATEST PROJECTS</span>
                </div>

                <div className={style.thumbs}>
                  <Swiper
                    // onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    // className="mySwiper"
                  >
                    {latestarry?.map((items, index) => {
                      return (
                        <>
                          <SwiperSlide key={index}>
                            <div className={style.content}>
                              <h4> {items.name}</h4>
                              <h3>{items.subname}</h3>
                            </div>
                          </SwiperSlide>
                        </>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
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
                          <div>
                            <Image
                              src={items.image}
                              width={1000}
                              height={500}
                              alt={items.name}
                              objectFit="cover"
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
    image: "/h1-port-img-01.jpg",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/h1-port-img-02.jpg",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
  {
    id: 1,
    image: "/h1-port-img-03-1.jpg",
    name: "Museum of Fado Lisbon",
    subname: "ARCHITECTURE | HERITAGE",
  },
];
