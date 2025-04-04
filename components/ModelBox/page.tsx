"use client";
import React, { useState } from 'react'
import styles from "./PopupForm.module.scss";
import axios from 'axios';
import Image from 'next/image';


interface ModelBoxProps {
    togglePopup: () => void;
    isOpen: boolean;
    item?: any;
    setIsOpen?: any;
    currentImage?: any;
    }

const ModelBox = ({togglePopup , isOpen , item , setIsOpen , currentImage}:ModelBoxProps) => {
  const [loader, setLoader] = useState(false);
  const [mailResponse, setMailResponse] = useState(false);
  
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
  });

  console.log("inputValue", { inputValue });

  const handleSendInquiry = async () => {
    const nesteddata = {
      firstName: inputValue?.firstName,
      lastName: inputValue?.lastName,
      email: inputValue?.email,
      phone: inputValue?.mobile,
      description: inputValue?.description,
    };

    try {
      setLoader(true);
     

      const emailRes = await axios.post( `${process.env.NEXT_BASE_URL}/api/sendemail`, {
        firstName: inputValue?.firstName,
        lastName: inputValue?.lastName,
        email: inputValue?.email,
        message: inputValue?.description,
        phone: inputValue?.mobile,
        work_experience: inputValue?.description,
      });
      console.log("emailRes", emailRes);
 
      if (emailRes) {
        setInputValue({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          description: "",
        });
        setMailResponse(true)
        setLoader(false);
        setIsOpen(false);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 100);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCLose = () => {
    setIsOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  return (
    <div> 
    {isOpen && (
      <div className={styles.popupOverlay}>
        <div className={styles.popupContent}>
          <button className={styles.closeButton} onClick={handleCLose}>×</button>
          <h2>Contact Us</h2>
          <span className={styles.form}  >
            <label>Name:</label>
            <input type="text" name="name" required 
             value={inputValue.firstName}
             onChange={(e) =>
               setInputValue({
                 ...inputValue,
                 firstName: e.target.value,
               })
             }
            />
            
            <label>Email:</label>
            <input type="email" name="email" required
            value={inputValue.email}
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
            />
            
            <label>Mobile:</label>
            <input type="tel" name="mobile" required 
            value={inputValue.mobile}
            onChange={(e) =>
              setInputValue({ ...inputValue, mobile: e.target.value })
            }
            />
            
            <label>Message:</label>
            <textarea name="message" required 
             value={inputValue.description}
             onChange={(e: any) =>
               setInputValue({
                 ...inputValue,
                 description: e.target.value,
               })
             }
            ></textarea>
            {
              loader ? 
               <button type="submit">Loading ....</button>
              
              :             <button type="submit" onClick={handleSendInquiry}>Submit</button>

            }
          </span>
        </div>
      </div>
    )}
  {mailResponse && (
    <>
     {currentImage && isOpen === false && (
      <>
    <div className={styles.popupOverlay}>
        {/* <div className={styles.popupContent}> */}
          <button className={styles.closeButton} onClick={handleCLose}>×</button> 
          <div>
        <Image src={currentImage} alt="image" width={800} height={800} />
        <button onClick={handleCLose}>Close</button>
      </div>
        {/* </div> */}
      </div>



      
      </>
    )}
    </>
  )}
   
    
  </div>
  )
}

export default ModelBox
