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
        <a href="#brochure" className={styles.link}>
        SETTING THE STAGE FOR <br /> UNPARALLELED LUXURY
        </a> 
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.column}>
          {/* <h2 className={styles.heading}>Shimla: A Premier Mountain Retreat at 7,218 Feet</h2> */}
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

          {/* <p className={styles.text}>
          Shimla’s charm lies in its cool, temperate summers, making it perfect for year-round
living. Close enough to major cities for convenience yet far enough to offer peace,
Shimla ensures both safety with its low crime rate and comfort with modern amenities. Its
impressive Air Quality Index, consistently between 30 and 50, promises fresh mountain
air, while the city’s high literacy rate of over 84% reflects a well-educated and cultured
community, fostering a refined and sophisticated lifestyle.
          </p> */}

        </div>
        <div className={styles.column}>
        <div className={styles.imageSection}>
          <img
            src="/club-house.jpg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
        <br />
        <div className={styles.imageSection}>
          <img
            src="/club-house-second.jpg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageSection;
