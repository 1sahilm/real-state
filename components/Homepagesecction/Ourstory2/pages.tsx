"use client"
import React, { useState } from "react";
import styles from "./ourstory.module.scss"
import Link from "next/link";
import ModelBox from "@/components/ModelBox/page"; 
import { useRouter } from "next/navigation";

const Ourstory2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };

      const router = useRouter();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.subHeading}>About Vvie Villas, Naldehra Golf Hills</p>
          <h2 className={styles.heading}>
          Inspired by the French word for ‘life,’ Vvie  
          is where elegance meets modernity in the heart of nature.
 
          </h2>
          <p className={styles.text}>
          Evoking exclusivity and celebrating life, our 
vision is to create exclusive estates that can 
be cherished by generations to come, in 
handpicked locations that promise unfettered, 
stunning vistas even for times to come. 
Experience uninterrupted valley views from 
every corner at Vvie by Infranium, where 
each limited villa offers expansive lawns, two 
and three side open villas, and valley-facing 
bedrooms, dining, and living spaces. Enjoy the 
stunning landscape year-round, even in winter, 
from your private rooftop jacuzzi.
          </p>
          <span   className={styles.readMore} onClick={()=>router.push("/project")}>
          Read More
          </span>
          
        </div>
        <div className={styles.imageSection}>
          <img
            src="/vive-villa.jpeg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
      </div>
      <ModelBox 
      togglePopup={togglePopup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}

      />
    </section>
  );
};

export default Ourstory2;
