
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

interface HeaderProp {
  headertheme?: boolean;
}

const Header = ({ headertheme }: HeaderProp) => {
  return (
    <header
      className={`${styles.header}   ${
        headertheme ? styles.black : styles.white
      }  `}
    >

      <div className={styles.logo}>
        <Link href="/">
       
        {headertheme ? <> 
          <Image
            src={"/new-logo.png"}
            width={120}
            height={120}
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
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
          <li>
            <a href="#">Faqs</a>
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
  );
};

export default Header;
