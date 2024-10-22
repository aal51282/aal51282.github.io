'use client';

import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './contact.module.css';
import { FaEnvelope, FaCheck } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'angelloaiza7140@gmail.com';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className={styles.main}>
      <Nav />
      <section className={styles.contactSection} data-aos="zoom-in">
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.contactForm}>
          <div className={styles.emailContact}>
            <button 
              onClick={copyToClipboard} 
              className={styles.copyButton} 
              aria-label="Copy email to clipboard"
            >
              {copied ? <FaCheck className={styles.checkIcon} /> : <FaEnvelope className={styles.emailIcon} />}
            </button>
            <span className={styles.emailText}>{email}</span>
          </div>
          {copied && <p className={styles.copiedMessage}>Email copied to clipboard!</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
