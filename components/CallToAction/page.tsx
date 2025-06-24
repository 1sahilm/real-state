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
          Your laboratory instruments should serve you, not the other way around. We’re happy to help you.
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