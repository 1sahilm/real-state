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
            <h4>About Us</h4>
            <h1>Today Sells Properties</h1>
            <p>
              Houzez allows you to design unlimited panels and real estate
              custom forms to capture leads and keep a record of all
              information.
            </p>
            {/* <ul className={style.features}>
              <li>Live Music Concerts at Luviana</li>
              <li>Our Secret Island Boat Tour is Just for You</li>
              <li>Live Music Concerts at Luviana</li>
              <li>Live Music Concerts at Luviana</li>
            </ul> */}

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
            </ul>
            {/* <div className={style.propertyDetails}>
              <div>
                <span>3</span>
                <p>Bedrooms</p>
              </div>
              <div>
                <span>2</span>
                <p>Bathrooms</p>
              </div>
              <div>
                <span>2</span>
                <p>Car parking</p>
              </div>
              <div>
                <span>3450</span>
                <p>square Ft</p>
              </div>
            </div> */}

            <div className={style.imaggg}>
              {imagearray?.map((images, index) => {
                return (
                  <>
                    <div>
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
                src={require("../../assets/infranium-images/15.jpeg")}
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
    image: "/11.jpg",
  },
  {
    image: "/12.jpg",
  },
  {
    image: "/13.jpg",
  },
];
