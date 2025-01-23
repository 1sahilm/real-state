import React from "react";
import styles from "../ThreeColumnSection/threecolumnsection.module.scss";

const ThreeColumnSection = () => {
  return (
    <section className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <a href="#home" className={styles.link}>
          Design a perfect home
        </a>
        <a href="#brochure" className={styles.link}>
          Download our brochure
        </a>
        <a href="#questions" className={styles.link}>
          Ask us your questions
        </a>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Urban Exteriors</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.column}>
          <h2 className={styles.heading}>Cityscapes Buildings</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
