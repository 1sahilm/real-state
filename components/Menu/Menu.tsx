import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";

import homeIcon from "../../assets/Menu/home 1.png";
import aboutIcon from "../../assets/Menu/info-button 1.png";
import projectsIcon from "../../assets/Menu/project 1.png";
import faqIcon from "../../assets/Menu/help 1.png";
import blogIcon from "../../assets/Menu/blog 1.png";
import contactIcon from "../../assets/Menu/call 1.png";

const Menu: React.FC = () => {
  return (
    <nav className={`${styles.menu} dropdown-style`}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image src={homeIcon} alt="Home" width={20} height={20} />
            </span>{" "}
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image src={aboutIcon} alt="About" width={20} height={20} />
            </span>{" "}
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image src={projectsIcon} alt="Projects" width={20} height={20} />
            </span>{" "}
            Projects
          </Link>
        </li>
        <li>
          <Link href="/faq" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image src={faqIcon} alt="FAQ" width={20} height={20} />
            </span>{" "}
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image src={blogIcon} alt="Blog" width={20} height={20} />
            </span>{" "}
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.menuItem}>
            <span className={styles.icon}>
              <Image
                src={contactIcon}
                alt="Get in touch"
                width={20}
                height={20}
              />
            </span>{" "}
            Get in touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
