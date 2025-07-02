"use client";
import { useState } from "react";
import ModelBox from "../ModelBox/page";
import Style from "./style.module.scss"
const CallToAction = ()=>{

     const [isOpen, setIsOpen] = useState(false);
    
        const togglePopup = () => {
          setIsOpen(!isOpen);
        };
    return(
        <>
 

 <div className={Style.contactWrapper}>
      <div className={Style.leftContent}>
        <h2>Let’s <span>Get In Touch.</span></h2>
        <p>
          Feel free to fill out the form below, and one of our luxury property specialists will reach out to you shortly. Your dream home in the hills awaits!
        </p>
        <div className={Style.buttons}>
          <button className={Style.ctaButton} onClick={togglePopup}>Contact Us</button>
          {/* <button className={Style.ctaButton}>Test Your Samples</button> */}
        </div>
      </div>
      {/* <div className={Style.rightRings}></div> */}
    </div>
         <ModelBox
      togglePopup={togglePopup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}

      />
        </>
    )
}
export default CallToAction;