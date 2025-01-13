"use client";
import React, { useEffect } from "react";
import style from "./About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed
import { useRouter } from "next/navigation";

const About: React.FC = () => {
  // Initialize AOS
  // useEffect(() => {
  //   AOS.init({ duration: 1200 });
  // }, []);
  const router = useRouter();

  return (
    <>
    
    

    <section className={style.bannerSection}>
      <div className="max-w-[1366px] mr-auto ml-auto">
      <div className={style.contentWrapper}>
        {/* Left Section */}
        <div className={style.imageWrapper}>
          <div className={style.imageMask}>
          <Image
            src={require("../../assets/infranium-images/15.jpeg")}
            alt="Construction"
            className={style.aboutimage2}
            data-aos="fade-out-bounce"
          />
          </div> 
        </div>

        {/* Right Section */}
        <div className={style.textWrapper}>
          <h2>About Company</h2>
          <h1>About Infranium</h1>
          <p>
          Led by a team of visionary leaders, Infranium draws upon decades of experience in real estate, architecture, marketing, and administration. Each director brings a wealth of expertise, ensuring that every project reflects the highest standards of luxury and innovation. From our Director
          of Marketing’s keen sense for branding to our Director of Architecture’s meticulous eye for design, Infranium is built on the strongest foundational pillars of
          collaboration and excellence.
          </p>
          <ul>
            <span>
              <img src="/right-arrow.png" alt="" />
            <li>Proactively pontificate client</li>
            </span>
            <span>
              <img src="/right-arrow.png" alt="" />
            <li>Is there a waiting list for desired</li>
            </span>
            <span>
              <img src="/right-arrow.png" alt="" />
            <li>Immediate 24/7 Emergency</li>
            </span>
          </ul> 
          <button className={style.exploreButton} 
          onClick={() => router.push("/about-us")}
          >
            <span>🏠</span> Explore More
          </button>
        </div>
      </div>
      </div>
      
    </section>


    

    </>
  );
};

export default About;
