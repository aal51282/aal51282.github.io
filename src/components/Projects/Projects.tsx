import React from "react";
import Link from "next/link";
import styles from "@/app/projects/projects.module.css";
import homeStyles from "./Projects.module.css";
import { projects } from "@/app/projects/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className={homeStyles.projectsPage} id="projects">
      <h2 className={homeStyles.title}>Featured Projects</h2>
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <div className={homeStyles.featuredProjectsContainer}>
          {featuredProjects.map((project, index) => (
            <div key={index} className={homeStyles.featuredProjectCard}>
              <ProjectCard project={project} index={index} isFeatured={true} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link
          href="/projects"
          className={`${styles.link} ${styles.highlightedLink}`}
          style={{ display: "inline-flex", padding: "0.75rem 1.5rem" }}
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;
