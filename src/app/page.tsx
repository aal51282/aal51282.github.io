'use client';

import React, { useEffect } from 'react';
import Nav from '@/components/Nav/Nav';
import Splash from '@/components/Splash/Splash';
import Education from '@/components/Education/Education';
import Honors from '@/components/Honors/Honors';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './page.module.css';

export default function Home() {
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
        <Splash />
        <hr className={styles.divider} />
        <Education />
        <Honors />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
