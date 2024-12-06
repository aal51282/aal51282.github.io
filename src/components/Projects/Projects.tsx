import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./Projects.module.css";
import { projects } from "@/app/projects/page";
import type { Project } from "@/app/projects/page";

const Projects: React.FC = () => {
  const featuredProjects: Project[] = projects.slice(0, 3);

  return (
    <section className={styles.projectsPage} id="projects">
      <h2 className={styles.title}>Featured Projects</h2>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
            minHeight: "600px",
          }}
        >
          {featuredProjects.map((project, index) => (
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
                priority={true}
              />
              <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDate}>
                  <em>{project.date}</em>
                </p>
                <div className={styles.projectDescription}>
                  {project.description.map((desc, i) => (
                    <p key={i} style={{ marginBottom: "0.5rem" }}>
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
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          href="/projects"
          className={`${styles.link} ${styles.highlightedLink}`}
          style={{ display: "inline-flex" }}
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
