import React from "react";
import Image from "next/image";
import styles from "./Education.module.css";

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.education} data-aos="fade-up">
      <h2>Education</h2>

      <div className={styles.educationItem}>
        <div className={styles.educationContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/uga-logo.png"
              alt="University of Georgia logo"
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          <div className={styles.educationText}>
            <h3>University of Georgia, Franklin College of Arts & Sciences</h3>
            <p className={styles.location}>Athens, GA</p>
            <p className={styles.degree}>
              Bachelor of Science in Computer Science, Cum Laude
            </p>
            <p className={styles.dateGpa}>GPA: 3.65/4.00</p>
            <p className={styles.courses}>
              <strong>Courses:</strong> Systems Programming, Software
              Engineering, Web Programming, Computer Networks, Algorithms and
              Data Structures
            </p>
          </div>
        </div>
      </div>

      <div className={styles.educationItem}>
        <div className={styles.educationContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/gt-logo.png"
              alt="Georgia Tech logo"
              width={80}
              height={80}
              className={styles.logo}
            />
          </div>
          <div className={styles.educationText}>
            <h3>
              Georgia Institute of Technology, Daniel Guggenheim School of
              Aerospace Engineering
            </h3>
            <p className={styles.location}>Atlanta, GA</p>
            <p className={styles.degree}>
              Attended for Major in Aerospace Engineering (transferred to UGA)
            </p>
            <p className={styles.dateGpa}>GPA: 3.60/4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
