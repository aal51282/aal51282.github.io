"use client";

import React, { useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "./projectsData";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 0,
      disable: false,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.projectsPage}>
          <h1 className={styles.title}>My Projects</h1>
          <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                style={{
                  width: "350px",
                  flex: "1 1 350px",
                  maxWidth: "350px",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.projectImage}
                  priority={index < 3}
                />
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDate}>
                    <em>{project.date}</em>
                  </p>
                  <div className={styles.projectDescription}>
                    {project.description.map((desc, i) => (
                      <p key={i} style={{ marginBottom: '0.5rem' }}>
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <FaGithub /> GitHub
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.highlightedLink}`}
                      >
                        <FaLink /> Deployed Site
                      </Link>
                    )}
                    {project.videoDemo && (
                      <Link
                        href={project.videoDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.videoLink}`}
                      >
                        <FaLink /> Watch Demo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
