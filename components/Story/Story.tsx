'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Styles from './story.module.css'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Story: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div 
      className={Styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={Styles.title}>What we offer to our customers?</h2>
      <p className={Styles.description}>We make sure to provide what best for our customers</p>
      
      <div className={Styles.offer}>
        <div className={Styles.box}>
          <Image src={require("../../assets/Banner/pexels-alex-staudinger-829197-1732414.jpg")} style={{width:"100px", height:"100px", objectFit:'contain'}}/>
          <h3 className={Styles.boxTitle}>Rent & buy</h3>
          <p className={Styles.boxDescription}>We buy & Rent your home. We find your desire home to invest or buy.</p>
      
        </div>
        
        <div className={Styles.box}>
          <Image src={require("../../assets/Banner/pexels-pixabay-262048.jpg")} style={{width:"100px", height:"100px", objectFit:'contain'}}/>
          <h3 className={Styles.boxTitle}>100% Guarantee</h3>
          <p className={Styles.boxDescription}>We Guarantee the house we sell or buy for you.</p>
        </div>
        
        <div className={Styles.box}>
          <Image src={require("../../assets/Banner/unsplash_2gDwlIim3Uw.png")} style={{width:"100px", height:"100px", objectFit:'contain'}}/>
          <h3 className={Styles.boxTitle}>Exclusive Sale</h3>
          <p className={Styles.boxDescription}>We have an offer every week. Follow our Instagram to not miss those offers.</p>
        </div>
      </div>
    </div>
  );
};

export default Story;