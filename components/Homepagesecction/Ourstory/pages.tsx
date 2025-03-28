import React from "react";
import styles from "../Ourstory/ourstory.module.scss";
import Link from "next/link";

const Ourstory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.subHeading}>ABOUT INFRANIUM</p>
          <h1 className={styles.heading}>
          Infranium leads the way in luxury real
          estate by blending innovation with timeless elegance.
           <br /> 
 
          </h1>
          <p className={styles.text}>
          Our commitment is to
create residences that integrate seamlessly with nature,
inspiring a lifestyle of distinction and tranquillity.  Although Vvie marks our first marquee project, our
team at Infranium brings extensive experience in craft -
ing high-end developments across various prestigious
brands. Our dedication to architectural excellence and
meticulous attention to detail is evident in every project,
promising unparalleled spaces that stand as a testament
to refined living
          </p>
          <Link href = "/about-us" className={styles.readMore}>
          Read More
          </Link>
          
        </div>
        <div className={styles.imageSection}>
          <img
            src="/infranium-image.jpeg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
