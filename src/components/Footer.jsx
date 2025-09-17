import React from 'react';
import styles from './Footer.module.css'; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>JobSearch</h4>
            <p>Nền tảng kết nối nhà tuyển dụng và ứng viên hàng đầu Việt Nam.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Dành cho ứng viên</h4>
            <ul>
              <li><a href="#">Việc làm</a></li>
              <li><a href="#">Tạo CV</a></li>
              <li><a href="#">Công ty</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Dành cho nhà tuyển dụng</h4>
            <ul>
              <li><a href="#">Đăng tin tuyển dụng</a></li>
              <li><a href="#">Tìm kiếm hồ sơ</a></li>
              <li><a href="#">Dịch vụ</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Liên hệ</h4>
            <p>Email: contact@jobsearch.com</p>
            <p>Phone: (024) 123 4567</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 JobSearch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;