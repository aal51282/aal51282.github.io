import React from "react";
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
import styles from "@/app/projects/projects.module.css";
import { type Project } from "@/app/projects/projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isFeatured = false,
}) => {
  return (
    <div
      className={styles.projectCard}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        height: "100%",
        margin: isFeatured ? "0" : "auto", // Remove auto margins if featured
        maxWidth: isFeatured ? "none" : "400px", // Allow full width in featured layout
      }}
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
        <div className={styles.categoryTag} data-category={project.category}>
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
          {project.description
            .map((desc, i) => (
              <p key={i}>{isFeatured && i > 0 ? null : desc}</p>
            ))
            .filter(Boolean)}
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
                  <FaGlobe /> {isFeatured ? "Visit" : "Visit Website"}
                </>
              ) : project.isMobileApp ? (
                <>
                  <FaMobileAlt /> {isFeatured ? "Download" : "Download App"}
                </>
              ) : (
                <>
                  <FaLink /> {isFeatured ? "Live" : "View Live"}
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
              <FaVideo /> {isFeatured ? "Demo" : "Watch Demo"}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
