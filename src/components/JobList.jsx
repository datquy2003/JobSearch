import React from 'react';
import JobCard from './JobCard';
import styles from './JobList.module.css';

import logoFPT from '../assets/company-logo-1.png';
import logoVNG from '../assets/company-logo-2.png';
import logoTiki from '../assets/company-logo-3.png';
import logoVT from '../assets/company-logo-4.png';
import logoVNPT from '../assets/company-logo-5.png';


//logos 

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer (ReactJS)',
    company: 'FPT Software',
    location: 'Hà Nội',
    salary: 'Thương lượng',
    tags: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Agile'],

    logo: logoFPT 
  },

  {
    id: 2,
    title: '3D Game Developer',
    company: 'VNG Corporation',
    location: 'Hồ Chí Minh',
    salary: '$2000$ - $3000',
    tags: ['Python', 'C++', 'Unity', 'Unreal Engine3', 'Unreal Engine4'],
    logo: logoVNG
  },
  
  {
    id: 3,
    title: 'Internship Frontend Developer',
    company: 'Viettel',
    location: 'Hà Nội',
    salary: 'Up to $500-1000$',
    tags: ['HTML5', 'CSS3', 'TypeScript', 'ReactJS'],
    logo: logoVT
  },

  {
    id: 4,
    title: 'Internship Backend Developer',
    company: 'Viettel',
    location: 'Hà Nội',
    salary: 'Up to $500-1000$',
    tags: ['Python', 'Java', 'NodeJS', 'SQL , NoSQL'],
    logo: logoVT
  },

 {
    id: 5,
    title: 'Junior Backend Developer (Node.js/Java)',
    company: 'VNPT',
    location: 'Hồ Chí Minh',
    salary: '$1500 - $3000',
    tags: ['Node.js', 'Java', 'Microservices', 'AWS', 'SQL'],
    logo: logoVNPT
  },

  {
    id: 6,
    title: 'Fullstack Engineer (MERN Stack)',
    company: 'Tiki',
    location: 'Hồ Chí Minh',
    salary: 'Up to $2500',
    tags: ['MongoDB', 'Express', 'ReactJS', 'Node.js'],
    logo: logoTiki
  },


//jobs
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