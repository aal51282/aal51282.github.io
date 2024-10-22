'use client';

import React, { useEffect } from 'react';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './contact.module.css';
import { FaEnvelope } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.contactSection} data-aos="zoom-in">
          <h1 className={styles.title}>Contact Me</h1>
          <form className={styles.contactForm}>
            <div className={styles.emailContact}>
              <FaEnvelope className={styles.emailIcon} />
              <a href="mailto:angelloaiza7140@gmail.com" className={styles.emailLink}>
                angelloaiza7140@gmail.com
              </a>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

