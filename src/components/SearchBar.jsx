import React from 'react';
import styles from './SearchBar.module.css'; // Import CSS module

const SearchBar = () => {
  return (
    <section className={styles.searchBanner}>
      <div className="container">
        <h1>Tìm kiếm công việc mơ ước của bạn</h1>
        <p>Hơn 100,000+ công việc đang chờ đợi</p>
        <form className={styles.searchForm}>
          <input type="tim_viec" placeholder="Tìm kiếm việc bạn đang cần ngay tại đây!" />
          <select>
            <option value="1">Tất cả địa điểm</option>
            <option value="2">TP Hà Nội</option>
            <option value="3">TP Huế</option>
            <option value="4">Quảng Ninh</option>
            <option value="5">Cao Bằng</option>
            <option value="6">Lạng Sơn</option>
            <option value="7">Lai Châu</option>
            <option value="8">Điện Biên</option>
            <option value="9">Sơn La</option>
            <option value="10">Thanh Hóa</option>
            <option value="11">Nghệ An</option>
            <option value="12">Hà Tĩnh</option>
            <option value="13">Tuyên Quang</option>
            <option value="14">Lào Cai</option>
            <option value="15">Thái Nguyên</option>
            <option value="16">Phú Thọ</option>
            <option value="17">Bắc Ninh</option>
            <option value="18">Hưng Yên</option>
            <option value="19">TP Hải Phòng</option>
            <option value="20">Ninh Bình</option>
            <option value="21">Quảng Trị</option>
            <option value="22">TP Đà Nẵng</option>
            <option value="23">Quảng Ngãi</option>
            <option value="24">Gia Lai</option>
            <option value="25">Khánh Hòa</option>
            <option value="26">Lâm Đồng</option>
            <option value="27">Đắk Lắk</option>
            <option value="28">TPHCM</option>
            <option value="29">Đồng Nai</option>
            <option value="30">Tây Ninh</option>
            <option value="31">TP Cần Thơ</option>
            <option value="32">Vĩnh Long</option>
            <option value="33">Đồng Tháp</option>
            <option value="34">Cà Mau</option>
            <option value="35">An Giang</option>
          </select>
          <button type="submit">Tìm kiếm</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;