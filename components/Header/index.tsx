 
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>INFRANIUM</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Faqs</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Get In Touch</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
