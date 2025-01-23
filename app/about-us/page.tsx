import Image from 'next/image'
import React from 'react'
import styles from '../../styles/AboutSection.module.css'

const About = () => {
  return (
    <section className={styles.aboutSection}>
    <div className={styles.imageWrapper}>
      <img
        src="/path/to/your/image.jpg"
        alt="Architectural design"
        className={styles.backgroundImage}
      />
    </div>
    <div className={styles.textOverlay}>
      <h1>About INFRANIUM</h1>
    </div>
  </section>
  )
}

export default About
