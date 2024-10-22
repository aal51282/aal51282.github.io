import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2024 Angel A. Loaiza. All rights reserved. | <Link href="/">Home</Link>
      </p>
      <div className={styles.socialShare}>
        <a
          href="https://www.linkedin.com/in/angel-loaiza-a7b5b7246/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aal51282"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FaGithub />
        </a>
        <a
          href="mailto:aal51282@uga.edu"
          aria-label="Email"
          className={styles.socialLink}
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
