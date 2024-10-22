'use client';

import React, { useEffect } from 'react';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: 'Digital Wardrobe',
    image: '/images/digital-wardrobe.png',
    githubLink: 'https://github.com/aal51282/digital-wardrobe',
    liveDemo: 'https://digital-wardrobe-demo.com',
    description: [
      'Developed a web application for organizing and managing a digital wardrobe using the MERN stack (MongoDB, Express, React, Node.js).',
      'Allows users to upload images and organize clothing items by category, color, size, and season.',
    ],
    date: 'October 2024 - November 2024',
  },
  {
    title: 'Money Tracker',
    image: '/images/money-tracker.jpg',
    githubLink: 'https://github.com/aal51282/money-tracker',
    liveDemo: 'https://angel-money-tracker.vercel.app/',
    description: [
      'Built a full-stack web application using the MERN stack to track income and expenses.',
      'Provides users with a clear overview of their financial transactions and analysis.',
    ],
    date: 'September 2024 - October 2024',
  },
  {
    title: 'Cinema Booking Site',
    image: '/images/movie_background.png',
    githubLink: 'https://github.com/xueluofengfei/UGA_SoftwareEngineering_TeamProject',
    liveDemo: 'https://cinema-booking-demo.com',
    description: [
      'Developed a cinema movie booking website using React, MongoDB, and Express.js.',
      'Features include movie browsing, ticket booking, seat selection, and user profile management.',
    ],
    date: 'August 2024 - December 2024',
  },
  {
    title: 'Multiple API Integration',
    image: '/images/api_app.jpg',
    githubLink: 'https://github.com/aal51282/cs1302-api-app',
    liveDemo: 'https://api-integration-demo.com',
    description: [
      'Created a JavaFX application integrating venue and weather APIs to provide real-time venue details and weather conditions based on user inputs.',
    ],
    date: 'November 2023 - December 2023',
  },
  {
    title: 'UI/UX and API Integration',
    image: '/images/itunes.jpg',
    githubLink: 'https://github.com/aal51282/itunes-app',
    liveDemo: 'https://uiux-itunes-demo.com',
    description: [
      'Developed a JavaFX application that dynamically displays a gallery of images based on user search queries using the iTunes Search API.',
      'Implemented object-oriented principles for modularity and maintainability.',
    ],
    date: 'October 2023 - November 2023',
  },
];

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
                data-aos-delay={index * 200}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.projectImage}
                />
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDate}><em>{project.date}</em></p>
                  <p className={styles.projectDescription}>{project.description.join(' ')}</p>
                  <div className={styles.projectLinks}>
                    {project.githubLink && (
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FaGithub /> GitHub
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FaLink /> Live Demo
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

