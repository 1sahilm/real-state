import React, { useState } from 'react';
import Link from 'next/link';
import Menu from '../Menu/Menu';
import styles from './Header.module.css'; 
import logo1 from "../../assets/Logo/output-onlinepngtools 1.png"
import logo from "../../assets/Logo/output-onlinepngtools 2.png"
import Image from 'next/image';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}> 
      <button 
        onClick={toggleMenu}
        className={styles.button} 
      >
        ☰
      </button>
      <Link href="" data-cursor="pointer2" className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                      <Image src={logo1} alt="Real Estate" width={40} height={50} className={`${styles.logoImage} ${styles.logoSmall}`} />
                      <Image src={logo} alt="Real Estate" width={140} height={50} className={styles.logoImage} />
                    </div>
                  </Link>
      <div className={styles.linkContainer}> 
        <Link href="#" className={styles.link}>Contact Us</Link> 
 
        <Link href="#" className={styles.link}>About Us</Link> 
      </div>
      {isMenuOpen && <Menu />}
    </header>
  );
};

export default Header;
