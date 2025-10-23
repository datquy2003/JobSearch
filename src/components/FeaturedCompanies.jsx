import React from 'react';
import styles from './FeaturedCompanies.module.css';
import logoFPT from '../assets/company-logo-1.png';
import logoVNG from '../assets/company-logo-2.png';
import logoTiki from '../assets/company-logo-3.png';
import logoVT from '../assets/company-logo-4.png';
import logoVNPT from '../assets/company-logo-5.png';

const companies = [
  { id: 1, name: 'Grab', logo: logoFPT },
  { id: 2, name: 'Momo', logo: logoVNG },
  { id: 3, name: 'Shopee', logo: logoTiki },
  { id: 4, name: 'TopCV', logo: logoVT },
  { id: 5, name: 'Viettel', logo: logoVNPT },
];

const FeaturedCompanies = () => {
  return (
    <section className={styles.featuredCompanies}>
      <div className="container">
        <div className={styles.header}>
          <h2>Đối Tác Nổi Bật</h2>
          <p>Những công ty hàng đầu đang tuyển dụng trên JobSearch</p>
        </div>
        <div className={styles.companyGrid}>
          {companies.map(company => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.logo} alt={`${company.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;