
"use client"
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import React from "react";
import Menu from "../Menu/Menu";

interface HeaderProp {
  headertheme?: boolean;
  isTrue?: boolean;
  isLogo?: boolean;
}

const Header = ({ headertheme , isTrue, isLogo }: HeaderProp) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
        
          


{/* <Image
            src={"/new-logo.png"}
            width={120}
            height={120}
            alt="logo" 
            />  black logo*/}

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
            />dscfsd
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
            <a href="/project">Vvie Villas</a>
          </li>
          <li>
            <a href="/faq">Faqs</a>
          </li>
          {/* <li>
            <a href="#">Blog</a>
          </li> */}
          <li>
            <a href="/contact-us">Get In Touch</a>
          </li>
        </ul>
      </nav>
    </header>
            </> : <>
            {isTrue && (
<button onClick={toggleMenu} className={styles.button}>
☰
</button>
    )}
   
    <Link href="/" data-cursor="pointer2" className={styles.logoLink}>
      <div className={styles.logoWrapper}>
        <Image
          // src={logo1}
          src={"/logo-updated_processed.jpeg"}
          alt="Real Estate"
          width={100}
          height={100}
          className={`${styles.logoImage} ${styles.logoSmall} md:block`}
          priority
        />

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
  </header>
  </>
  );
};

export default Header;
