import React from 'react';
import styles from './Honors.module.css';

const Honors: React.FC = () => {
  return (
    <section id="honors-awards" className={styles.honors} data-aos="fade-up">
      <h2>Honors & Awards</h2>
      <ul>
        <li>
          <strong>Dean's List</strong> - Fall 2023
        </li>
        <li>
          <strong>Zell Miller Scholarship Recipient</strong> - Fall 2023
        </li>
      </ul>
    </section>
  );
};

export default Honors;

