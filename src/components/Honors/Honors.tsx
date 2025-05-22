import React from "react";
import styles from "./Honors.module.css";

const Honors: React.FC = () => {
  return (
    <section id="honors-awards" className={styles.honors} data-aos="fade-up">
      <h2>Honors & Awards</h2>
      <ul>
        <li>
          <strong>Graduated Cum Laude</strong>
        </li>
        <li>
          <strong>Dean&apos;s List</strong>
        </li>
        <li>
          <strong>President&apos;s List</strong>
        </li>
        <li>
          <strong>Zell Miller Scholarship Recipient</strong>
        </li>
      </ul>
    </section>
  );
};

export default Honors;
