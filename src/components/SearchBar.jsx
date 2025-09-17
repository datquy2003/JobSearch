import React from 'react';
import styles from './SearchBar.module.css'; // Import CSS module

const SearchBar = () => {
  return (
    <section className={styles.searchBanner}>
      <div className="container">
        <h1>Tìm kiếm công việc mơ ước của bạn</h1>
        <p>Hơn 100,000+ công việc đang chờ đợi</p>
        <form className={styles.searchForm}>
          <input type="text" placeholder="Chức danh, Kỹ năng, Tên công ty" />
          <select>
            <option>Tất cả địa điểm</option>
            <option>Hà Nội</option>
            <option>Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
          </select>
          <button type="submit">Tìm kiếm</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;