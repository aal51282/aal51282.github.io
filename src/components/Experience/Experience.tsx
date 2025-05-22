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
          <p className={styles.jobTitle}>Website Developer</p>
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
          <p className={styles.jobTitle}>Software Developer, Intern</p>
          <p className={styles.jobPeriod}>May 2024 – August 2024</p>
        </div>
        <ul className={styles.responsibilities}>
          <li>
            Designed, developed, and launched the official company website,
            establishing an online presence and directly contributing to a 16%
            increase in project volume and new client acquisitions.
          </li>
          <li>
            Built a comprehensive material and equipment inventory tracking
            system with database integration to monitor construction supplies,
            tools, and equipment across multiple job sites, reducing material
            waste and improving project cost management by 35%.
          </li>
          <li>
            Developed an internal communication platform featuring real-time
            chat systems, automated notifications, and alert mechanisms for
            project deadlines and safety incidents, improving team coordination
            and reducing project delays by 25%.
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
