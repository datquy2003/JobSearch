import React from 'react';
import styles from './Header.module.css';

const Header = ({ toggleTheme, theme }) => {
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
          
          
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Chuyển đổi theme"
          >
           
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button className={styles.btnLogin}>Đăng nhập</button>
          <button className={styles.btnRegister}>Đăng ký</button>
        </div>
      </div>
    </header>
  );
};

export default Header;