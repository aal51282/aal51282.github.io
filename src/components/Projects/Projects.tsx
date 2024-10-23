import React from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  image: string;
  githubLink?: string;
  externalLink?: string;
  description: string[];
  date: string;
}

const projects: Project[] = [
  {
    title: 'Money Tracker',
    image: '/images/money-tracker.jpg',
    githubLink: 'https://github.com/aal51282/money-tracker',
    externalLink: 'https://angel-money-tracker.vercel.app/',
    description: [
      'Developed a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) to track income and expenses.',
      'Utilized React, HTML, CSS, JavaScript for a dynamic and responsive user interface.',
      'Implemented MongoDB for database management to handle user data, transaction details, and financial analysis.',
      'Utilized Express and Node.js for server-side logic and API development.',
    ],
    date: 'September 2024 - October 2024',
  },
  {
    title: 'Cinema Booking Site',
    image: '/images/movie_background.jpg',
    description: [
      'Developed a cinema movie booking website from the ground up as part of a dedicated SCRUM team.',
      'Utilized React, HTML, CSS, JavaScript for a dynamic and responsive user interface.',
      'Created website pages with functionalities for movie browsing, booking tickets, selecting seats, checkout, and user profile management. Developed an admin page with capabilities to add, update, and delete movies and manage promotions.',
      'Implemented MongoDB for database management to handle user data, movie details, booking information, promotions.',
    ],
    date: 'August 2024 - December 2024',
  },
  {
    title: 'Digital Wardrobe',
    image: '/images/digital-wardrobe.png',
    description: [
      'Developed a web application for organizing and managing a digital wardrobe using the MERN stack (MongoDB, Express, React, Node.js).',
      'Implemented a feature allowing users to upload images and organize clothing items by category, color, size, and season, with images stored in Amazon S3.',
      'Created a drag-and-drop outfit planning interface, enabling users to mix and match clothing items to create custom outfits.',
      'Implemented AI-powered styling recommendations based on user preferences, wardrobe items, weather data, and past outfits.',
    ],
    date: 'October 2024 - November 2024',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects} data-aos="fade-up">
      <h2>
        <a href="/projects" className={styles.viewAllProjects}>
          View All Projects
        </a>
      </h2>
      <div className={styles.threeCol}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card} data-aos="zoom-in" data-aos-delay={index * 200}>
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300}
                className={styles.projectImage}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className={styles.projectTitle}>
              {project.title}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <FaGithub className={styles.icon} />
                </a>
              )}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <FaExternalLinkAlt className={styles.icon} />
                </a>
              )}
            </h3>
            <p>
              <em>{project.date}</em>
            </p>
            <ul>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
