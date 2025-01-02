"use client";

import React from "react";
import styles from "./welcome.module.css";
import Image from "next/image";
import ReadMore from "../read-more";

const Welcome = () => {
  const aboutText = "Inspired by the French word for 'life,' Vvie is where elegance meets modernity in the heart of nature. Vvie signifies life in its most luxurious and harmonious form. Each element within Vvie resonates with an ethos of refined living, offering serenity and elevated experiences for the discerning individual. Evoking exclusivity and celebrating life, our vision is to create exclusive estates that can be cherished by generations to come, in handpicked locations that promise unfettered, stunning vistas even for times to come. Experience uninterrupted valley views from every corner at Vvie by Infranium, where each limited villa offers expansive lawns, two open sides, and valley-facing bedrooms, dining, and living spaces. Enjoy the stunning landscape year-round, even in winter, from your private rooftop jacuzzi. These exclusive estates are thoughtfully crafted by world-renowned architects, offering bespoke luxury amidst nature, ensuring a unique living experience like no other. "
  return (
    <div
      className={`${styles.container}  max-[768px]:!block max-w-[1366px] mr-auto ml-auto`}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>Welcome To The</h1>
        <h2 className={styles.subtitle}>Vision of Infranium</h2>
       <ReadMore text={aboutText} maxLength={260} />
      </div>
      <div className={styles.image}>
        <Image
          className={styles.customImage}
          src={require("../../assets/infranium-images/11.jpeg")}
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default Welcome;
