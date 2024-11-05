"use client";
import React, { useEffect, useRef } from "react";
import style from "./About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed

const About: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={style.aboutcontainer}>
      <div className={style.aboutimages}>
        <div className={style.blurbackground}></div>
        <Image
          src={require("../../assets/About/image (2).png")}
          alt="Team Meeting"
          className={style.aboutimage1}
          data-aos="fade-out-bounce"
        />
        <motion.div>
          <Image
            src={require("../../assets/About/image (3).png")}
            alt="Construction"
            className={style.aboutimage2}
            data-aos="fade-out-bounce"
          />
        </motion.div>
      </div>
      <div className={style.aboutcontent}>
        <motion.h1 data-aos="fade-out-bounce">About Us</motion.h1>
        <motion.h2 data-aos="fade-out-bounce">We are The Best</motion.h2>
        <motion.p data-aos="fade-out-bounce">
          An About Us page is a dedicated section of your website that provides
          background information about your business or organization. An About
          page is not a place to push a hard sell or boast about your business.
          It should help visitors to understand who you are, what you do, and
          what makes your company unique.
        </motion.p>
        <motion.button data-aos="fade-out-bounce" className={style.aboutbutton}>
          MORE ABOUT US
        </motion.button>
      </div>
    </div>
  );
};

export default About;
