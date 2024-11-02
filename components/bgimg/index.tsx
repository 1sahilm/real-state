// 'use client'
// import React, { useEffect, useRef } from "react";
// import styles from "./Banner.module.css"; 

// const Banner = () => {
//   const text1Ref = useRef<HTMLHeadingElement>(null);
//   const text2Ref = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (text1Ref.current && text2Ref.current) {
//         text1Ref.current.style.transform = `translateX(${-scrollPosition}px)`;
//         text2Ref.current.style.transform = `translateX(${scrollPosition}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={styles.bannerContainer}>
//       <div className={`${styles.scrollSection} ${styles.first}`}>
//         <div className={styles.lineTextScroll}></div>
//         <h2 ref={text1Ref} className={styles.scrollText}>
//           California, USA
//         </h2>
//       </div>

//       <div className={`${styles.scrollSection} ${styles.second}`}>
//         <h2 ref={text2Ref} className={styles.scrollText}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Banner;
