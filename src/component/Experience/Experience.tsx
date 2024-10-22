import React from 'react';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="leadership-experience" className={styles.experience} data-aos="fade-up">
      <h2>Leadership & Experience</h2>
      <ul>
        <li>
          <strong>Tru Remodeling, INC</strong>, Lawrenceville, GA<br />
          <em>08/2019 - Present</em>
        </li>
        <li>
          <strong>Listo, UGA | Mentor</strong><br />
          <em>09/2023 - Present</em>
        </li>
      </ul>
    </section>
  );
};

export default Experience;

