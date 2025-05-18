import React from "react";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  return (
    <section
      id="leadership-experience"
      className={styles.experience}
      data-aos="fade-up"
    >
      <h2>Leadership & Experience</h2>

      <div className={styles.experienceItem}>
        <div className={styles.experienceHeader}>
          <h3>
            TRU Remodeling, INC.
            <a
              href="https://truremodeling.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              truremodeling.com
            </a>
          </h3>
          <p className={styles.jobLocation}>Lawrenceville, GA</p>
          <p className={styles.jobTitle}>IT Support Specialist</p>
          <p className={styles.jobPeriod}>August 2019 – May 2025</p>
        </div>
        <ul className={styles.responsibilities}>
          <li>
            Designed, developed, and launched the official company website,
            establishing an online presence and improving client accessibility.
          </li>
          <li>
            Successfully installed, assessed, and configured over 50 laptops and
            desktops, and 4 key company servers, ensuring operational readiness
            for all new and existing employees.
          </li>
          <li>
            Managed computer setups and email account administration for a
            workforce of approximately 30 employees.
          </li>
          <li>
            Managed the creation and administration of over 120 work contracts,
            ensuring compliance and clear terms for all parties.
          </li>
        </ul>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.experienceHeader}>
          <h3>
            ULEAD Athens Website Redesign
            <a
              href="https://www.uleadathens.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.companyLink}
            >
              uleadathens.org
            </a>
          </h3>
          <p className={styles.jobLocation}>Athens, GA</p>
          <p className={styles.jobTitle}>Full-Stack Developer</p>
          <p className={styles.jobPeriod}>March 2025 – May 2025</p>
        </div>
        <ul className={styles.responsibilities}>
          <li>
            Led the redesign of ULEAD Athens&apos; outdated website to enhance
            user experience and modernize their online presence.
          </li>
          <li>
            Initially developed a dynamic proof-of-concept website utilizing
            Next.js, TypeScript, and modern UI principles.
          </li>
          <li>
            Successfully transitioned and implemented the new design on the
            Squarespace platform for client self-management.
          </li>
        </ul>
      </div>

      <div className={styles.experienceItem}>
        <div className={styles.experienceHeader}>
          <h3>LISTo UGA (Latinos Invested in the Students of Tomorrow)</h3>
          <p className={styles.jobLocation}>Athens, GA</p>
          <p className={styles.jobTitle}>Mentor</p>
          <p className={styles.jobPeriod}>September 2023 – May 2025</p>
        </div>
        <ul className={styles.responsibilities}>
          <li>
            Provided mentorship and guidance to Latinx first-year and transfer
            students to support their transition to university life.
          </li>
          <li>
            Offered academic, social, and emotional support to help mentees
            navigate challenges and succeed at UGA.
          </li>
          <li>
            Participated in regular mentorship activities and cultural events to
            foster community and belonging.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
