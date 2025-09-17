import React from 'react';
import styles from './Header.module.css'; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <a href="/" className={styles.logo}>Job<span>Search</span></a>
        <nav className={styles.navigation}>
          <a href="#" className={styles.active}>Tìm việc làm</a>
          <a href="#">Công ty</a>
          <a href="#">CV</a>
          <a href="#">Blog</a>
        </nav>
        <div className={styles.authButtons}>
          <button className={styles.btnLogin}>Đăng nhập</button>
          <button className={styles.btnRegister}>Đăng ký</button>
        </div>
      </div>
    </header>
  );
};

export default Header;