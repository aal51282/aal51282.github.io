'use client';

import React, { useEffect } from 'react';
import Nav from '@/component/Nav/Nav';
import Splash from '@/component/Splash/Splash';
import Education from '@/component/Education/Education';
import Honors from '@/component/Honors/Honors';
import Skills from '@/component/Skills/Skills';
import Experience from '@/component/Experience/Experience';
import Projects from '@/component/Projects/Projects';
import Footer from '@/component/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './page.module.css';
import '@/app/globals.css';

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
      <main>
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
