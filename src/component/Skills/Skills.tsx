import React from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills} data-aos="fade-up">
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        <div>
          <h3>Programming Languages</h3>
          <ul>
            <li>Java, C, C++, Python, SQL, MATLAB, JavaScript, HTML, CSS, Assembly</li>
          </ul>
        </div>
        <div>
          <h3>Frameworks/Libraries</h3>
          <ul>
            <li>React.js, Node.js, Express.js, Tailwind CSS, Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3>Databases</h3>
          <ul>
            <li>MySQL, MongoDB, SQLite, PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3>Technologies</h3>
          <ul>
            <li>Git, Maven, UNIX, RESTful APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

