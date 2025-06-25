'use client';

import React, { useState } from 'react';
import styles from './QuickInquiryButton.module.scss';
import ModelBox from '../ModelBox/page';

const QuickInquiryButton = () => {
   const [isOpen, setIsOpen] = useState(false);
  
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>
    <a   className={styles.quickInquiry} onClick={togglePopup}>
      Quick Inquiry
    </a>
    <ModelBox 
      togglePopup={togglePopup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}

      />
    </>
  );
};

export default QuickInquiryButton;
