import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import {
  FaMoon,
  FaSun,
  FaTimes,
  FaFileDownload,
  FaChevronDown,
} from "react-icons/fa";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

  // Initialize dark mode based on localStorage
  useEffect(() => {
    const darkModeStored = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(darkModeStored);
    if (darkModeStored) {
      document.documentElement.classList.add("dark");
    }

    // Force a repaint on mobile to fix hamburger menu visibility
    if (window.innerWidth <= 768) {
      const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement;
      if (navbar) {
        navbar.style.display = 'none';
        navbar.offsetHeight; // Force reflow
        navbar.style.display = '';
      }
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up any overflow styles on unmount
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Don't prevent scrolling - let users scroll with menu open
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleResumeDropdown = () => {
    setIsResumeDropdownOpen(!isResumeDropdownOpen);
  };

  const closeResumeDropdown = () => {
    setIsResumeDropdownOpen(false);
  };

  // Close resume dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.resumeContainer}`)) {
        closeResumeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Main Navigation"
    >
      <div className={styles.logo}>
        <Link href="/">Angel A. Loaiza</Link>
      </div>
      <div className={styles.mobileControls}>
        <button
          onClick={toggleDarkMode}
          className={styles.mobileDarkModeToggle}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className={`${styles.menuToggle} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
      <ul
        className={`${styles.navLinks} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <li>
          <Link href="/" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" onClick={closeMobileMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        <li className={`${styles.resumeContainer} ${isResumeDropdownOpen ? styles.active : ''}`}>
          <button
            className={styles.resumeButton}
            onClick={(e) => {
              e.stopPropagation();
              toggleResumeDropdown();
            }}
            aria-haspopup="true"
            aria-expanded={isResumeDropdownOpen}
          >
            <FaFileDownload className={styles.resumeIcon} />
            Resume <FaChevronDown className={styles.dropdownIcon} />
          </button>
          {isResumeDropdownOpen && (
            <div className={styles.resumeDropdown}>
              <a
                href="/resume/angel-loaiza-resume.pdf"
                download="angel-loaiza-resume"
                onClick={() => {
                  closeMobileMenu();
                  closeResumeDropdown();
                }}
              >
                PDF Version
              </a>
              <a
                href="/resume/angel-loaiza-resume.docx"
                download="angel-loaiza-resume"
                onClick={() => {
                  closeMobileMenu();
                  closeResumeDropdown();
                }}
              >
                Word Version
              </a>
            </div>
          )}
        </li>
        <li className={styles.toggleModeContainer}>
          <button
            onClick={toggleDarkMode}
            className={styles.toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Nav;
