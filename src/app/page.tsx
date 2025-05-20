"use client";

import React, { useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import Splash from "@/components/Splash/Splash";
import Education from "@/components/Education/Education";
import Honors from "@/components/Honors/Honors";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Splash />
        <hr className={styles.divider} data-aos="fade-in" />

        <div className={styles.section} data-aos="fade-up">
          <Education />
        </div>

        <hr className={styles.divider} data-aos="fade-in" />

        <div className={styles.section} data-aos="fade-up">
          <Honors />
        </div>

        <hr className={styles.divider} data-aos="fade-in" />

        <div className={styles.section} data-aos="fade-up">
          <Skills />
        </div>

        <hr className={styles.divider} data-aos="fade-in" />

        <div className={styles.section} data-aos="fade-up">
          <Experience />
        </div>

        <hr className={styles.divider} data-aos="fade-in" />

        <div className={styles.section} data-aos="fade-up">
          <Projects />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
