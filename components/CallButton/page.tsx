'use client';

import Image from "next/image";
import React from "react";
import styles from "./CallButton.module.scss";

const CallButton = () => {
  return (
    <a href="tel:+91 8471002002" className={styles.callButton} aria-label="Call Us">
      <Image src="/phone-image.png" alt="Call Icon" width={48} height={48} />
    </a>
  );
};

export default CallButton;
