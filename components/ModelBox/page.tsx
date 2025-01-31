import React, { useState } from 'react'
import styles from "./PopupForm.module.scss";


interface ModelBoxProps {
    togglePopup: () => void;
    isOpen: boolean;
    }

const ModelBox = ({togglePopup , isOpen}:ModelBoxProps) => {
    
  return (
    <div> 
    {isOpen && (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <button className={styles.closeButton} onClick={togglePopup}>×</button>
          <h2>Contact Us</h2>
          <form className={styles.form}>
            <label>Name:</label>
            <input type="text" name="name" required />
            
            <label>Email:</label>
            <input type="email" name="email" required />
            
            <label>Mobile:</label>
            <input type="tel" name="mobile" required />
            
            <label>Message:</label>
            <textarea name="message" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
  </div>
  )
}

export default ModelBox
