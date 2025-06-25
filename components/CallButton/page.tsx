'use client';

import React from "react";
import styles from "./CallButton.module.scss";

const CallButton = () => {
  return (
    <a href="tel:+91 8471002002" className={styles.callButton} aria-label="Call Us">
      <img src="/phone-image.png" alt="Call Icon" />
    </a>
  );
};

export default CallButton;
