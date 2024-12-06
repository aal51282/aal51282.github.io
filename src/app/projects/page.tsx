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

const projects = [
  {
    title: "AI Video Generator",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/ai-video-generator.png`,
    githubLink: "https://github.com/aal51282/ai-video-generator",
    videoDemo: "/videos/The-clockmakers-gamble.mp4",
    description: [
      <>
        Developed a full-stack application that generates short videos from text input using AI technologies, combining AI-generated images, text overlays, and voice narration.
      </>,
      <>
        Built with <span className={styles.techHighlight}>Next.js 14</span>, <span className={styles.techHighlight}>FastAPI</span>, and <span className={styles.techHighlight}>Python</span>, integrating <span className={styles.techHighlight}>Stability AI</span> for image generation and <span className={styles.techHighlight}>ElevenLabs</span> for voice synthesis.
      </>,
    ],
    date: "December 2024",
  },
  {
    title: "Bitcoin Price Comparison Tool",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/btc-tracker.png`,
    githubLink: "https://github.com/aal51282/coins-table",
    liveDemo: "https://bitcoin-tracker-demo.vercel.app/",
    description: [
      <>
        Built a real-time Bitcoin price comparison tool using <span className={styles.techHighlight}>React</span>, <span className={styles.techHighlight}>FastAPI</span>, and <span className={styles.techHighlight}>Python</span> that compares rates across multiple providers (Guardarian, Paybis, Transak, MoonPay).
      </>,
      <>
        Implemented automatic rate sorting, real-time price updates, and comprehensive fee calculations using modern component architecture and <span className={styles.techHighlight}>Tailwind CSS</span>.
      </>,
    ],
    date: "December 2024",
  },
  {
    title: "Wardrobe Wizard",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/wardrobe-wizard.png`,
    githubLink: "https://github.com/aal51282/wardrobe-wizard",
    liveDemo: "https://wardrobe-wizard-nine.vercel.app/",
    description: [
      <>
        Developed a modern wardrobe management application using <span className={styles.techHighlight}>Next.js 14</span> and <span className={styles.techHighlight}>TypeScript</span>, featuring user authentication, comprehensive wardrobe organization, and outfit creation capabilities.
      </>,
      <>
        Built with <span className={styles.techHighlight}>MongoDB</span> for data persistence, and implemented an intuitive UI using <span className={styles.techHighlight}>Tailwind CSS</span>, <span className={styles.techHighlight}>Shadcn UI</span>, and <span className={styles.techHighlight}>Radix UI</span>, enabling features like product filtering, outfit styling with a mannequin system, and responsive design.
      </>,
    ],
    date: "October 2024 - November 2024",
  },
  {
    title: "Money Tracker",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/money-tracker.jpg`,
    githubLink: "https://github.com/aal51282/money-tracker",
    liveDemo: "https://angel-money-tracker.vercel.app/",
    description: [
      <>
        Built a full-stack web application using the <span className={styles.techHighlight}>MERN</span> stack (<span className={styles.techHighlight}>MongoDB</span>, <span className={styles.techHighlight}>Express</span>, <span className={styles.techHighlight}>React</span>, <span className={styles.techHighlight}>Node.js</span>) to track income and expenses.
      </>,
      "Provides users with a clear overview of their financial transactions and analysis.",
    ],
    date: "September 2024 - October 2024",
  },
  {
    title: "Cinema Booking Site",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/movie_background.png`,
    githubLink: "https://github.com/aal51282/Cinema-Ebooking-System",
    liveDemo: "https://cinema-ebooking-system.vercel.app/",
    description: [
      <>
        Developed a cinema movie booking website using <span className={styles.techHighlight}>React</span>, <span className={styles.techHighlight}>SQLite</span>, and <span className={styles.techHighlight}>Node.js</span> with <span className={styles.techHighlight}>Express</span>.
      </>,
      "Features include movie browsing, ticket booking, seat selection, and user profile management.",
    ],
    date: "August 2024 - December 2024",
  },
  {
    title: "Multiple API Integration",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/api_app.jpg`,
    githubLink: "https://github.com/aal51282/cs1302-api-app",
    liveDemo: "https://api-integration-demo.com",
    description: [
      <>
        Created a <span className={styles.techHighlight}>JavaFX</span> application integrating venue and weather APIs to provide real-time venue details and weather conditions based on user inputs.
      </>,
    ],
    date: "November 2023 - December 2023",
  },
  {
    title: "UI/UX and API Integration",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/itunes.jpg`,
    githubLink: "https://github.com/aal51282/itunes-app",
    liveDemo: "https://uiux-itunes-demo.com",
    description: [
      <>
        Developed a <span className={styles.techHighlight}>JavaFX</span> application that dynamically displays a gallery of images based on user search queries using the <span className={styles.techHighlight}>iTunes Search API</span>.
      </>,
      <>
        Implemented object-oriented principles for modularity and maintainability.
      </>,
    ],
    date: "October 2023 - November 2023",
  },
];

const ProjectsPage: React.FC = () => {
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
          <h1 className={styles.title} data-aos="fade-down">My Projects</h1>
          <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                style={{
                  width: "350px",
                  flex: "0 0 350px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.projectImage}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    padding: "1.5rem",
                  }}
                >
                  <div>
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
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "1rem",
                    }}
                    className={styles.projectLinks}
                  >
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
