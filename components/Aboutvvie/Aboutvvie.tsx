"use client";
import React, { useEffect } from "react";
import style from "./AboutShimla.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed
import { useRouter } from "next/navigation";
import ReadMore from "../read-more";

const Aboutvvie: React.FC = () => {
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
            // src={require("../../assets/infranium-images/VVIE.PNG")}
            src="/nalandera.jpg"
            alt="Construction"
            className={style.aboutimage2}
            data-aos="fade-out-bounce"
            width={500}
            height={400}
          />
          {/* <Image
            src={require("../../assets/infranium-images/VVIE.PNG")}
            // src="/nalandera.jpg"
            alt="Construction"
            className={style.aboutimage2}
            data-aos="fade-out-bounce" 
          /> */}
          </div> 
        </div>

        {/* Right Section */}
        <div className={style.textWrapper}>
          <h2>About Us</h2>
          <h1>About VVIE</h1>
          {/* <p>
          Inspired by the French word for ‘life,’ Vvie is where elegance
          meets modernity in the heart of nature. Vvie signifies life in its
          most luxurious and harmonious form. Each element within Vvie
          resonates with an ethos of refined living, offering serenity and
          elevated experiences for the discerning individual.
          </p> */}
          <ReadMore
          maxLength={410}
          text="Inspired by the French word for ‘life,’ Vvie is where elegance
          meets modernity in the heart of nature. Vvie signifies life in its
          most luxurious and harmonious form. Each element within Vvie
          resonates with an ethos of refined living, offering serenity and
          elevated experiences for the discerning individual. These exclusive estates are thoughtfully crafted by world-renowned
              architects, offering bespoke luxury amidst nature, ensuring a
              unique living experience like no other. 
               Evoking exclusivity and celebrating life, our vision is to create
              exclusive estates that can be cherished by generations to come, in
              handpicked locations that promise unfettered, stunning vistas even
              for times to come."
           css="vive"
              /> 
          <ul>
            <span>
              <img src="/svg/first.svg" alt="" />
            <li>Proactively pontificate client </li>
            </span>
            <span>
              <img src="/svg/second.svg" alt="" />
            <li>Is there a waiting list for desired </li>
            </span>  
          </ul> 
          <button className={style.exploreButton} 
          onClick={() => router.push("/naldehra")}
          >
              Learn More
          </button>
        </div>
      </div>
      </div>
      
    </section>


    </>
  );
};

export default Aboutvvie;
