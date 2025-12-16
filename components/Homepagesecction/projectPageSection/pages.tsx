import Image from "next/image";
import React from "react";
import styles from "../ThreeColumnSection/threecolumnsection.module.scss";

const ProjectPageSection = () => {
  return (
    <section className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <a href="#home" className={styles.link}>
        THE FAIRWAY CLUB & SPA 
        </a>
        <p className={styles.text}>
          Discover a world of exclusive amenities, thoughtfully designed to elevate your experience at
Infranium Homes. Nestled in Naldehra’s serene embrace, our luxury club redefines comfort and
sophistication, drawing inspiration from iconic establishments. Here, every detail is curated to
provide you with the utmost exclusivity and refinement.
          </p>
          <p className={styles.text}>
          Discover a world of exclusive amenities, thoughtfully designed to elevate your experience at
Infranium Homes. Nestled in Naldehra’s serene embrace, our luxury club redefines comfort and
sophistication, drawing inspiration from iconic establishments. Here, every detail is curated to
provide you with the utmost exclusivity and refinement.
          </p>
           
          <ul className={styles.listing}>
            <li>HEATED INDOOR POOL</li>
            <li>SPA & WELLNESS RETREAT
</li>
<li>STATE-OF-THE-ART GYM</li>
<li>PARTY HALL</li>
<li>MULTICUISINE RESTAURANT & CAFÉ</li>
<li>YOGA HALL</li>
          </ul>
        {/* <a href="#brochure" className={styles.link}>
        SETTING THE STAGE FOR <br /> UNPARALLELED LUXURY
        </a>  */}
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* <div className={styles.column}> 
          <p className={styles.text}>
          Discover a world of exclusive amenities, thoughtfully designed to elevate your experience at
Infranium Homes. Nestled in Naldehra’s serene embrace, our luxury club redefines comfort and
sophistication, drawing inspiration from iconic establishments. Here, every detail is curated to
provide you with the utmost exclusivity and refinement.
          </p> <br /> <br />
          <h2 className={styles.heading}>+ HEATED INDOOR POOL</h2>
          <h2 className={styles.heading}>+ SPA & WELLNESS RETREAT</h2>
          <h2 className={styles.heading}>+ STATE-OF-THE-ART GYM</h2>
          <h2 className={styles.heading}>+ PARTY HALL</h2>
          <h2 className={styles.heading}>+ MULTICUISINE RESTAURANT & CAFÉ</h2>
          <h2 className={styles.heading}>+ YOGA HALL</h2>
 

        </div> */}
        <div className={styles.column}>
        <div className={styles.imageSection}>
          <Image
            src="/4-5-BHK-luxury-villa-Naldehra.jpg"
            alt="4 & 5 BHK villas for sale in Shimla Naldehra,,Himachal Pradesh"
            className={styles.image}
            width={700}
            height={900}
          />
        </div>
         
        </div>
      </div>
    </section>
  );
};

export default ProjectPageSection;
