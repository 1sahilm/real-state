"use client";
import React, { useState } from "react";
import styles from "../Banner/Banner.module.css";
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
            src="/banner-video/new-video.mp4"
            type="video/mp4"
          />
          {/* <source src="../../assets/banner-video/videos.mp4" type="video/quicktime" /> */}
          Your browser does not support the video tag.
        </video>
      

<p className={styles.bannerHs}>HPRERASHI2025125/P</p>
 

      </section>
     
    </>
  );
};

export default Banner;
