"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLink,
  FaVideo,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobe,
  FaTrophy,
  FaMobileAlt,
} from "react-icons/fa";
import { projects } from "./projectsData";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = [
    "All",
    "University Projects",
    "Side Projects",
    "Websites",
  ];

  // Calculate the counts for each category
  const counts: Record<string, number> = {
    All: projects.length,
    "University Projects": projects.filter(
      (project) => project.category === "University Project"
    ).length,
    "Side Projects": projects.filter(
      (project) => project.category === "Side Project"
    ).length,
    Websites: projects.filter((project) => project.category === "Website")
      .length,
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      disable: false,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          if (selectedCategory === "University Projects")
            return project.category === "University Project";
          if (selectedCategory === "Side Projects")
            return project.category === "Side Project";
          if (selectedCategory === "Websites")
            return project.category === "Website";
          return false;
        });

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.projectsPage}>
          <h1 className={styles.title} data-aos="fade-down">
            My Projects
          </h1>
          <p
            className={styles.subtitle}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A collection of my work, showcasing web applications and software
            development projects
          </p>

          <div
            className={styles.filterContainer}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.filterButton} ${
                  selectedCategory === category ? styles.activeFilter : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}{" "}
                <span className={styles.filterCount}>{counts[category]}</span>
              </button>
            ))}
          </div>

          <div className={styles.projectsContainer}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.projectImage}
                    priority={index < 3}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDate}>
                    <em>{project.date}</em>
                  </p>
                  <div
                    className={styles.categoryTag}
                    data-category={project.category}
                  >
                    {project.category === "University Project" && (
                      <FaGraduationCap className={styles.categoryIcon} />
                    )}
                    {project.category === "Side Project" && (
                      <FaLaptopCode className={styles.categoryIcon} />
                    )}
                    {project.category === "Website" && (
                      <FaGlobe className={styles.categoryIcon} />
                    )}
                    {project.category}
                  </div>
                  {project.isHackathonWinner && (
                    <div className={styles.hackathonTag}>
                      <FaTrophy className={styles.hackathonIcon} />
                      {project.hackathonDetails}
                    </div>
                  )}
                  {project.isMobileApp && (
                    <div className={styles.mobileAppTag}>
                      <FaMobileAlt className={styles.mobileAppIcon} />
                      Mobile Application
                    </div>
                  )}
                  <div className={styles.projectDescription}>
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.category !== "Website" && project.githubLink && (
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
                        className={`${styles.link} ${
                          project.category === "Website"
                            ? styles.websiteLink
                            : project.isMobileApp
                            ? styles.mobileAppLink
                            : styles.highlightedLink
                        }`}
                      >
                        {project.category === "Website" ? (
                          <>
                            <FaGlobe /> Visit Website
                          </>
                        ) : project.isMobileApp ? (
                          <>
                            <FaMobileAlt /> Download App
                          </>
                        ) : (
                          <>
                            <FaLink /> View Live
                          </>
                        )}
                      </Link>
                    )}
                    {project.videoDemo && (
                      <Link
                        href={project.videoDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.videoLink}`}
                      >
                        <FaVideo /> Watch Demo
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
