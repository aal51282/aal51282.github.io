import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronize dark mode state with the 'dark' class on the document
  useEffect(() => {
    const darkModeClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeClass);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.logo}>
        <Link href="/">Angel A. Loaiza</Link>
      </div>
      <button
        className={styles.menuToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button
            onClick={toggleDarkMode}
            className={styles.toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
