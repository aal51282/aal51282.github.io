import React from 'react';
import styles from './Splash.module.css';
import Image from 'next/image';

const Splash: React.FC = () => {
  return (
    <section id="about" className={styles.splash}>
      <div className={styles.splashContent}>
        <div className={styles.profileImage}>
          <Image
            src="/images/Profile_Picture.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className={styles.profilePic}
          />
        </div>
        <div className={styles.textContent}>
          <h1>Angel A. Loaiza</h1>
          <p className={styles.address}>
            Athens, GA • 404-379-8011 • angelloaiza7140@gmail.com
          </p>
          <p className={styles.description}>
            Passionate computer science student with a focus on machine learning, artificial intelligence, and database management, leveraging a strong foundation in aerospace engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Splash;

