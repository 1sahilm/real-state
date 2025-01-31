"use client";
import React, { useState } from "react";
import styles from "./ourstory.module.scss"
import Link from "next/link";
import ModelBox from "@/components/ModelBox/page";

const Ourstory3 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.subHeading}>ABOUT NALDEHRA</p>
          <h1 className={styles.heading}>
          NALDEHRA: A TAPESTRY OF NATURE AND 
          <br />
          TRANQUILITY
 
          </h1>
          <p className={styles.text}>
          Nestled at 6,706 feet in altitude,
Naldehra offers an unparalleled
mountain experience that draws
in nature lovers, adventurers, and
those seeking an elevated way of life.
Known for its lush landscapes, the
iconic Naldehra Golf Course, and
breathtaking sunsets, Naldehra is more
than a destination—it’s a sanctuary
where nature’s beauty flourishes in
every direction. 
          </p>
          <ul className={styles.listing}>
            <li>THE LOCATION: Perched 24 kilometres from Shimla, Naldehra feels like a world apart, yet
            remains connected to modern conveniences</li>
            <li>HEIGHT: At an altitude of 6,706 feet, Naldehra shares the skies with some of the world’s most renowned luxury destinations. 
</li>
<li>SUN DIRECTIONS: With its eastward-facing slopes, Naldehra enjoys the first kiss of the
morning sun, painting the landscape in hues of gold</li>
<li>FLORA & FAUNA: Naldehra is a living canvas of biodiversity. Towering pines and ancient deodars stretch across
the horizon, while vibrant rhododendrons and Himalayan oak create a tapestry of colours.</li>
          </ul>
          <span   className={styles.readMore} onClick={togglePopup}>
          CTA
          </span>
          
        </div>
        <div className={styles.imageSection}>
          <img
            src="/moon.jpg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
      </div>
      <ModelBox 
      togglePopup={togglePopup}
      isOpen={isOpen}
      />
    </section>
  );
};

export default Ourstory3;
