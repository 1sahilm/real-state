"use client";
import React, { useEffect } from "react";
import style from "./AboutShimla.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed
import { useRouter } from "next/navigation";

const Aboutvvie: React.FC = () => {
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
            <h1>About VVIE </h1>
            <p>
              Inspired by the French word for ‘life,’ Vvie is where elegance
              meets modernity in the heart of nature. Vvie signifies life in its
              most luxurious and harmonious form. Each element within Vvie
              resonates with an ethos of refined living, offering serenity and
              elevated experiences for the discerning individual.
            </p>
            <p>
              These exclusive estates are thoughtfully crafted by world-renowned
              architects, offering bespoke luxury amidst nature, ensuring a
              unique living experience like no other.
            </p>
            <p>
              Evoking exclusivity and celebrating life, our vision is to create
              exclusive estates that can be cherished by generations to come, in
              handpicked locations that promise unfettered, stunning vistas even
              for times to come. Experience uninterrupted valley views from
              every corner at Vive by Infranium, where each limited villa offers
              expansive lawns, two open sides, and valley-facing bedrooms,
              dining, and living spaces. Enjoy the stunning landscape
              year-round, even in winter, from your private rooftop jacuzzi.{" "}
            </p>
          </div>

          {/* Right Section */}
          <div className={style.imageWrapper}>
            <div className={style.mainImage}>
              <Image
                src={require("../../assets/infranium-images/VVIE.PNG")}
                alt="Construction"
                className={style.aboutimage2}
                data-aos="fade-out-bounce"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutvvie;
