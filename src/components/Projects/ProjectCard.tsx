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
  // Common button styles for featured project cards
  const buttonStyles = isFeatured
    ? {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 0.8rem",
        borderRadius: "8px",
        fontWeight: 500,
        fontSize: "0.95rem",
        flex: "1",
        justifyContent: "center",
        minWidth: "0",
        whiteSpace: "nowrap",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }
    : {};

  // Custom hover event handlers for featured buttons
  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isFeatured) {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 7px 14px rgba(0, 0, 0, 0.1)";
    }
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isFeatured) {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    }
  };

  // Custom hover handlers for colored buttons
  const handleGradientMouseOver = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color: string
  ) => {
    if (isFeatured) {
      e.currentTarget.style.transform = "translateY(-3px)";
      if (color === "blue") {
        e.currentTarget.style.boxShadow = "0 7px 14px rgba(37, 99, 235, 0.3)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, #2563eb, #1d4ed8)";
      } else if (color === "green") {
        e.currentTarget.style.boxShadow = "0 7px 14px rgba(16, 185, 129, 0.3)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, #059669, #047857)";
      } else if (color === "cyan") {
        e.currentTarget.style.boxShadow = "0 7px 14px rgba(14, 165, 233, 0.3)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, #0284c7, #0369a1)";
      }
    }
  };

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
      <div
        className={styles.projectContent}
        style={
          isFeatured
            ? {
                display: "flex",
                flexDirection: "column",
                height: "calc(100% - 220px)",
                padding: "1.8rem",
              }
            : {}
        }
      >
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
        <div
          className={styles.projectDescription}
          style={
            isFeatured
              ? {
                  flex: "1 1 auto",
                  minHeight: "80px",
                  marginTop: "0.75rem",
                  marginBottom: "1.25rem",
                }
              : {}
          }
        >
          {project.description
            .map((desc, i) => (
              <p key={i}>{isFeatured && i > 0 ? null : desc}</p>
            ))
            .filter(Boolean)}
        </div>
        <div
          className={styles.projectLinks}
          style={
            isFeatured
              ? {
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginTop: "auto",
                  marginBottom: "0.25rem",
                }
              : {}
          }
        >
          {/* GitHub Button - shown for all non-Website projects with a GitHub link */}
          {project.category !== "Website" && project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={isFeatured ? "" : styles.link}
              style={{
                ...buttonStyles,
                ...(isFeatured
                  ? {
                      color: "#333",
                      backgroundColor: "#f1f5f9",
                    }
                  : {}),
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <FaGithub /> GitHub
            </Link>
          )}

          {/* Website Link - shown only for Website category */}
          {project.category === "Website" && project.liveDemo && (
            <Link
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isFeatured ? "" : `${styles.link} ${styles.websiteLink}`
              }
              style={{
                ...buttonStyles,
                ...(isFeatured
                  ? {
                      background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                      color: "white",
                      border: "none",
                      boxShadow: "0 2px 4px rgba(14, 165, 233, 0.25)",
                    }
                  : {}),
              }}
              onMouseOver={(e) => handleGradientMouseOver(e, "cyan")}
              onMouseOut={handleMouseOut}
            >
              <FaGlobe /> Visit Website
            </Link>
          )}

          {/* Watch Demo Button - shown for non-Website projects that have videoDemo or liveDemo */}
          {project.category !== "Website" &&
            (project.videoDemo || project.liveDemo) && (
              <Link
                href={project.videoDemo || project.liveDemo || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isFeatured ? "" : `${styles.link} ${styles.videoLink}`
                }
                style={{
                  ...buttonStyles,
                  ...(isFeatured
                    ? {
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        color: "white",
                        border: "none",
                        boxShadow: "0 2px 4px rgba(16, 185, 129, 0.25)",
                      }
                    : {}),
                }}
                onMouseOver={(e) => handleGradientMouseOver(e, "green")}
                onMouseOut={handleMouseOut}
              >
                <FaVideo /> Watch Demo
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
