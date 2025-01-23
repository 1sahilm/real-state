import React from "react";
import styles from "../Ourstory/ourstory.module.scss";

const Ourstory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.subHeading}>OUR STORY</p>
          <h1 className={styles.heading}>
            Architects excited about beauty,
            <br /> affordability sustainability materials
            <br /> for every project and person
          </h1>
          <a href="/our-story" className={styles.readMore}>
            read more
          </a>
        </div>
        <div className={styles.imageSection}>
          <img
            src="./ourstory.png"
            alt="Architects working"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
