import React from 'react';
import styles from './FeaturedCategories.module.css';

// Dữ liệu mẫu cho các ngành nghề nổi bật
const categories = [
  { id: 1, name: 'Frontend', count: '178 việc làm' },
  { id: 2, name: 'Backend', count: '210 việc làm' },
  { id: 3, name: 'Fullstack', count: '150 việc làm' },
  { id: 4, name: 'Mobile (iOS/Android)', count: '95 việc làm' },
  { id: 5, name: 'Data Scientist', count: '80 việc làm' },
  { id: 6, name: 'DevOps Engineer', count: '75 việc làm' },
  { id: 7, name: 'QA / QC Engineer', count: '110 việc làm' },
  { id: 8, name: 'Business Analyst', count: '90 việc làm' },
];

const FeaturedCategories = () => {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Ngành Nghề Nổi Bật</h2>
          <p>Chọn con đường sự nghiệp phù hợp nhất với bạn</p>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <a href="#" key={category.id} className={styles.categoryCard}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryCount}>{category.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;