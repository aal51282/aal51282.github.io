"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./projects.module.css";
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
import ProjectCard from "@/components/Projects/ProjectCard";

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
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
