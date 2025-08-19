"use client";

import React, { useEffect, useState, useRef } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./contact.module.css";
import {
  FaEnvelope,
  FaCheck,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaChevronDown,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const resumeDropdownRef = useRef<HTMLDivElement>(null);
  const email = "angelloaiza7140@gmail.com";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(event.target as Node)) {
        setIsResumeDropdownOpen(false);
      }
    };

    if (isResumeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isResumeDropdownOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
    });
  };

  const handleResumeToggle = () => {
    setIsResumeDropdownOpen(!isResumeDropdownOpen);
  };

  const handleResumeClick = (format: string) => {
    const filename = `angel-loaiza-resume.${format}`;
    const link = document.createElement("a");
    link.href = `/resume/${filename}`;
    link.setAttribute("download", "angel-loaiza-resume");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsResumeDropdownOpen(false); // Close dropdown after selection
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
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className={styles.emailContact}>
              <button
                onClick={copyToClipboard}
                className={styles.copyButton}
                aria-label="Copy email to clipboard"
                title="Click to copy"
              >
                {copied ? (
                  <FaCheck className={styles.checkIcon} />
                ) : (
                  <FaEnvelope className={styles.emailIcon} />
                )}
              </button>
              <span className={styles.emailText}>{email}</span>
              {copied && (
                <p className={styles.copiedMessage}>Copied!</p>
              )}
            </div>
          </div>

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
            <div
              className={styles.resumeDropdownContainer}
              ref={resumeDropdownRef}
            >
              <button
                className={`${styles.socialLink} ${styles.resumeLink}`}
                aria-label="Download Resume"
                aria-expanded={isResumeDropdownOpen}
                aria-haspopup="true"
                onClick={handleResumeToggle}
              >
                <FaFileDownload />
                <span>Resume</span>
                <FaChevronDown
                  className={`${styles.dropdownIcon} ${
                    isResumeDropdownOpen ? styles.rotateIcon : ""
                  }`}
                />
              </button>
              {isResumeDropdownOpen && (
                <div className={styles.resumeFormatOptions}>
                  <button onClick={() => handleResumeClick("pdf")}>
                    PDF Version
                  </button>
                  <button onClick={() => handleResumeClick("docx")}>
                    Word Version
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
