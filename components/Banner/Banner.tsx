'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header/Header'; 
import styles from './Banner.module.css';
// import DroneVideo from '../../assets/banner-video/videos.mov';

// interface BannerItem {
//   id: number;
//   image: string;
//   heading: string;
//   description: string;
//   commingSoon?: boolean;
// }

// interface BannerProps {
//   bannerData: BannerItem[];
//   commingSoon?: boolean;
// }

interface BannerProposData {
  commingSoon?: boolean;

}

const Banner: React.FC<any> = ({ commingSoon }:BannerProposData) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleBannerClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  // };

  const handleBannerDotsClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => {
    event.stopPropagation()
    setCurrentIndex(index)
  }

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
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <>
      <Header isTrue={false} />
      <section className={styles.bannerSection} >
        {commingSoon && (
          <>
           <div className={styles.commingText}>

<h2>Comming Soon</h2>
  </div>
          </>
        )}
       
      <video
        // ref={videoRef}
        className={styles.bannerVideo}
        muted
        autoPlay
        loop
        playsInline
      >
        {/* <source src={"../../assets/banner-video/videos.mov"} type="video/mp4" /> */}
        <source src="/banner-video/Vvie-Villas-Website.mp4" type="video/mp4" />
  {/* <source src="../../assets/banner-video/videos.mp4" type="video/quicktime" /> */}
        Your browser does not support the video tag.
      </video>

        {/* baneer section coment out by client  */}
        {/* <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 3, x: -300 }}
            transition={{ duration: 1.1 }}
            className={styles.bannerImageContainer}
          >
            <Image
              src={require(`../../assets/infranium-images/${bannerData[currentIndex].image}`)}
              alt={`Banner image ${bannerData[currentIndex].id}`}
              layout="fill"
              objectFit="cover"
              priority={true}

              
            />
            <div className={styles.bannerOverlay}>
              <div className={styles.bannerContent}>
                <div className={styles.logoContainer}>
                
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className={styles.bannerText}
                >
                  <h2 className={styles.bannerHeading}>{bannerData[currentIndex].heading}</h2>
                  <p className={styles.bannerDescription}>{bannerData[currentIndex].description}</p>
                </motion.div>
                <div></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className={styles.bannerDots}>
          {bannerData.map((_, index) => (
            <motion.span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={(e)=>handleBannerDotsClick(e,index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Banner;
