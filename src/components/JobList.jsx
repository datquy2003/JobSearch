import React from 'react';
import JobCard from './JobCard';
import styles from './JobList.module.css';

// 1. Import các hình ảnh từ thư mục assets
import logoFPT from '../assets/company-logo-1.png';
import logoVNG from '../assets/company-logo-2.png';
import logoTiki from '../assets/company-logo-3.png';
// Thêm các logo khác nếu có...

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer (ReactJS)',
    company: 'FPT Software',
    location: 'Hà Nội',
    salary: 'Thương lượng',
    tags: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Agile'],
    // 2. Sử dụng biến đã import thay vì chuỗi đường dẫn tĩnh
    logo: logoFPT 
  },
  {
    id: 2,
    title: 'Backend Developer (Node.js/Java)',
    company: 'VNG Corporation',
    location: 'Hồ Chí Minh',
    salary: '$1500 - $3000',
    tags: ['Node.js', 'Java', 'Microservices', 'AWS', 'SQL'],
    logo: logoVNG
  },
  {
    id: 3,
    title: 'Fullstack Engineer (MERN Stack)',
    company: 'Tiki',
    location: 'Hồ Chí Minh',
    salary: 'Up to $2500',
    tags: ['MongoDB', 'Express', 'ReactJS', 'Node.js'],
    logo: logoTiki
  },
  // Giả sử bạn có thêm các job khác, hãy import và gán tương tự
];

const JobList = () => {
  return (
    <section className="container">
        <div className={styles.jobListHeader}>
            <h2>Việc Làm IT Hàng Đầu</h2>
            <p>Khám phá các cơ hội việc làm tốt nhất trong ngành Công nghệ thông tin</p>
        </div>
      <div className={styles.jobList}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobList;