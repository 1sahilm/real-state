import React from "react";
import styles from "../ThreeColumnSection/threecolumnsection.module.scss";

const ThreeColumnSection = () => {
  return (
    <section className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <a href="#home" className={styles.link}>
        WHY SHIMLA? 
        </a>
        <a href="#brochure" className={styles.link}>
        A GLOBAL COMPARISON
        </a>
        <a href="#questions" className={styles.link}>
          Ask us your questions
        </a>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Shimla: A Premier Mountain Retreat at 7,218 Feet</h2>
          <p className={styles.text}>
          Nestled at 7,218 feet above sea level, Shimla offers a premier living experience, much like other
          renowned mountain destinations such as St. Moritz in Switzerland and Aspen in Colorado. 
          With its
perfect blend of pleasant climate, breathtaking landscapes, and rich cultural heritage, Shimla ranks
among the world’s top high-altitude retreats. Known as one of India’s most beloved hill stations, it
stands proudly, echoing the charm of destinations like the Alps and the Rockies.  
          </p> <br /> <br />
          <p className={styles.text}>
          Shimla’s charm lies in its cool, temperate summers, making it perfect for year-round
living. Close enough to major cities for convenience yet far enough to offer peace,
Shimla ensures both safety with its low crime rate and comfort with modern amenities. Its
impressive Air Quality Index, consistently between 30 and 50, promises fresh mountain
air, while the city’s high literacy rate of over 84% reflects a well-educated and cultured
community, fostering a refined and sophisticated lifestyle.
          </p>

        </div>
        <div className={styles.column}>
        <div className={styles.imageSection}>
          <img
            src="/about-us/shimla.jpg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
