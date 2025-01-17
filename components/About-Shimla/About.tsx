"use client";
import React, { useEffect } from "react";
import style from "./AboutShimla.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed
import { useRouter } from "next/navigation";

const AboutShimla: React.FC = () => {
  // Initialize AOS
  // useEffect(() => {
  //   AOS.init({ duration: 1200 });
  // }, []);
  const router = useRouter();

  return (
    <>
      <section className={style.section}>
        <div className={style.content}>
          {/* Left Section */}
          <div className={style.textWrapper}>
            <h4>About Shimla</h4>
            <h1>WHY SHIMLA/HP
            A GLOBAL COMPARISON</h1>
            <p>
            The ever-beautiful Shimla, much like other renowned mountain destinations such as St. Moritz,
Switzerland, and Aspen, Colorado, offers a premier living experience at 2,200 metres above sea
level. It is an exceptional blend of climate, awe-inspiring landscapes, and cultural richness places it
amongst the globe’s top high-altitude retreats. Lending itself as one of the most loved hill stations,
the city of Shimla stands tall on its own and reflects the allure of destinations like the Alps and the
Rockies, to bring an exquisite fusion of luxury and nature. The region is distinguished by its exclusive
golf course, adding to its prestige and stately, old-world charm.
            </p> 
{/* 
            <ul>
              <span>
                <img src="/right-arrow.png" alt="" />
                <li>Live Music Concerts at Luviana</li>
              </span>
              <span>
                <img src="/right-arrow.png" alt="" />
                <li>Our Secret Island Boat Tour is Just for You</li>
              </span>
              <span>
                <img src="/right-arrow.png" alt="" />
                <li>Live Music Concerts at Luviana</li>
              </span>
              <span>
                <img src="/right-arrow.png" alt="" />
                <li>Live Music Concerts at Luviana</li>
              </span>
            </ul>  */}

            <div className={style.imaggg}>
              {imagearray?.map((images, index) => {
                return (
                  <>
                    <div className={style.imagesbanner} key={index}>
                      <Image
                        src={images.image}
                        width={160}
                        height={114}
                        alt={images.image}
                      />
                    </div>
                  </>
                );
              })}
            </div> 
          </div>

          {/* Right Section */}
          <div className={style.imageWrapper}>
            <div className={style.mainImage}>
              <Image
                src={require("../../assets/infranium-images/shimla.jpg")}
                alt="Construction"
                className={style.aboutimage2}
                data-aos="fade-out-bounce"
              />
            </div>
            {/* <div className={style.gridImages}>
              <Image src="/room.jpg" alt="Room" width={200} height={200} />
              <Image src="/house.jpg" alt="House" width={200} height={200} />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutShimla;

const imagearray = [
  {
    image: "/train-shimla.jpg",
  },
  {
    image: "/minar.jpg",
  },
  {
    image: "/new.jpg",
  },
];
