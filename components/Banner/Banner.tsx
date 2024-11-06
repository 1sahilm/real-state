'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header/Header'; 
import styles from './Banner.module.css';

interface BannerItem {
  id: number;
  image: string;
  heading: string;
  description: string;
}

interface BannerProps {
  bannerData: BannerItem[];
}

const Banner: React.FC<BannerProps> = ({ bannerData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBannerClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  return (
    <>
      <Header />
      <section className={styles.bannerSection} onClick={handleBannerClick}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 3, x: -300 }}
            transition={{ duration: 1.1 }}
            className={styles.bannerImageContainer}
          >
            <Image
              src={require(`../../assets/Banner/${bannerData[currentIndex].image}`)}
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
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
