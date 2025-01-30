import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutSection.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";

const About = () => {
  return (
    <>
      <Header />
      <section className={styles.aboutSection}>
        <div className={styles.imageWrapper}>
          <img
            src="/about-us/baneer-about.jpg"
            alt="Architectural design"
            className={styles.backgroundImage}
          />
        </div>
        <div className={styles.textOverlay}>
          <h1>About INFRANIUM</h1>
        </div>
      </section>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Architects and other engineers meeting to improve the learning and
          collaboration
          <br /> between one another.
        </h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>

        <div className={styles.section}>
          <div className={styles.textBlock}>
            <h2>Urban Exteriors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className={`${styles.imageBlock} ${styles.imageBlockRight}`}>
            <img src="/about-us/second-image.jpg" alt="Urban Exterior" />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.imageBlock}>
            <img src="/about-us/second-image.jpg" alt="Urban Exterior" />
          </div>
          <div className={styles.textBlock}>
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        {/* third secton  */}
      </div>

      <div className={styles.thirdsection}>
        <div className={styles.container}>
          <h1>At a glance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
          </p>
        </div>
      </div>

      <div className={styles.teamsection}>
        <div className={styles.teamsinner}>
          <div className={styles.teammember}>
            <img src="h1-team-img-01.jpg" alt="Member 1" />
            <div className={styles.info}>
              <h3>Your Name</h3>
              <p>Designation</p>
            </div>
          </div>
          <div className={styles.teammember}>
            <img src="h1-team-img-02.jpg" alt="Member 2" />
            <div className={styles.info}>
              <h3>Your Name</h3>
              <p>Designation</p>
            </div>
          </div>

          <div className={styles.teammemberjoin}>
            <p>
              <a href="#">Join our team</a>
            </p>
          </div>
        </div>
        <div className={`${styles.teamsinner} ${styles.teamsinner2}`}>
          <div className={styles.teammember}>
            <img src="h1-team-img-04.jpg" alt="Member 4" />
            <div className={styles.info}>
              <h3>Your Name</h3>
              <p>Designation</p>
            </div>
          </div>
          <div className={styles.teammember}>
            <img src="h1-team-img-01.jpg" alt="Member 5" />
            <div className={styles.info}>
              <h3>Your Name</h3>
              <p>Designation</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
