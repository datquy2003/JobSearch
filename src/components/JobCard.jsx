import React from 'react';
import styles from './JobCard.module.css'; // Import CSS module

const JobCard = ({ job }) => {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobCardHeader}>
        <img src={job.logo} alt={`${job.company} logo`} className={styles.companyLogo} />
        <div className={styles.jobInfo}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <p className={styles.companyName}>{job.company}</p>
        </div>
      </div>
      <div className={styles.jobCardBody}>
        <p className={styles.jobSalary}>{job.salary}</p>
        <div className={styles.jobTags}>
          {job.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.jobCardFooter}>
        <span className={styles.jobLocation}>{job.location}</span>
        <a href="#" className={styles.applyButton}>Ứng tuyển</a>
      </div>
    </div>
  );
};

export default JobCard;