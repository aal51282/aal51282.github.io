import React from "react";
import styles from "./projects.module.css";

export interface Project {
  title: string;
  image: string;
  githubLink?: string;
  liveDemo?: string;
  videoDemo?: string;
  description: React.ReactNode[];
  date: string;
  category: "University Project" | "Side Project" | "Website";
  isHackathonWinner?: boolean;
  hackathonDetails?: string;
  isMobileApp?: boolean;
}

export const projects: Project[] = [
  {
    title: "Rideshare Mobile Application",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/rideshare-app.jpg`,
    githubLink: "https://github.com/aal51282/UGARideShare",
    liveDemo:
      "https://www.loom.com/share/7e00c4b333664160aece241c75436b9c?sid=267a06b6-ecba-4038-a138-683d30a79956",
    description: [
      <>
        Developed a community-driven ride-sharing Android application that
        facilitates carpooling with a points-based system where users earn
        points for offering rides and spend points when requesting rides.
      </>,
      <>
        Built with <span className={styles.techHighlight}>Java</span>,{" "}
        <span className={styles.techHighlight}>Firebase Realtime Database</span>
        , and{" "}
        <span className={styles.techHighlight}>Firebase Authentication</span>,
        featuring user authentication, ride offers/requests management, and an
        intuitive navigation system.
      </>,
    ],
    date: "April 2025",
    category: "University Project",
    isMobileApp: true,
  },
  {
    title: "ULEAD Athens Website Redesign",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ulead-athens.png`,
    liveDemo: "https://www.uleadathens.org/",
    description: [
      <>
        Led the redesign of ULEAD Athens&apos; outdated website to enhance user
        experience and modernize their online presence.
      </>,
      <>
        Initially developed a dynamic proof-of-concept website utilizing{" "}
        <span className={styles.techHighlight}>Next.js</span>,{" "}
        <span className={styles.techHighlight}>TypeScript</span>, and modern UI
        principles, then successfully transitioned the design to{" "}
        <span className={styles.techHighlight}>Squarespace</span> for client
        self-management.
      </>,
    ],
    date: "March 2025 - May 2025",
    category: "Website",
  },
  {
    title: "Country Quiz Mobile Application",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/country-quiz.png`,
    githubLink: "https://github.com/aal51282/country-quiz-mobile-app-4",
    liveDemo:
      "https://www.loom.com/share/1a0f23d3272d4b71aea22854e257f87a?sid=8fdca8c6-b038-4fcf-99ce-703d7d84399f",
    description: [
      <>
        Developed an Android mobile application that tests users&apos; knowledge
        of countries and continents through interactive quizzes with multiple
        choice questions and progress tracking.
      </>,
      <>
        Built with <span className={styles.techHighlight}>Java</span> and{" "}
        <span className={styles.techHighlight}>SQLite</span>, implementing
        Material Design principles, offline functionality, and visual continent
        map displays with data loaded from CSV files.
      </>,
    ],
    date: "March 2025",
    category: "University Project",
    isMobileApp: true,
  },
  {
    title: "Truest Assist",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/truest-assist.png`,
    githubLink: "https://github.com/aal51282/truest-assist",
    liveDemo:
      "https://www.loom.com/share/f5c76300a38c4d7bb984395358a24959?sid=13c83bfc-e69d-4340-8f83-a7a962fbbd64",
    description: [
      <>
        Co-developed an innovative gamified platform to simplify financial
        analysis learning, achieving <strong>2nd Place</strong> in Truist
        Bank&apos;s challenge category at UGA X Hackathon.
      </>,
      <>
        Engineered 5 interactive modules with AI-generated quizzes using{" "}
        <span className={styles.techHighlight}>Groq AI</span>, video
        integration, and <span className={styles.techHighlight}>MongoDB</span>{" "}
        authentication, built with{" "}
        <span className={styles.techHighlight}>Next.js</span> and{" "}
        <span className={styles.techHighlight}>Tailwind CSS</span>.
      </>,
    ],
    date: "February 2025",
    category: "Side Project",
    isHackathonWinner: true,
    hackathonDetails: "2nd Place - UGA X Hackathon",
  },
  {
    title: "AI Video Generator",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/ai-video-generator.png`,
    githubLink: "https://github.com/aal51282/ai-video-generator",
    videoDemo:
      "https://www.loom.com/share/2561469cc23f47b0907cc5d271ac5c52?sid=9b66acb0-83af-42b6-a866-ae7c8d26dce2",
    description: [
      <>
        Developed a full-stack application that generates short videos from text
        input using AI technologies, combining AI-generated images, text
        overlays, and voice narration.
      </>,
      <>
        Built with <span className={styles.techHighlight}>Next.js 14</span>,{" "}
        <span className={styles.techHighlight}>FastAPI</span>, and{" "}
        <span className={styles.techHighlight}>Python</span>, integrating{" "}
        <span className={styles.techHighlight}>Stability AI</span> for image
        generation and <span className={styles.techHighlight}>ElevenLabs</span>{" "}
        for voice synthesis.
      </>,
    ],
    date: "December 2024",
    category: "Side Project",
  },
  {
    title: "Bitcoin Price Comparison Tool",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/btc-tracker.png`,
    githubLink: "https://github.com/aal51282/coins-table",
    liveDemo:
      "https://www.loom.com/share/cede1f41e7c445a28bdb5fb7cd8bf59f?sid=c31673b1-f793-4526-9b71-a8d5471d4928",
    description: [
      <>
        Built a real-time Bitcoin price comparison tool using{" "}
        <span className={styles.techHighlight}>React</span>,{" "}
        <span className={styles.techHighlight}>FastAPI</span>, and{" "}
        <span className={styles.techHighlight}>Python</span> that compares rates
        across multiple providers (Guardarian, Paybis, Transak, MoonPay).
      </>,
      <>
        Implemented automatic rate sorting, real-time price updates, and
        comprehensive fee calculations using modern component architecture and{" "}
        <span className={styles.techHighlight}>Tailwind CSS</span>.
      </>,
    ],
    date: "December 2024",
    category: "Side Project",
  },
  {
    title: "Wardrobe Wizard",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/wardrobe-wizard.png`,
    githubLink: "https://github.com/aal51282/wardrobe-wizard",
    liveDemo:
      "https://www.loom.com/share/e4607878a37640ceb17ee53eda28a466?sid=cac91200-6680-4acb-9539-1519cc98c6c1",
    description: [
      <>
        Developed a modern wardrobe management application using{" "}
        <span className={styles.techHighlight}>Next.js 14</span> and{" "}
        <span className={styles.techHighlight}>TypeScript</span>, featuring user
        authentication, comprehensive wardrobe organization, and outfit creation
        capabilities.
      </>,
      <>
        Built with <span className={styles.techHighlight}>MongoDB</span> for
        data persistence, and implemented an intuitive UI using{" "}
        <span className={styles.techHighlight}>Tailwind CSS</span>,{" "}
        <span className={styles.techHighlight}>Shadcn UI</span>, and{" "}
        <span className={styles.techHighlight}>Radix UI</span>, enabling
        features like product filtering, outfit styling with a mannequin system,
        and responsive design.
      </>,
    ],
    date: "October 2024 - November 2024",
    category: "University Project",
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
        Built a full-stack web application using the{" "}
        <span className={styles.techHighlight}>MERN</span> stack (
        <span className={styles.techHighlight}>MongoDB</span>,{" "}
        <span className={styles.techHighlight}>Express</span>,{" "}
        <span className={styles.techHighlight}>React</span>,{" "}
        <span className={styles.techHighlight}>Node.js</span>) to track income
        and expenses.
      </>,
      "Provides users with a clear overview of their financial transactions and analysis.",
    ],
    date: "September 2024 - October 2024",
    category: "Side Project",
  },
  {
    title: "Cinema Booking System",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/movie_background.png`,
    githubLink: "https://github.com/aal51282/Cinema-Booking-System",
    liveDemo:
      "https://www.loom.com/share/b6de639caff347368c408a49fd94f21e?sid=db5431d3-201f-4d96-a60d-52f54f8f9e3e",
    description: [
      <>
        Developed a cinema movie booking website using{" "}
        <span className={styles.techHighlight}>React</span>,{" "}
        <span className={styles.techHighlight}>SQLite</span>, and{" "}
        <span className={styles.techHighlight}>Node.js</span> with{" "}
        <span className={styles.techHighlight}>Express</span>.
      </>,
      "Features include movie browsing, ticket booking, seat selection, and user profile management.",
    ],
    date: "August 2024 - December 2024",
    category: "University Project",
  },
  {
    title: "TRU Remodeling, INC. Website",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/tru-remodeling.webp`,
    liveDemo: "https://truremodeling.com",
    description: [
      <>
        Designed, developed, and launched the official company website,
        establishing an online presence and improving client accessibility.
      </>,
      <>
        Created using <span className={styles.techHighlight}>Next.js</span> and{" "}
        <span className={styles.techHighlight}>Tailwind CSS</span>, featuring
        responsive design, service showcase, and client testimonials to enhance
        the company&apos;s online presence.
      </>,
    ],
    date: "May 2024",
    category: "Website",
  },
  {
    title: "Venue-Weather Finder",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/venue-weather-finder.png`,
    githubLink: "https://github.com/aal51282/venue-weather-finder",
    liveDemo:
      "https://www.loom.com/share/ee46237842b24d859f91a5dacce33867?sid=acce4fc7-9729-4be2-91bd-4ccbf8e24109",
    description: [
      <>
        Created a <span className={styles.techHighlight}>JavaFX</span>{" "}
        application integrating venue and weather APIs to provide real-time
        venue details and weather conditions based on user inputs.
      </>,
    ],
    date: "November 2023 - December 2023",
    category: "University Project",
  },
  {
    title: "Gallery App",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/itunes.jpg`,
    githubLink: "https://github.com/cs1302uga/cs1302-gallery",
    liveDemo:
      "https://www.youtube.com/watch?v=5SsO63m-Q5A&ab_channel=CSCI1302UGA",
    description: [
      <>
        Developed a <span className={styles.techHighlight}>JavaFX</span>{" "}
        application that dynamically displays a gallery of images based on user
        search queries using the{" "}
        <span className={styles.techHighlight}>iTunes Search API</span>.
      </>,
      <>
        Implemented object-oriented principles for modularity and
        maintainability.
      </>,
    ],
    date: "October 2023 - November 2023",
    category: "University Project",
  },
];
