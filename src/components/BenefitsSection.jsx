import React from 'react';
import styles from './BenefitsSection.module.css';

const benefits = [
  {
    id: 1,
    icon: '🔍',
    title: 'Tìm kiếm dễ dàng',
    description: 'Hàng ngàn công việc được cập nhật mỗi ngày, giao diện trực quan giúp bạn tìm việc nhanh chóng.',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Hồ sơ chuyên nghiệp',
    description: 'Công cụ tạo CV online của chúng tôi giúp bạn gây ấn tượng với nhà tuyển dụng chỉ trong vài phút.',
  },
  {
    id: 3,
    icon: '🏢',
    title: 'Công ty hàng đầu',
    description: 'Kết nối trực tiếp với các tập đoàn công nghệ lớn và các công ty hàng đầu tại Việt Nam.',
  },
];

const BenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2>Vì Sao Chọn JobSearch?</h2>
          <p>Nền tảng của chúng tôi mang lại những giá trị vượt trội</p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map(benefit => (
            <div key={benefit.id} className={styles.benefitCard}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;