
"use client"
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import React from "react";
import Menu from "../Menu/Menu";
import ModelBox from "../ModelBox/page";

interface HeaderProp {
  headertheme?: boolean;
  isTrue?: boolean;
  isLogo?: boolean;
}

const Header = ({ headertheme , isTrue, isLogo }: HeaderProp) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const [isOpen, setIsOpen] = React.useState(false);
    
        const togglePopup = () => {
          setIsOpen(!isOpen);
        };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  

  React.useEffect(()=>{
    const buttonHover = document.querySelector("button");
    if (buttonHover) {
      buttonHover.addEventListener("mouseover",()=>{
        setIsMenuOpen(true);
      });
      
    } 
      document.addEventListener("click", (e) => {
        if (e.target !== buttonHover) {
          setIsMenuOpen(false);
        }
      }); 
      window.addEventListener("scroll",()=>{
        setIsMenuOpen(false);
      })



      


  },[])
   

  return (
    <>
 
    <header  

    className={`${styles.header}   ${
          headertheme ? styles.white : styles.black
        }  `}
    >


          {
            headertheme ? <>
            
            <header
      className={`${styles.header}   ${
        headertheme ? styles.white : styles.black
      }  `}
    >

      <div className={styles.logo}>
        <Link href="/">
         

{isLogo ? <> 
          <Image
            src={"/new-logo-image.png"}
            width={120}
            height={100}
            alt="logo" 
            />  
        </> : <>
        
        <Image
            src={"/logo-updated_processed.jpeg"}
            width={120}
            height={120}
            alt="logo" 
            />
        </> }
         
            </Link>
        </div>
      <nav className={styles.nav}>
        <ul className={isLogo ? styles.blackColor : styles.whiteColor}>
          <li >
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <a href="/vvie-villas-luxury-villas-for-sale-shimla">Vvie Villas</a>
          </li>
          <li>
            <a href="/faq">Faqs</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact-us">Get In Touch</a>
          </li>
        </ul>
      </nav>

      <div className={styles.buttonQuick}>
        <a href="#" onClick={togglePopup}>
          Quick Inquiry
        </a>
      </div>
    </header>
            </> : <>
            {isTrue && (
<button onClick={toggleMenu} className={styles.button}>
☰
</button>
    )}
   
    <Link href="/" data-cursor="pointer2" className={styles.logoLink}>
      <div className={styles.logoWrapper}>
        {/* <Image
          // src={logo1}
          src={"/logo-updated_processed.jpeg"}
          alt="Real Estate"
          width={100}
          height={100}
          className={`${styles.logoImage} ${styles.logoSmall} md:block`}
          priority
        /> */}
        {/* <Image
          // src={logo1}
          src={"/new-logo-2.svg"}
          alt="Real Estate"
          width={400}
          height={400}
          className={`${styles.logoImage} ${styles.logoSmall} md:block`}
          priority
        /> */}

        {/* <Image
          src={logo}
          alt="Real Estate"
          width={140}
          height={50}
          className={styles.logoImage}
          priority
        /> */}
      </div>
    </Link>
            
            </>
          }
   
    {isMenuOpen && <Menu />}
    {isTrue && (
   <div className={styles.buttonQuick} 
      
     >
        <a href="#" onClick={togglePopup}>
          Quick Inquiry
        </a>
      </div>
    ) }
  
  </header>
  <ModelBox 
      togglePopup={togglePopup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}

      />
  </>
  );
};

export default Header;
