import React from "react";
import styles from "./Splash.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Splash: React.FC = () => {
  return (
    <section id="about" className={styles.splash}>
      <div className={styles.backgroundEffect}></div>
      <div className={styles.splashContent}>
        <div className={styles.profileImage} data-aos="fade-right">
          <Image
            src="/images/Profile_Picture.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className={styles.profilePic}
            priority
          />
        </div>
        <div className={styles.textContent} data-aos="fade-left">
          <h1 className={styles.name}>Angel A. Loaiza</h1>
          <h2 className={styles.tagline}>Software Engineer</h2>
          <p className={styles.description}>
            Innovative Software Engineer with expertise in machine learning,
            artificial intelligence, and database management, building on a
            strong foundation in aerospace engineering and computer science.
          </p>
          <div className={styles.contact}>
            <p className={styles.address}>
              Athens, GA • 404-379-8011 • angelloaiza7140@gmail.com
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/aal51282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/angel-loaiza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:angelloaiza7140@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className={styles.cta}>
            <Link href="/projects" className={styles.primaryButton}>
              View Projects
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
