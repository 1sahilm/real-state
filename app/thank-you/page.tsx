import Footer from '@/components/Footer/pages'
import Header from '@/components/Header'
import React from 'react'
import styles from "./thanks.module.scss"

const ThankYou = () => {
  return (
    <>
    <div className="thanksUi">
    <div className={styles.desktopHeader}>
    <Header headertheme={true} isLogo={true} />
    </div>
    <div className={styles.mobileHeader}>
    <Header isTrue={true} headertheme={false}  />
    </div>
    <section className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
       
         <div className={styles.textOverlay}>
          <h1>Thank You</h1>
        </div>
      </div> 
    </section> 
    <div className={styles.container}>
        <h1 className={styles.heading}>
        Thanks for using our contact form!
        </h1>
        <p className={styles.paragrapgh}>
        We've received your message and will get back to you ASAP.
        </p>
         

       
      </div>
    <Footer />
    </div>
    </>
  )
}

export default ThankYou
