import React from 'react';
import JobCard from './JobCard';
import styles from './JobList.module.css'; // Import CSS module

const jobs = [
    // ... (dữ liệu jobs giữ nguyên như cũ)
  {
    id: 1,
    title: 'Senior Frontend Developer (ReactJS)',
    company: 'FPT Software',
    location: 'Hà Nội',
    salary: 'Thương lượng',
    tags: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Agile'],
    logo: './src/assets/company-logo-1.png'
  },
  {
    id: 2,
    title: 'Backend Developer (Node.js/Java)',
    company: 'VNG Corporation',
    location: 'Hồ Chí Minh',
    salary: '$1500 - $3000',
    tags: ['Node.js', 'Java', 'Microservices', 'AWS', 'SQL'],
    logo: './src/assets/company-logo-2.png'
  },
  {
    id: 3,
    title: 'Fullstack Engineer (MERN Stack)',
    company: 'Tiki',
    location: 'Hồ Chí Minh',
    salary: 'Up to $2500',
    tags: ['MongoDB', 'Express', 'ReactJS', 'Node.js'],
    logo: './src/assets/company-logo-3.png'
  },
    // ... (các jobs còn lại)
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