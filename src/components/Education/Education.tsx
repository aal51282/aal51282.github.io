import React from 'react';
import styles from './Education.module.css';

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.education} data-aos="fade-up">
      <h2>Education</h2>
      <p>University of Georgia, Franklin College of Arts & Sciences, Athens, GA</p>
      <p>Bachelor of Science in Computer Science, May 2025</p>
      <p>GPA: 3.65/4.00</p>
      <p>
        Courses: Systems Programming, Software Engineering, Web Programming, Computer Networks, Algorithms and Data Structures
      </p>
    </section>
  );
};

export default Education;

