import React, { useState } from "react";
import Link from "next/link";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
import logo1 from "../../assets/Logo/output-onlinepngtools 1.png";
import logo from "../../assets/Logo/output-onlinepngtools 2.png";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  },[])


  return (
    <header className={styles.header}>
      <button onClick={toggleMenu} className={styles.button}>
        ☰
      </button>
      <Link href="/" data-cursor="pointer2" className={styles.logoLink}>
        <div className={styles.logoWrapper}>
          <Image
            src={logo1}
            alt="Real Estate"
            width={40}
            height={50}
            className={`${styles.logoImage} ${styles.logoSmall} hidden md:block`}
            priority
          />

          <Image
            src={logo}
            alt="Real Estate"
            width={140}
            height={50}
            className={styles.logoImage}
            priority
          />
        </div>
      </Link>
      {isMenuOpen && <Menu />}
    </header>
  );
};

export default Header;
