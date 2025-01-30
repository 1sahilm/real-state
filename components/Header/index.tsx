import styles from "./header.module.css";

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
      <div className={styles.logo}>INFRANIUM</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Faqs</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Get In Touch</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
