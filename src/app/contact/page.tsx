"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./contact.module.css";
import {
  FaEnvelope,
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "angelloaiza7140@gmail.com";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const [selectedFormat, setSelectedFormat] = useState("pdf");

  const handleResumeClick = (format: string) => {
    setSelectedFormat(format);
    const filename = `angel-loaiza-resume.${format}`;
    const link = document.createElement("a");
    link.href = `/resume/${filename}`;
    link.setAttribute("download", "angel-loaiza-resume");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.main}>
      <Nav />
      <section className={styles.contactSection}>
        <h1 className={styles.title} data-aos="fade-down">
          Get In Touch
        </h1>
        <div className={styles.contactForm} data-aos="fade-up">
          <h2 className={styles.subtitle}>Contact Information</h2>
          <div className={styles.emailContact}>
            <button
              onClick={copyToClipboard}
              className={styles.copyButton}
              aria-label="Copy email to clipboard"
            >
              {copied ? (
                <FaCheck className={styles.checkIcon} />
              ) : (
                <FaEnvelope className={styles.emailIcon} />
              )}
            </button>
            <span className={styles.emailText}>{email}</span>
          </div>
          {copied && (
            <p className={styles.copiedMessage}>Email copied to clipboard!</p>
          )}

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/aal51282"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/angelloaiza/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <div className={styles.resumeDropdownContainer}>
              <button
                onClick={() => handleResumeClick("pdf")}
                className={`${styles.socialLink} ${styles.resumeLink}`}
                aria-label="Download Resume"
              >
                <FaFileDownload />
                <span>Resume</span>
              </button>
              <div className={styles.resumeFormatOptions}>
                <button onClick={() => handleResumeClick("pdf")}>PDF</button>
                <button onClick={() => handleResumeClick("docx")}>Word</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
