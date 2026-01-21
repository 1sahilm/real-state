"use client";
import React, { useState } from "react";
import styles from "../Banner/Banner.module.css";
import Image from "next/image";
interface BannerProposData {
  commingSoon?: boolean;
}

const Banner: React.FC<any> = ({ commingSoon }: BannerProposData) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleBannerClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  // };

  const handleBannerDotsClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    setCurrentIndex(index);
  };

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video && video.currentTime >= 88) {
        video.pause(); // Stop the video at 1:28
        video.currentTime = 60; // Reset to 1:00 (optional if you want it to loop within the segment)
      }
    };

    if (video) {
      video.currentTime = 60; // Start at 1:00
      video.play(); // Autoplay after seeking
      video.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.bannerSection}>

  <Image
          // src={logo1}
          src={"/new-logo-2.svg"}
          alt="Real Estate"
          width={400}
          height={400}
          className={`${styles.logoImage}  md:block`}
          priority
          style={{
            color: 'transparent',
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50% , -50%)'
          }}
        />


        <video
          // ref={videoRef}
          className={styles.bannerVideo}
          muted
          autoPlay
          loop
          playsInline
        >
          {/* <source src={"../../assets/banner-video/videos.mov"} type="video/mp4" /> */}
          <source
            src="/banner-video/Infranium-Website.mp4"
            type="video/mp4"
          />
          {/* <source src="../../assets/banner-video/videos.mp4" type="video/quicktime" /> */}
          Your browser does not support the video tag.
        </video>
      

{/* <p className={styles.bannerHs}>HPRERASHI2025125/P</p> */}
 

      </section>
     <div className={styles.marquee}> <p className={styles.disclaimemodile}>Disclaimer: amã branded Vvie villas (‘Villas’), located at Seung village, Naldhera golf hills, PO Durgapur,
Shimla (HP), are not owned, developed, marketed or sold by Ideal Ice Limited or its affiliates
(“Ideal Ice”). The Villas are independently developed, marketed, and sold by Mr. Rohit Puri
and Kushaan Puri (“the Developer”) who hold a limited license from Ideal Ice, to use the
brand name ‘amã’ (“Brand”) with the Villas during the term of the operating agreement
entered into between the Developer and Ideal Ice. In case of termination/revocation/expiry
of the operating agreement, the Villas and the project will no longer be associated with
Brand and the Developer will cease to have the right to use any Ideal Ice brandmarks
including Brand.
Ideal Ice does not provide any assurances or guarantees regarding the residences, the
overall project, construction quality, financial performance, or associated costs. Ideal Ice is
not responsible for the Developer’s marketing materials, promotional activities, or sales-
related representations. Ideal Ice has not verified or confirmed the accuracy of any
statements, representations, or information presented in this material. The Developer and
its affiliates are independent entities and are not agents or representatives of Ideal Ice. They
do not have any authority to make commitments or representations on behalf of Ideal Ice.</p>
</div>
    </>
  );
};

export default Banner;
